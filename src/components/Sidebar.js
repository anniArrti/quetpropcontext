import React from 'react'
import logo from '../images/quote-pros-logo.webp'
export default function Sidebar() {
  return (
    <aside className="chat-sidebar chat-side__left">
      <div className="chat-sidebar__inner">
        <div className="chat-sidebar__header">
          <figure className="logo-wrapper">
            <a href="/">
              <img src={logo} alt="Quote Pros" />
            </a>
          </figure>
        </div>
        <div className="chat-sidebar__body mobile-nav">
          <ul className="site-nav__list unstyled-list">
            <li className="site-nav__list-item">
              <a href="/" aria-label="Home" className="site-nav__list-item-link">Home</a>
            </li>
            <li className="site-nav__list-item">
              <a href="/" aria-label="How it Works" className="site-nav__list-item-link">How it Works</a>
            </li>
            <li className="site-nav__list-item">
              <a href="/plan" aria-label="Pricing" className="site-nav__list-item-link">Pricing</a>
            </li>
            <li className="site-nav__list-item site-nav__list-item-button-wrapper">
              <a href="/" aria-label="Sign Up" className="site-nav__list-item-link">Sign Up</a>
            </li>
            <li className="site-nav__list-item site-nav__has-dropdown site-nav-dropdown__chat-list">
              <a href="/" aria-label="Chat List" className="site-nav__list-item-link">Chat List</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                className="site-nav__dropdown-icon"
                data-src="/icons/arrow-down-01-stroke-rounded.svg"
                role="myimg"
                color="currentColor"
              >
                <path
                  d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>

              <div className="site-nav__mobile-dropdown">
                <ul className="chat-list chat-list__body unstyled-list scrollbar-hide">
                
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="chat-sidebar__footer">
          <div className="chat-sidebar__footer-links">
            <ul className="chat-sidebar__footer-links-list unstyled-list">
              <li className="chat-sidebar__footer-links-list-item">
                <a
                  href="/"
                  aria-label="Clear Conversation"
                  className="chat-sidebar__footer-link clear-conversation-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="injected-svg"
                    data-src="/icons/delete-02-stroke-rounded.svg"
                    role="myimg"
                    color="currentColor"
                  >
                    <path
                      d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M9.5 16.5L9.5 10.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M14.5 16.5L14.5 10.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  Clear Conversation</a>
              </li>

              <li className="chat-sidebar__footer-links-list-item">
                <a
                  href="/"
                  aria-label="Clear Conversation"
                  className="chat-sidebar__footer-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="injected-svg"
                    data-src="/icons/help-circle-stroke-rounded.svg"
                    role="myimg"
                    color="currentColor"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    ></circle>
                    <path
                      d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M11.992 17H12.001"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  Updates & FAQ's</a>
              </li>
              <li className="chat-sidebar__footer-links-list-item">
                <a
                  href="/"
                  aria-label="Clear Conversation"
                  className="chat-sidebar__footer-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="injected-svg"
                    data-src="/icons/logout-03-stroke-rounded.svg"
                    role="myimg"
                    color="currentColor"
                  >
                    <path
                      d="M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.987 10.2401 20.8194 9.05112 20.484C6.18961 19.6768 3.70555 18.3203 3.10956 15.2815C3 14.723 3 14.0944 3 12.8373L3 11.1627C3 9.90561 3 9.27705 3.10956 8.71846C3.70555 5.67965 6.18961 4.32316 9.05112 3.51603C10.2401 3.18064 10.8346 3.01295 11.3156 3.00119C13.3831 2.95061 14.9264 4.52307 15 6.37501"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M21 12H10M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  )
}
