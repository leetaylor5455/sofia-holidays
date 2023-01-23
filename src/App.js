import React, { useEffect } from 'react'
import './App.css';
import AnimatedRoutes from './Components/AnimatedRoutes';
import { MemoryRouter as Router } from 'react-router-dom';

import ScrollToTop from './Components/ScrollToTop';

function App() {
  
  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
        return new Promise(function (resolve, reject) {
            const img = new Image();

            img.src = src;
            img.onload = resolve();
            img.onerror = reject();
        });
    });

    await Promise.all(promises);
  }

  useEffect(() => {
    const imgs = [
        '/LeRobinet/6.jpg',
        '/OKKO/1.jpg',
        '/Henriette/1.jpg',
        '/Activities/louvre.jpg',
        '/Activities/eiffel.jpg',
        '/Activities/seine2.jpg',
        '/Activities/sainte.jpg',
        '/Activities/arc.jpg',
        '/Activities/catacombs.jpg',
        './Components/Images/DateTitle.svg',
        './Components/Images/HotelTitle.svg',
        './Components/Images/ActivitiesTitle.svg',
        './Components/Images/SummaryTitle.svg',
        './Components/Images/PackYourBags.svg',
        './Components/Images/Louvre.svg'
    ];

    cacheImages(imgs);
  }, []);

  return (
    <div className='App'>
      <Router basename={window.location.pathname}>
        <ScrollToTop />
        <AnimatedRoutes/>
      </Router>
    </div>
  )
}

export default App;
