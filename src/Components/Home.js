import React from 'react';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';

function Home() {

    return (
        
        <motion.div className="container"
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
            <AnimatePresence>
                <div className='perspective'>
                    <motion.div className="intro-title"
                        initial={{ opacity: 0, transform: 'translateY(130%) translateZ(-60px) rotateX(-32deg)' }}
                        animate={{ opacity: 1, transform: 'translateY(0%) translateZ(0px) rotateX(0deg)' }}

                        transition={{ delay: 0.6, ease: [0.435, 0.25, 0.15, 0.965], duration: 1.2 }}
                    >
                        <img src={'/Titles/Title.svg'} alt='Welcome to your Paris birthday'/>
                    </motion.div>
                </div>

                <motion.div className="eiffel-bg"
                    initial={{ opacity: 0, transform: 'translateY(80%)' }}
                    animate={{ opacity: 1, transform: 'translateY(0%)' }}
                    transition={{ delay: 0.4, ease: [0.435, 0.25, 0.15, 0.965], duration: 1.6 }}
                >
                    <img src={'/Titles/Eiffel2.svg'} alt='Eiffel Tower'/>
                </motion.div>

                <motion.div style={{ position: 'fixed ', bottom: '0', left: '50%' }}
                    initial={{ opacity: 0, transform: 'translateY(20vh)' }}
                    animate={{ opacity: 1, transform: 'translateY(0vh)' }}
                    transition={{ delay: 2.2, type: 'spring', stiffness: 250, damping: 40 }}
                >
                    <Button text='Get Started' link="/date" visible={true}/>
                </motion.div>
            </AnimatePresence>
        </motion.div>
        )
    }

export default Home;