import React, {useState} from 'react';
import './App.css';
import Home from './components/home.jsx'
import Header from './components/header.jsx'
import RegisterForm from './components/registerform.jsx';

function App() {

  const [activeTab, setActiveTab] = useState('home'); // active tab

  const handleTabClick = (tab) => { // tab click
    setActiveTab(tab);
  };


  const renderContent = () => {
    switch (activeTab) {
      case 'about': // About page
        return (
          <div className="panel">
            <div className="description-title">About</div>
            <div className="second-title">HTML</div>
            <p>HTML is used for this website to provide the main attributes in the website design.</p>
            <div className="second-title">React</div>
            <p>React is used for this website to be more interactive for the user.</p>
            <div className="second-title">CSS</div>
            <p>CSS is used for this website to give the user a more comfortable setting while navigating.</p>
            <div className="second-title">JavaScript</div>
            <p>JavaScript is used for this website in order to provide the main functionalities while navigating the site.</p>
            <div className="second-title">MongoDB</div>
            <p>MongoDB is used for this website to provide a database for the information that this website takes.</p>
          </div>
        );
      case 'contact': // Contact page
        return (
          <div className="panel">
            <div className="description-title">Contact</div>
            <p>The developer of this website can be contacted at digiac79@rowan.edu. They are studying computing informatics and computer science.</p>
            <p>The developer created this website with the purpose of users easily being able to rate films.</p>
            <p>If you have any questions, feel free to reach out by email and you will be responded to as soon as possible.</p>
          </div>
        );
      case 'login': // Login page
        return (
          <div className="panel">
            <div className="description-title">Log In</div>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username </label>
                <input type="text" id="username" name="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password </label>
                <input type="password" id="password" name="password" />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        );
        case 'register': // Register page
        return (
          <div className="panel">
            <div className="description-title">Register</div>
            <RegisterForm/>
          </div>
        );
      default: // Home page
        return (
          <div className="panel">
            <div className="description-title">Film Rating Project</div>
            <p>Welcome to the film rating platform.</p>
            <p></p>
          </div>
        );
    }
  };
  
  return (
    <div className="app">
      <Header activeTab={activeTab} onTabClick={handleTabClick}/>
      <Home panelContent={renderContent()}/>
    </div>
  );

}

export default App;