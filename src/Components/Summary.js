import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { exit, transition } from './motionSettings';

import Nav from './Nav';

import HotelCard from './HotelCard';
import ActivityCard from './ActivityCard';
import SubmitButton from './SubmitButton';

function Summary(props) {

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 2000);
  }, []);

  const [formattedDate, formatDate] = useState('');

  useEffect(() => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const dateNum = props.date.getDate();
    const strDateNum = String(dateNum);

    const lastDigit = strDateNum[strDateNum.length-1];
    let ending;

    if (dateNum < 10 || dateNum > 20) {
      switch (lastDigit) {
        case '1':
          ending = 'st';
          break;
        case '2':
          ending = 'nd';
          break;
        case '3':
          ending = 'rd';
          break;
        default:
          ending = 'th';
      }
    } else {
      ending = 'th';
    }
    const dateMonth = monthNames[props.date.getMonth()];

    formatDate(dateNum + ending + ' ' + dateMonth);

  }, [props]);

  const headings = {
    initial: {
      opacity: 0,
      transform: 'translate3d(0, 120%, -30px) rotateX(-40deg)'
    },
    animate: {
      opacity: 1,
      transform: 'translate3d(0, 0%, 0px) rotateX(0deg)'
    },
    duration: 0.8, 
    ease: [0.25, 1, 0.5, 1]
  }

  const cards = {
    hidden: {},
    show: { transition: { delayChildren: 1.2, staggerChildren: 0.15 } }
  }

  const card = {
    hidden: { opacity: 0, transform: 'translate3d(0, 60%, -80px) rotateX(-2deg)' },
    show: {
        opacity: 1,
        transform: 'translate3d(0, 0%, 0px) rotateX(0deg)'
    }
  }

  return (
    <motion.div className='container'
      exit={exit}
      transition={transition}
    >
      <div className='perspective'>

        <Nav title={'/Titles/SummaryTitle.svg'} back='/activities'/>

        <AnimatePresence>
          <div className='summary perspective'>
            <motion.div 
              initial={headings.initial}
              animate={headings.animate}
              transition={{
                duration: headings.duration,
                ease: headings.ease,
                delay: 0.3
              }}
            className='summary-heading'>We'll be going on the</motion.div>


            <motion.div 
              initial={headings.initial}
              animate={headings.animate}
              transition={{
                duration: headings.duration,
                ease: headings.ease,
                delay: 0.45
              }}
            className='date'>{formattedDate}</motion.div>

            <motion.div className='summary-heading'
              initial={headings.initial}
              animate={headings.animate}
              transition={{
                duration: headings.duration,
                ease: headings.ease,
                delay: 0.6
              }}
            >We'll be staying in</motion.div>

            <motion.div className='hotel-transform'
              initial={{ opacity: 0, transform: 'translate3d(0, 30%, -60px) rotateX(-10deg)' }}
              animate={{ opacity: 1, transform: 'translate3d(0, 0%, 0px) rotateX(0deg)' }}
              transition={{ delay: 0.75 }}
            >
              <HotelCard
                name={props.hotel.name}
                sources={props.hotel.sources}
                keyPoints={props.hotel.keyPoints}
                onClick={null}
                selected={true}
              />
            </motion.div>


            <motion.div 
              initial={{
                opacity: 0,
                transform: 'translate3d(0, 120%, -30px) rotateX(-8deg)'
              }}
              animate={headings.animate}
              transition={{
                duration: headings.duration,
                ease: headings.ease,
                delay: 1.1
              }}
            className='summary-heading'>We'll be doing</motion.div>

            <motion.div className='activities perspective'
              variants={cards}
              initial='hidden'
              animate='show'
            >
              {props.activities.map(activity => (
                <motion.div variants={card} className='activities-transform'>
                  <ActivityCard 
                    key={'summary' + activity.id}
                    data={activity}
                    name={activity.name}
                    image={activity.image}
                    activities={props.activities}
                    selectActivity={null}             
                  />
                </motion.div>
              ))}
              </motion.div>
          </div>
        </AnimatePresence>
        
      </div>

        <SubmitButton visible={animated} date={formattedDate} hotel={props.hotel.name} website={props.hotel.website}/>
        {/* <Button text='Okay!' link='/receipt' visible={true}/> */}
    </motion.div>
  )
}

export default Summary