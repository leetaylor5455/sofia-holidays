import React from 'react';
import { motion } from 'framer-motion';
import { initial, animate, exit, transition } from './motionSettings';

import Louvre from '../Images/Louvre.svg';
import PYB from '../Images/PackYourBags.svg';

function Receipt() {
  return (
    <motion.div className='container'
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >

        <div className="louvre-bg">
            <img src={Louvre} alt='Louvre'/>
        </div>

        <div
        style={{
            marginTop: 140
        }}>
            <img src={PYB} alt='Pack your bags!'/>
        </div>
    </motion.div>
  )
}

export default Receipt