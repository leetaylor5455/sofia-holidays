import React, { useState, useEffect } from 'react'
import Nav from './Nav';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { initial, animate, exit, transition  } from './motionSettings';

import Calendar from 'react-calendar';

function DatePage(props) {
  
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 1500);
  }, []);

  const [valid, setValid] = useState(false);

  const [value, setValue] = useState(props.date);


  useEffect(() => {

    const unavailableDates = [
      [24, 1],
      [25, 1],
      [26, 1],
      [10, 2],
      [11, 2],
      [12, 2],
      [28, 3],
      [29, 3],
      [30, 3],
    ];

    if (value) {
      const day = value.getDate();
      const month = value.getMonth();

      if (+new Date() > +value || unavailableDates.find(date => date[0] === day && date[1] === month)) {
        setValid(false);
        let activeDate = document.getElementsByClassName(['react-calendar__tile--rangeBothEnds'])
        activeDate[0].style.border = "1px solid #FF6666";
        activeDate[0].style.boxShadow = "0px 5px 15px rgba(255, 102, 102, 0.0)" 
        activeDate[0].style.background = "#FFF4F4";
      } else {
        setValid(true);
        props.setDate(value);
      }
    }

  }, [value, props]);

  useEffect(() => {

  }, [valid])

  return (
    <motion.div className='container'
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      <div className='perspective'>
        <Nav title={'/Titles/DateTitle.svg'} back='/'/>

        <AnimatePresence>
          <motion.div className='calendar-border'
            // initial={{ opacity: 0, transform: 'translateY(100%) translateZ(-150px) rotateX(-20deg)' }}
            initial={{ opacity: 0, transform: 'translate3d(0, 100%, -100px) rotateX(-15deg)' }}
            animate={{ opacity: 1, transform: 'translate3d(0, 0%, 0px) rotateX(0deg)' }}
            // animate={{ opacity: 1, transform: 'translateY(0%) translateZ(0px) rotateX(0deg)' }}
            transition={{ delay: 0.25 }}
          >
              <div className='calendar'>
                  <Calendar 
                      onChange={setValue} 
                      value={value} 
                      next2Label={null}
                      prev2Label={null}
                      formatShortWeekday={(locale, date) => ("0" + date).slice(1,3)}
                      nextLabel={<img src={'/Titles/CalendarNextChevron.svg'} alt='Next button'/>}
                      prevLabel={<img src={'/Titles/CalendarPrevChevron.svg'} alt='Prev button'/>}
                      />
              </div>
          </motion.div>
        </AnimatePresence>
        
      </div>

        <Button text='Next' link='/hotel' visible={ valid && animated }/>
    </motion.div>

  )
}

export default DatePage