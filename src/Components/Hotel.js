import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { exit, transition } from './motionSettings';

import Nav from './Nav';
import Button from './Button';

import HotelCard from './HotelCard';

function Hotel(props) {

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 2000);
  }, []);

  const [ready, setReady] = useState(false);

  const hotelData = [
    { 
        index: 1,
        name: "Le Robinet d'Or",
        sources: [
            '/LeRobinet/6.jpg',
            '/LeRobinet/2.jpg',
            '/LeRobinet/1.jpg',
            '/LeRobinet/3.jpg',
            '/LeRobinet/4.jpg',
            '/LeRobinet/5.jpg',
        ],
        keyPoints: ['lounge/terrace bar',
        '25 min walk to Sacre-Coeur',
        '5 min walk to underground'],
        website: 'https://www.lerobinetdor.com/en/'
    },
    { 
        index: 2,
        name: "OKKO Paris Gare de l'Est",
        sources: [
            '/OKKO/1.jpg',
            '/OKKO/2.jpg',
            '/OKKO/3.jpg',
            '/OKKO/4.jpg',
            '/OKKO/5.jpg',
            '/OKKO/6.jpg',
        ],
        keyPoints: ['gym with sauna',
        'evening appetiser buffet',
        'great breakfast'],
        website: 'https://www.okkohotels.com/en/page/paris-gare-de-lest/.3097.html'
    },
    { 
        index: 3,
        name: "Hotel Henriette",
        sources: [
            '/Henriette/1.jpg',
            '/Henriette/2.jpg',
            '/Henriette/3.jpg',
            '/Henriette/4.jpg',
            '/Henriette/5.jpg',
            '/Henriette/6.jpg',
        ],
        keyPoints: ['interior courtyard',
        '200 yards from underground',
        'great area'],
        website: 'https://www.hotelhenriette.com/en/'
    }
  ];

  useEffect(() => {
    if (props.hotel.name) {
        setReady(true);
    } else {
        setReady(false);
    }
  }, [props.hotel]);

  const cards = {
    hidden: {},
    show: { transition: { delayChildren: 0.28, staggerChildren: 0.2 } }
  }

  const card = {
    hidden: { opacity: 0, transform: 'translate3d(0, 35%, -80px) rotateX(-15deg)' },
    show: {
        opacity: 1,
        transform: 'translate3d(0, 0%, 0px) rotateX(0deg)',
        // transition: { ease: [0.33, 1, 0.68, 1], duration: 1 }
    }
  }

  return (
    <motion.div className='container'
        exit={exit}
        transition={transition}
    >
        <div className='perspective'>
            <Nav title={'/Titles/HotelTitle.svg'} back='/date'/>

            <AnimatePresence>
                <motion.div className='hotels perspective'
                    variants={cards}
                    initial='hidden'
                    animate='show'
                >
                    
                    {hotelData.map((hotel) => (
                        <motion.div variants={card} className='hotel-transform'>
                            <HotelCard 
                                key={hotel.name}
                                name={hotel.name}
                                sources={hotel.sources}
                                keyPoints={hotel.keyPoints}
                                onClick={() => props.setHotel(hotel)}
                                selected={props.hotel.index === hotel.index ? true : false}
                            />
                        </motion.div>
                    ))}
                    

                </motion.div>
            </AnimatePresence>
        </div>
        <Button text='Next' link='/activities' visible={ready && animated}/>
    </motion.div>
  )
}

export default Hotel