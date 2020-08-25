import React from 'react';
import logo from './img/pwa.png';
import BoutonInstallPWA from './components/BoutonInstallPWA';
import DemoJSONLocal from './components/DemoJSONLocal';
import DemoIndexedBD from './components/DemoIndexedBD';
import './App.css';

function App() {
  return (
    <div className="App">
      <BoutonInstallPWA/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="400 px" height="100 px"/>
        <p>
          Hello PWA World!
        </p>
      </header>
      <DemoJSONLocal/>
      <DemoIndexedBD/>
    </div>
  );
}

export default App;
