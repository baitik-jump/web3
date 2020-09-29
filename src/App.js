
import React, { useState } from 'react';
import { Main } from './Main';
import { Side } from './Side';
import { Navigation } from './Navigation';
import './FirstPage.css';
import './App.css';



function App() {
  const [activePage, setActivePage] = useState(1);
  const isSecondVisible = [2,3,4].includes(activePage);
  return (
    <div>
      { activePage === 1 && <Main onClick={setActivePage} /> }
      { isSecondVisible && <Side activePage={activePage} onClick={setActivePage} /> }
    </div>
  );
}

export default App;
