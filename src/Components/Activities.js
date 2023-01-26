import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { exit, transition } from './motionSettings';

import Nav from './Nav';
import ActivityCard from './ActivityCard';
import Button from './Button';

function Activities(props) {

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 2000);
  }, []);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (props.activities.length > 0) {
      setReady(true);
    } else {
      setReady(false);
    }
  }, [props.activities]);

  const activitiesData = [
    { id: 'lo', name:'Visit the Louvre', image:'/Activities/louvre.jpg' },
    { id: 'ei', name:'Go up the Eiffel Tower', image:'/Activities/eiffel.jpg' },
    { id: 'se', name:'River Seine Cruise', image:'/Activities/seine2.jpg' },
    { id: 'ch', name:'Sainte Chappelle', image:'/Activities/sainte.jpg' },
    { id: 'ar', name:'Arc de Triomphe', image:'/Activities/arc.jpg' },
    { id: 'ca', name:'Visit the Catacombs', image:'/Activities/catacombs.jpg' },

  ];

  const cards = {
    hidden: {},
    show: { transition: { delayChildren: 0.25, staggerChildren: 0.15 } }
  }

  const card = {
    hidden: { opacity: 0, transform: 'translate3d(0, 60%, -80px) rotateX(-15deg)' },
    show: {
        opacity: 1,
        transform: 'translate3d(0, 0%, 0px) rotateX(0deg)',
        // transition: { ease: [0.435, 0.25, 0.15, 0.965], duration: 1 }
    }
  }

  return (
    <motion.div className='container'
      exit={exit}
      transition={transition}
    >
      <div className='perspective'>
        <Nav title={'/Titles/ActivitiesTitle.svg'} back='/hotel'/>
        <AnimatePresence>
          <motion.div className='activities perspective'
            variants={cards}
            initial='hidden'
            animate='show'
          >
            {activitiesData.map((activity) => (
              <motion.div variants={card} className='activities-transform'>
                <ActivityCard 
                  key={activity.id}
                  data={activity}
                  name={activity.name}
                  image={activity.image}
                  activities={props.activities}
                  selectActivity={props.selectActivity}
                />
              </motion.div>
              
            ))}
          </motion.div>
        </AnimatePresence>
        
      </div>

      <Button text='Next' link='/summary' visible={ready && animated}/> 
    </motion.div>
  )
}

export default Activities