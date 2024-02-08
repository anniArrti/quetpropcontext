import React, { useRef, useState, useEffect } from 'react';
import { useConversation } from '../context/ConversationState';
import { getData } from '../Services/chatlist';
const Form = () => {
  const [value , setValue] = useState('');
  const { addToConversation } = useConversation();
  const messagesEndRef = useRef(null);

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleChat();
    }
  };
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
     scrollToBottom();
   }, [value]);
  const handleChat = async () => {
    console.log(value);
    if(value !== "") {
      const savedData = await getData({value});
      console.log(savedData);
      if(!savedData){
        //Get From chat api
      }else{
        addToConversation({ question: value, response: savedData.answer });
      }
      setValue('')
    }
  }
  return (
    <div className="main-chatbox__footer">
    <div id="chat-form">
      <div className="field-wrapper">
        <input
          type="text"
          name="query"
          id="query-input"
          className="field-input chat-input"
          placeholder="Type your question here"
          autoFocus
          onChange={handleChange}
          value={value}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleChat}
          type="button"
          className="btn btn-primary field-submit-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            className="injected-svg"
            data-src="/icons/arrow-right-02-stroke-rounded.svg"
            role="myimg"
            color="currentColor"
          >
            <path
              d="M20 12L4 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div ref={messagesEndRef} />
    </div>
  )
}

export default Form

