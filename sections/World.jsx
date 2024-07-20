'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TypingText, TitleText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Track friends around you and invite them to play together in the same world
          </>
        )}
        textStyles="text-center"
      />
      <motion.div 
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <img 
          src="/map.png" 
          alt="map" 
          className='w-full h-full object-cover'
        />
        <div
          className='absolute bottom-[20%] right-[15%] sm:bottom-[20%] sm:right-[20%] w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] p-[6px] rounded-full bg-[#5d6680]'
        >
          <img src="/people-01.png" alt="people" 
            className='w-full h-full object-contain'
          />
        </div>
        <div
          className='absolute top-[15%] left-[20%] sm:top-[10%] sm:left-[20%] w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] p-[6px] rounded-full bg-[#5d6680]'
        >
          <img src="/people-02.png" alt="people" 
            className='w-full h-full object-contain'
          />
        </div>
        <div
          className='absolute top-1/2 left-[45%] transform -translate-y-1/2 w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] p-[6px] rounded-full bg-[#5d6680]'
        >
          <img src="/people-03.png" alt="people" 
            className='w-full h-full object-contain'
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
