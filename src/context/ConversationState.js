import React, { useState, useContext } from 'react';
import ConversationContext from './ConversationContext';

// Create a provider for the context
export  const ConversationState = ({ children }) => {
  const [conversation, setConversation] = useState([]);
  const [chatList, setChatList] = useState([]);

  const addToConversation = (message) => {
    setConversation([...conversation, message]);
    setChatList([...chatList, message]);
  };

  return (
    <ConversationContext.Provider value={{ chatList, conversation, addToConversation }}>
      {children}
    </ConversationContext.Provider>
  );
};


// Custom hook to use the conversation context
 export const useConversation = () => useContext(ConversationContext);