# frontend-3rd-Calendar

![header](https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=3rd_HideMe!%20&fontSize=90)

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



<br><br>
# 외부 라이브러리 사용
react-calendar 라이브러리 사용

선정 이유 : 

# 3️⃣ 핵심 기능 설명 및 구현 방법
## 일정 등록/조회/수정/삭제 기능
## 카테고리 별 분류 기능
## 사용자가 원하는 카테고리 생성 기능
<br><br>

# 4️⃣ 트러블 슈팅
## 💣 모달창을 열면 선택했던 날짜의  색상이 하얀색으로 변하는 이슈

- 버튼을 클릭 시 기존에 적용되어있던 .react-calendar__tile--active의 background-color 스타일보다
우선되는 태그에 background-color 요소가 들어가 있어 색상이 변하게 됨<br>

  .react-calendar__tile--active의 background-color 스타일에<br>
  !important 요소를 추가하여 버튼이 클릭된 상태에서는 배경색이 변하지 않도록 설정


## 💣 분류를 선택할 때 button태그를 사용하면 여러개를 중복하여 선택할 수 있는 이슈

- 함수로 구현하여 설정할 수도 있지만, input radio를 사용할 시 간단하게 설정할 수 있어 input radio를 사용하여 작성


<br><br>

# 5️⃣ 회고(느낀점)

* 김경은

> 

* 문지환

> 

* 이진천

> 
