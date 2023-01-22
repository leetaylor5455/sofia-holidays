import React from 'react';
import Title from '../Images/Title.svg';
import Eiffel from '../Images/Eiffel.svg';
import Button from './Button';
import { motion } from 'framer-motion';
import { initial, animate, exit, transition } from './motionSettings';

function Home() {
    return (
        <motion.div className="container"
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
        >
            <div className="eiffel-bg">
                <img src={Eiffel} alt='Eiffel Tower'/>
            </div>
            <div className="intro-title">
                <img src={Title} alt='Welcome to your Paris birthday'/>
            </div>
            <Button text='Get Started' link="/date" visible={true}/>
        </motion.div>
    )
}

export default Home;