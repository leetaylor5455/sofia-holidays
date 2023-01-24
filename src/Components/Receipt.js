import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { initial, animate, exit, transition } from './motionSettings';

function Receipt() {
  return (
    <motion.div className='container'
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      <AnimatePresence>
        <motion.div className="louvre-bg"
        initial={{ transform: 'translateY(100%)' }}
        animate={{ transform: 'translateY(0%)' }}
        transition={{ delay: 1, type: 'spring', stiffness: 270, damping: 40 }}
        >
            <img src={'/Titles/Louvre.svg'} alt='Louvre'/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, transform: 'translateY(110%)' }}
          animate={{ opacity: 1, transform: 'translateY(0%)' }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 270, damping: 20 }}
          style={{
            marginTop: 140
        }}>
            <img src={'/Titles/PackYourBags.svg'} alt='Pack your bags!'/>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

export default Receipt