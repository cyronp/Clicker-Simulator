import React, { useState, useEffect } from 'react';
import Cookie from '../src/assets/cookie.png';
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0);
  const [upgradeValue1, setUpgradeValue1] = useState(50);
  const [upgradeValue2, setUpgradeValue2] = useState(100);
  const [cookieValue, setCookieValue] = useState(1);
  const [clicksPerSecond, setTotalUpgrades] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setClicks(prevClicks => prevClicks + clicksPerSecond);
    }, 1000);

    return () => clearInterval(interval);
  }, [clicksPerSecond]);
  
  const countClick = () => {
    setClicks(clicks + cookieValue);
  };

  const buyClickSecond = () => {
    if (clicks >= upgradeValue1) {
      setClicks(clicks - upgradeValue1);
      var increase = Math.round(upgradeValue1 * 0.10);
      setUpgradeValue1(upgradeValue1 + increase);
      setTotalUpgrades(clicksPerSecond + 1)
    }
  };

  const buyUpgradeCookie = () => {
    if (clicks >= upgradeValue2) {
      setClicks(clicks - upgradeValue2);
      var increase = Math.round(upgradeValue1 * 0.10);
      setUpgradeValue2(upgradeValue2 + increase);
      setCookieValue(cookieValue + 1);
    }
  };
  
  return (
    <>
      <div id='main'>
        <p className='mainText'>COOKIES: </p>
        <a id="clicks" className='mainText'>{clicks}</a>
      </div>
      <div id='button'>
        <button onClick={countClick} id='cookieButton'>
          <img src={Cookie} id='cookieButton' draggable='false' alt="cookie" />
        </button>
      </div>
      <div id='upgradesTab'>
        <div id='upgrade'>
          <button id='upgradeButton' onClick={buyClickSecond}>
            <p>1 CLICK PER SECOND</p>
            <p>COST: {upgradeValue1} CLICKS</p>
          </button>
          <button id='upgradeButton' onClick={buyUpgradeCookie}>
            <p>INCREASE COOKIE VALUE</p>
            <p>COST: {upgradeValue2} CLICKS</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
