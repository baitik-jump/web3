import React from 'react';
import { Navigation2 } from './Navigation2';
import { Categories } from './Categories';
import { AboutUs } from './AboutUs';
import Scrollchor from 'react-scrollchor';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleSetAbotUsVisible = () => {
    setIsVisible(!isVisible)

  const [isVisible, setIsVisible] = useState(false);

  const handleSetMainVisible = () => {
      setIsVisible(!isVisible)

  const [isVisible, setIsVisible] = useState(false);

  const handleSetMiniVisible = () => {
        setIsVisible(!isVisible)

  const [isVisible, setIsVisible] = useState(false);

  const handleSetCatVisible = () => {
          setIsVisible(!isVisible)


  }
    const [state, setState] = useState(0);
  const [isActivePage, setIsActivePage] = useState(1);

  const handleChanePage = (page) => {
    setIsActivePage(page);
  }

  return (
    <div>
      <Navigation onChange={handleChanePage} actionmain={handleSetMainVisible} />
      { isVisible && <FirstPage/>}
      <Navigation onChange={handleChanePage} action={handleSetAbotUsVisible} />
      { isVisible && <AboutUs/>}
      <Navigation onChange={handleChanePage} actioncat={handleSetCatVisible} />
      { isVisible && <Categories/>}
      <Navigation onChange={handleChanePage} actioncat={handleSetMiniVisible} />
      { isVisible && <Mini/>}

    </div>
  );
}

export default App;
