
import TimeForm from './TimeForm';
import {useState} from 'react';


const Modal = ({date, onClose, onButton, plan}) => {

    const [title, setTitle] = useState(plan !== undefined ? plan.title : '');
    const [content, setContent] = useState(plan !== undefined ? plan.content : '');
    const [tag, setTag] = useState(plan !== undefined ? plan.tag : '');
    const [time, setTime] = useState();


    const getDate = () => {
        const y = date.getFullYear();
        const m = date.getMonth()+1;
        const d = date.getDate();
        return `${y}년 ${m}월 ${d}일`;
    }

    const clickHandler = () => {

        if (plan === undefined)
            onButton({type:"ADD", payload :{title , content, tag, date, time }});
        else 
            onButton({type:"UPDATE", payload :{title , content, tag, date, time }});

        onClose();
    }

    const closeHandler = () => {
        onButton({type : "DELETE", payload : plan});
        onClose();
    }



  return (
    <div>
         <div data-cy="modal-backdrop" className='fixed top-0 left-0 w-full h-full backdrop-blur-md z-1' onClick={onClose}></div>
            <div className='fixed z-10 w-1/2 p-8 m-0 transform -translate-x-1/2 -translate-y-1/2 border-none rounded shadow-xl top-1/2 left-1/2 bg-[#5F4119]'>
            <div className='block mb-2 text-2xl text-center text-[#FEFEDF]'>{getDate()}의 일정</div>
            <div>
            <label className='block mb-2 text-xl text-[#FEFEDF]' htmlFor='title'>제목</label>
             <input className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-black rounded' placeholder='제목를 입력하세요' defaultValue={plan?.title} id='title'onChange={e=> setTitle(e.target.value)}/>

             <label className='block mb-2 text-xl text-[#FEFEDF]' htmlFor='content'>내용</label>
             <input className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-black rounded' placeholder='내용을 입력하세요' defaultValue={plan?.content} id='content'  onChange={e=> setContent(e.target.value)}/>

             <label className='block mb-2 text-xl text-[#FEFEDF]' htmlFor='tag'>분류</label>
             <input className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-black rounded' placeholder='분류를 입력하세요' defaultValue={plan?.tag} id='tag' onChange={e=> setTag(e.target.value)}/>

            <TimeForm onChange={setTime} selectedTime={plan?.time}/>

            {plan !== undefined ? <button className='text-xl text-orange-600 bg-[#DFE0DF]' type='button'
            onClick={closeHandler}>삭제</button> : ''}

             <button className='text-xl text-orange-600 bg-[#DFE0DF]' type='button' onClick={onClose}>취소</button>
             <button className='text-xl text-lime-600 bg-[#DFE0DF]' type='button'
             onClick={clickHandler}>등록</button>

            </div>
        </div>
    </div>
  )
}

export default Modal