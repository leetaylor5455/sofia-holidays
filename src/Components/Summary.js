import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { initial, animate, exit, transition } from './motionSettings';

import Nav from './Nav';

import HotelCard from './HotelCard';
import ActivityCard from './ActivityCard';
import SubmitButton from './SubmitButton';

function Summary(props) {

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


  return (
    <motion.div className='container'
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
        <Nav title={'/Titles/SummaryTitle.svg'} back='/activities'/>

        <div className='summary'>
          <div className='summary-heading'>We'll be going on the</div>
          <div className='date'>{formattedDate}</div>

          <div className='summary-heading'>We'll be staying in</div>
          <HotelCard
            name={props.hotel.name}
            sources={props.hotel.sources}
            keyPoints={props.hotel.keyPoints}
            onClick={null}
            selected={true}
          />

          <div className='summary-heading'>We'll be doing</div>
          {props.activities.map(activity => (
            <ActivityCard 
              key={'summary' + activity.id}
              data={activity}
              name={activity.name}
              image={activity.image}
              activities={props.activities}
              selectActivity={null}             
            />
          ))}
        </div>

        <SubmitButton date={formattedDate} hotel={props.hotel.name} website={props.hotel.website}/>
        {/* <Button text='Okay!' link='/receipt' visible={true}/> */}
    </motion.div>
  )
}

export default Summary