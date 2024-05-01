import React from 'react';
import './home.css'

function App({panelContent}) {  // Home page with panel
  return (
    <div className="Home">
      <img className="theater-image" src={require('./Theater.jpg')} alt="theater"/>
      {panelContent}
    </div>
  );
}

export default App;