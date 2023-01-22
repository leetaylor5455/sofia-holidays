import React, { useState, useEffect } from 'react'
import Nav from './Nav';
import DateTitle from '../Images/DateTitle.svg';
import Button from './Button';
import CalendarNextChevron from '../Images/CalendarNextChevron.svg';
import CalendarPrevChevron from '../Images/CalendarPrevChevron.svg';
import { motion } from 'framer-motion';
import { initial, animate, exit, transition  } from './motionSettings';

import Calendar from 'react-calendar';

function DatePage(props) {
  const [value, onChange] = useState(props.date);

  useEffect(() => {
    props.setDate(value);
  }, [value, props]);

  return (
    <motion.div className='container'
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
        <Nav title={DateTitle} back='/'/>

        <div className='calendar-border'>
            <div className='calendar'>
                <Calendar 
                    onChange={onChange} 
                    value={value} 
                    next2Label={null}
                    prev2Label={null}
                    formatShortWeekday={(locale, date) => ("0" + date).slice(1,3)}
                    nextLabel={<img src={CalendarNextChevron} alt='Next button'/>}
                    prevLabel={<img src={CalendarPrevChevron} alt='Prev button'/>}
                    />
            </div>
        </div>

        <Button text='Next' link='/hotel' visible={true}/>
    </motion.div>

  )
}

export default DatePage