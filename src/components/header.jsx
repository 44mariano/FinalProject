import React from 'react';
import './header.css'

function App({activeTab, onTabClick}) { // Header tabs
    return (
      <div className="App">
        <nav className="header">
        <a className={`tab ${activeTab === 'home' ? 'active' : ''}`} href="#home" onClick={() => onTabClick('home')}>Home</a>
        <a className={`tab ${activeTab === 'about' ? 'active' : ''}`} href="#about" onClick={() => onTabClick('about')}>About</a>
        <a className={`tab ${activeTab === 'contact' ? 'active' : ''}`} href="#contact" onClick={() => onTabClick('contact')}>Contact</a>
        <a className={`tab ${activeTab === 'login' ? 'active' : ''}`} href="#login" onClick={() => onTabClick('login')}>Log In</a>
        <a className={`tab ${activeTab === 'register' ? 'active' : ''}`} href="#register" onClick={() => onTabClick('register')}>Register</a>
        </nav>
      </div>
    );
  }

export default App;