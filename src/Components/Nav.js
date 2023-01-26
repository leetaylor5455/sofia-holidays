import React from 'react'
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Nav(props) {
  return (
    <AnimatePresence>
      <motion.div className='nav'
        initial={{ opacity: 0, transform: 'translateY(120%) translateZ(-60px) rotateX(-40deg)' }}
        animate={{ opacity: 1, transform: 'translateY(0%) translateZ(0px) rotateX(0deg)' }}
        // transition={{ delay: 0.3, type: 'spring', stiffness: 250, damping: 40 }}
        transition={{ delay: 0.1 }}
      
      >
          <div className='nav-title'>
              <img src={props.title} alt='Title'/>
          </div>

          <Link to={props.back}>
              <div className='back'>
                  <img src={'/Titles/Back.svg'} alt='Back button'/>
              </div>
          </Link>
      </motion.div>
    </AnimatePresence>
  )
}

export default Nav