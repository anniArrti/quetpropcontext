import React from 'react';
import UserLogo from '../images/user-image.webp';
import Logo from '../images/quote-pros-logo.webp';
const Header = () => {
  // const a = useContext(noteContext)
  return (
  <header className="site-header">
    <div className="mobile-menu__trigger-wrapper">
      <span className="mobile-menu__trigger">
        <svg
          alt="user"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="injected-svg"
          data-src="/icons/menu-01-stroke-rounded.svg"
          role="myimg"
          color="currentColor"
        >
          <path
            d="M4 5L20 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M4 12L20 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M4 19L20 19"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </span>
      <figure className="logo-wrapper">
        <a href="/">
          <img
            src={Logo}
            alt="Quote Pros Logo"
          />
        </a>
      </figure>
    </div>
    <nav className="site-nav desktop-nav">
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
          <a href="/register" aria-label="Sign Up" className="btn site-nav__list-item-link site-nav__list-item-button">Sign Up</a>
        </li>
      </ul>
    </nav>
    <div className="header__user-info">
      <a 
        href="/register" 
        aria-label="Sign Up" 
        className="btn btn-secondary site-nav__list-item-link site-nav__list-item-button site-nav__list-item-button-mobile">
          Sign Up
      </a>
     
      <div className="header__user__image-wrapper" style={{display:"none"}}>
        <img
          src={UserLogo}
          alt="User-logo"
          className="header__user__image"/>
      </div>
      <div className="header-user__dropdown" style={{display:"none"}}>
        <ul className="header-user__dropdown-list unstyled-list">
          <li className="header-user__dropdown-list-item">
            <a href="/" aria-label="Account" className="header-user__dropdown-list-item-link">Account</a>
          </li>
          <li className="header-user__dropdown-list-item">
            <a href="/" aria-label="Settings" className="header-user__dropdown-list-item-link">Settings</a>
          </li>
          <li className="header-user__dropdown-list-item">
            <a href="/" aria-label="Logout" className="header-user__dropdown-list-item-link">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  )
}
export default Header;