import React, { useRef } from 'react';
import './Start.css';

const Start = ({setUserName}) => {
    const inputRef = useRef();

    const handleClick = () => {
     inputRef.current.value && setUserName(inputRef.current.value)
    }

  return (
    <div className='start'>
      <input ref={inputRef} placeholder="enter your name" className='start-input' type="text" />
      <button className='start-button' onClick={handleClick}>Start</button>
    </div>
  )
}

export default Start
