'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, NewFeatures, TypingText } from '../components';
import { insights } from '../constants';

const Insights = () => (
<section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| insight"
      textStyles="text-center" />
      <TitleText title="insight about metaverse" 
      textStyle="text-center"/>
      <div className='mt-[50px] flex flex-col gap-[30px]'>
      {insights.map((insights, index) => (
        <InsightCard key={`insight-${index}`} {...insights} 
        index={index+1} />
      ))}
      </div>
      </motion.div>
  </section>
);

export default Insights;
