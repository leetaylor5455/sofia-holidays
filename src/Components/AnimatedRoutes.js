import React, { useState, lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './Home';
import Summary from './Summary';
import Receipt from './Receipt';

const DatePagePromise = import('./Date');
const DatePage = lazy(() => DatePagePromise);

const HotelPromise = import('./Hotel');
const Hotel = lazy(() => HotelPromise);

const ActivitiesPromise = import('./Activities');
const Activities = lazy(() => ActivitiesPromise);

function AnimatedRoutes() {
  const location = useLocation();
  const [date, setDate] = useState(new Date());
  const [hotel, setHotel] = useState({});
  const [activities, setActivities] = useState([]);

  function selectActivity(item) {
    const index = activities.findIndex(element => element.id === item.id);

    if (index >= 0) {
        setActivities(prev => {
            return [
            ...prev.slice(0, index),
            ...prev.slice(index+1, prev.length)
        ]});
    } else {
        setActivities(prev => [...prev, item]);
    }
  }

  return (
    <AnimatePresence mode='wait' initial={true}
        onExitComplete={() => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 })
        }
        }}
    
    >
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />}/>
            <Route path='/date' element={<Suspense>
                    <DatePage date={date} setDate={setDate}/>
                </Suspense>}/>

            <Route path='/hotel' element={<Suspense>
                    <Hotel hotel={hotel} setHotel={setHotel}/>
                </Suspense>}/>

            <Route path='/activities' element={<Suspense>
                    <Activities activities={activities} selectActivity={selectActivity}/>
                </Suspense>}/>

            <Route path='/summary' 
            element={<Summary
                date={date}
                hotel={hotel}
                activities={activities}
                />}
            />
            <Route path='/receipt' element={<Receipt/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes