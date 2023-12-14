import React, { useState } from 'react'
import AddTag from './AddTag';

const Modal = ({onClick, date, onClose, onAddSchedule, onAddTag, tags}) => {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [tag, setTag] = useState('');
  const [tagInputHidden, setTagInputHidden] = useState('true');
  const [tagRadioHidden, setTagRadioHidden] = useState('false')

  const getDate = () => {
      const y = date.getFullYear();
      const m = date.getMonth() + 1;
      const d = date.getDate();
      return `${y}년 ${m}월 ${d}일`
  };

  const addSchedule = () => {
    const updateScedule = {
      id: self.crypto.randomUUID(),
      title,
      text,
      tag,
      date: getDate()
    }

    onAddSchedule(updateScedule);
  };

  const addTag = () => {
    onAddTag(tag);
  };

  const isTagHidden = () => {
    if (tagInputHidden === 'true') {
      setTagInputHidden('false');
      setTagRadioHidden('true');
    }
    else if (tagInputHidden === 'false') {
      setTagInputHidden('true');
      setTagRadioHidden('false');
    }
  };

  let key = 0;

  return (
    <div>
        <div data-cy="modal-backdrop" className='fixed top-0 left-0 w-full h-full backdrop-blur-md z-1' onClick={onClose}></div>
        <div 
            className='fixed z-10 w-1/2 p-8 m-0 transform -translate-x-1/2 -translate-y-1/2 border-none rounded shadow-xl top-1/2 left-1/2 bg-slate-600'>
            <p>{'등록'}하기</p>
            <p>{getDate()}</p>
            <form>
              <div>
                <label>제목</label>
                <input type='text' onChange={e => setTitle(e.target.value)}/>
              </div>
              <div>
                <label>내용</label>
                <textarea onChange={e => setText(e.target.value)}></textarea>
              </div>
              <div>
                <label>태그</label>
                <div className={tagRadioHidden}>
                  {tags.map((tag) => <AddTag key={key++} tag={tag} />)}
                </div>
                <button type='button' onClick={isTagHidden}>태그 생성</button>
                <div className={tagInputHidden}>
                  <input type="text" onChange={e => setTag(e.target.value)} />
                  <button type='button' onClick={() => {addTag(); isTagHidden();}}>생성</button>
                </div>
              </div>
              <div>
                <button>취소</button>
                <button type='button' onClick={addSchedule}>등록</button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default Modal