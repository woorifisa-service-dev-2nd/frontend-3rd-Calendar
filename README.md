# frontend-3rd-Calendar

![header](https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=3rd_Calendar%20&fontSize=90)

# 1️⃣ 주제 및 팀(팀원) 소개

## 주제 :clipboard:
**달력에 매일매일 일정을 입력할 수 있는 서비스**

<br><br>

## 팀원

| [김경은](https://github.com/GyeongEun-Kim)      | [문지환](https://github.com/mnjihwan)      | [이진천](https://github.com/LeeJincheon) |         
| ------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------|
| ![김경은](https://github.com/GyeongEun-Kim.png) | ![문지환](https://github.com/mnjihwan.png) | ![이진천](https://github.com/LeeJincheon.png) |
<br><br>

# 2️⃣ 협업 방식
- `Git`&`Github`& `Slack` 사용
- `일정` 등록 관련 기능과 `태그` 등록 관련 기능을 분리하여 구현 진행

<br><br>
# 3️⃣ 활용 기술
1. 개발 환경
   
`React`, `javascript`,`tailwindCSS`
  
2. 사용 라이브러리
   
`react-calendar` 라이브러리 사용

선정 이유 : 캘린더에 일정을 추가하는 기능을 만드는 것이 목적이라서 가장 심플하다고 생각되는 `react-calendar` 라이브러리 사용
<br><br>


# 4️⃣ 핵심 기능 설명 및 구현 방법
## 일정 등록/조회/수정/삭제 기능


```javascript

const [planList, dispatch] = useReducer(onButton, {data: []}); 
//리듀서를 사용하여 handler함수의 갯수를 줄임

const onButton = (planList, action) => {
    const {data} = planList;
    //리듀서 작성
    switch (action.type) {
      case 'ADD' :
        const newPlan = {
          content : action.payload.content,
          tag : action.payload.tag,
          date : action.payload.date,
          time : action.payload.time
        }

        return { data : [...data, newPlan] } ;

      case 'UPDATE' :

        const updatedPlan = action.payload;
        const updatedPlans = data.map(p => p.date.getDate() === updatedPlan.date.getDate() ?  updatedPlan : p );

        return {data : updatedPlans};

      case 'DELETE' :

        const deletedPlans = data.filter(p => p.date.getDate() !== action.payload.date.getDate());

        return {data : deletedPlans};
    } 
  }
```


## 카테고리 별 도트 색상 기능
```javascript
 const colors = [`#5A1B00`,`#006E60`, `#FFA600` ];
//더미데이터의 양만큼 color도 존재

return (
    <>
      //캘린더를 렌더링하는 부분
      <Calendar onChange={onChange} value={value} navigationLabel={null} formatDay={(locale, date) => moment(date).format("DD")}
      showNeighboringMonth={false} tileContent={( { date } ) => {
        const arr = planList.data.filter(plan => plan.date.getDate() === date.getDate());
         //오늘 날짜의 plan을 꺼냄
        if(arr.length !== 0) { //오늘날짜의 plan이 있는 곳에만 도트를 생성
          return (
            <>
              <div className="flex justify-center items-center absoluteDiv">
                <div className="dot" style={{backgroundColor : getRandomColor(arr[0])}}></div> //getRandomColor함수를 호출
              </div>
            </>
          );
          }
      }}/>
```

```javascript
const getRandomColor = (plan) => {
    //태그 인덱스와 일치하는 인덱스의 컬러를 꺼냄
    const tag = plan.tag;
    const idx = tags.indexOf(tag);
    return colors[idx];
  }
```

## 사용자가 원하는 카테고리 생성 기능
```javascript
 const addTagHandler = (newTag) => {

    const newTags = [...tags, newTag];
    colors.push("#"+(parseInt(Math.random()*0xffffff)).toString(16)); //컬러를 담는 배열에도 랜덤색상을 추가
    setTags(newTags); //새 태그 생성
  }
```

```javscript
{tags.map((t) => <AddTag key={key++} tag={t} onChange={setTag} checked={checked(t)}/>)}
//setTag가 addTagHandler
```

```javascript
const AddTag = ({tag, onChange, checked}) => {
    return (
        <span className='m-2'>
            <input  type="radio" name="tag" value={tag} onChange={()=>onChange(tag)}
            checked={checked}/>
            <span className='text-[#FEFEDF]'>{tag}</span> 
        </span>
    )
}
```

`addTagHandler`를 통해 새로운 태그를 생성하고, 생성된 모든 태그를 `map`을 사용해 보여줌

<br><br>

# 5️⃣ 트러블 슈팅
## 💣 모달창을 열면 선택했던 날짜의  색상이 하얀색으로 변하는 이슈

- 버튼을 클릭 시 기존에 적용되어있던 `.react-calendar__tile--active`의 `background-color` 스타일보다
우선되는 태그에 `background-color` 요소가 들어가 있어 색상이 변하게 됨<br>

  `.react-calendar__tile--active`의 `background-color` 스타일에<br>
  `!important` 요소를 추가하여 버튼이 클릭된 상태에서는 배경색이 변하지 않도록 설정


## 💣 분류를 선택할 때 button태그를 사용하면 여러개를 중복하여 선택할 수 있는 이슈

- 함수로 구현하여 설정할 수도 있지만, `input radio`를 사용할 시 간단하게 설정할 수 있어 `input radio`를 사용하여 작성

## 💣 input radio에서 checked 프로퍼티 사용
- `input radio`에서 선택한 값을 지정하기 위해 `checked`라는 프로퍼티를 사용했는데 처음에는 값을 `true`, `false`로 주면 동작할 것으로 예상
- 그러나 `boolean`이 아니라 `string`값의 존재유무로 `checked`가 동작한다는 것을 알게됨.


<br><br>

# 6️⃣ 회고(느낀점)

* 김경은

  > 실습으로 만들었던 투두앱에 달력을 더한 서비스를 만들었다. 캘린더위에 도트를 그리기 위해 캘린더 라이브러리를 분석해보고 조작할수 있어서 의미가 있었다. 또한 처음에 어떤 `Context`를 쓸지 정하지 않고 시작해서 나중에 코드가 좀 더러워졌던 문제가 있었다. 이후에 진행할때는 설계부터 꼼꼼하게 진행해보고 싶다.

* 문지환

  > todo 페이지를 만들 땐 어느 정도 틀이 주어져서 비교적 쉽게 할 수 있었는데, 이렇게 완전히 처음부터 하게 되니 너무 어려웠습니다. 처음 만들 때 `context`와 `reducer`를 사용하지 않고 만들었다가 추후에 리팩토링을 하려고 다시 해보니 context를 초기부터 설계해서 하는게 더 깔끔하게 만들 수 있을 것 같다고 생각이 들었습니다.

* 이진천

  > 리액트가 아직 익숙하지 않아서 어려움이 많았습니다. `Hook` 사용을 더 공부해야겠다고 느꼈습니다.
