import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { initial, animate, exit, transition } from './motionSettings';

import Nav from './Nav';
// import ActivitiesTitle from '../Images/ActivitiesTitle.svg';
import ActivityCard from './ActivityCard';
import Button from './Button';

function Activities(props) {

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

  ]

  return (
    <motion.div className='container'
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
        <Nav title={'/Titles/ActivitiesTitle.svg'} back='/hotel'/>

        <div className='activities'>

            {activitiesData.map((activity) => (
                <ActivityCard 
                    key={activity.id}
                    data={activity}
                    name={activity.name}
                    image={activity.image}
                    activities={props.activities}
                    selectActivity={props.selectActivity}
                />
            ))}
        </div>

        <Button text='Next' link='/summary' visible={ready}/> 
    </motion.div>
  )
}

export default Activities