import React, { useRef, useState, useEffect } from 'react';
import { useConversation } from '../context/ConversationState';

export default function Conversation() {
  const { conversation } = useConversation();
  const messagesEndRef = useRef(null);
  const [displayedResponses, setDisplayedResponses] = useState([]);
  const chatboxRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    const chatbox = chatboxRef.current;
    const chatboxFooter = document.querySelector(".main-chatbox__footer");
    if (chatbox) {
      const setChatboxHeight = () => {
        chatbox.style.height = `calc(100vh - ${
          chatbox.offsetTop + chatboxFooter.offsetHeight + 40
        }px)`;
      };
      setChatboxHeight();

      window.addEventListener('resize', setChatboxHeight);
      return () => {
        window.removeEventListener('resize', setChatboxHeight);
      };
    }
  }, []);
  useEffect(() => {
    console.log(conversation);
    setDisplayedResponses([]);
    if (conversation.length > 0) {
      const lastItem = conversation[conversation.length - 1];
     // if (lastItem && lastItem.response) {
        const words = lastItem?.response.split(' ');
        if (words.length > 0) {
          let index = -1;
          const displayWord = () => {
            if (index < words.length) {
              setDisplayedResponses(prevWords => [...prevWords, words[index]]);
              index++;
              setTimeout(displayWord, 50); // Recursive setTimeout
            }
          };
          displayWord();
        }
     // }
    }
    scrollToBottom();
  }, [conversation]);

  const renderHtml = (html) => {
    return { __html: html };
  };

  return (
    <div className="main-chatbox__body chatbox scrollbar-hide" ref={chatboxRef}>
      {conversation.map((item, index) => (
        <div key={index}>
          <p className="chat-message user-message">
            {item.question}
          </p>
          <p className="chat-message bot-message">
          {index === conversation.length - 1 ?
              displayedResponses.map((word, i) => (
                <span key={i} dangerouslySetInnerHTML={word ? renderHtml(word + ' '): renderHtml(' ')} />
              ))
              :
              <span dangerouslySetInnerHTML={renderHtml(item.response)} />
            }
          </p>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}