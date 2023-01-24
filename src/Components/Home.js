import React from 'react';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { initial, animate, exit, transition } from './motionSettings';

function Home() {
    return (
        <motion.div className="container"
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
        >
            <AnimatePresence>
                <motion.div className="eiffel-bg"
                    initial={initial}
                    animate={animate}
                    transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
                >
                    <img src={'/Titles/Eiffel2.svg'} alt='Eiffel Tower'/>
                </motion.div>
                <motion.div className="intro-title"
                    initial={{ opacity: 0, transform: 'translateY(22vh)' }}
                    animate={{ opacity: 1, transform: 'translateY(0vh)' }}
                    transition={{ delay: 0.6, type: 'spring', stiffness: 250, damping: 50 }}
                >
                    <img src={'/Titles/Title.svg'} alt='Welcome to your Paris birthday'/>
                </motion.div>

                <motion.div style={{ position: 'fixed ', bottom: '0', left: '50%' }}
                    initial={{ opacity: 0, transform: 'translateY(20vh)' }}
                    animate={{ opacity: 1, transform: 'translateY(0vh)' }}
                    transition={{ delay: 2, type: 'spring', stiffness: 250, damping: 40 }}
                >
                    <Button text='Get Started' link="/date" visible={true}/>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}

export default Home;