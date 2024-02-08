import React from 'react'
import ChatList from './ChatList';

export default function ChatListWrapper() {
  return (
    <div className="chat-list__wrapper">
        <div className="chat-list__header">
          <h3 className="chat-list__heading">Chat List</h3>
          <span className="new-chat__button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              className="injected-svg"
              data-src="/icons/add-01-stroke-rounded.svg"
              role="myimg"
              color="currentColor"
            >
              <path
                d="M12 4V20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M4 12H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </div>
        <ChatList />
        <div className="chat-list__footer">
          <button className="btn btn-danger chat-delete-button">
            Delete All
          </button>
        </div>
      </div>
  )
}
