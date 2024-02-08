import React from 'react';
import Form from './Form';
import Conversation from './Conversation';
import ChatListWrapper from './ChatListWrapper';
const Home = () => {
  return (
    <div className="chatbox-wrapper">
      <div className="main-chatbox" >
        <div className="main-chatbox__header">
          <h1 className="main-chatbox__heading">
            To <span>Get Instant Quotes</span> Type Your Question Here!
          </h1>
        </div>
        <Conversation />
        <Form />
      </div>
      <ChatListWrapper />
    </div>
  )
}
export default Home;