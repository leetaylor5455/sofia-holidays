import React, { useState, useEffect } from 'react'
import Nav from './Nav';
import Button from './Button';
import { motion } from 'framer-motion';
import { initial, animate, exit, transition  } from './motionSettings';

import Calendar from 'react-calendar';

function DatePage(props) {
  
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
        <Nav title={'/Titles/DateTitle.svg'} back='/'/>

        <div className='calendar-border'>
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
        </div>

        <Button text='Next' link='/hotel' visible={ valid ? true : false }/>
    </motion.div>

  )
}

export default DatePage