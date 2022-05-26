import React from 'react'
import PropTypes from 'prop-types'
import { HiArrowDown } from 'react-icons/hi'
import { motion } from "framer-motion";

import WordAnimated from './WordAnimated'

const ScrollDown = ({delay = 3.5, text}) => {

  const variantsScrollIconContainer = {
    initial: { y: 8, opacity: 0 },
    animate: { 
      y: 0,
      opacity: 1, 
      transition: {
        duration: 0.6,
        delay: delay + 0.75,
        when: "beforeChildren",
      }, 
    },
  }
  
  const variantsScrollIcon = {
    animate: { 
      y: [4, -4, 4], 
      transition: {
        duration: 2,
        repeat: Infinity, 
      } 
    },
  }
  
  const variantsText = {
    initial: { y: '120%' },
    animate: i => ({ 
        y: 0, 
        transition:{ 
          delay: delay + (i * 0.05),
          duration: 0.75,
        }
    })
  }

  return (
    <div className="scrolldown text-indigo-50 text-base md:text-lg flex items-center justify-end px-0 py-3 mt-16 md:mt-auto">
      <motion.div 
        variants={variantsScrollIconContainer}
        initial="initial" 
        animate="animate" 
      >
        <motion.div 
          variants={variantsScrollIcon}
          className="mr-3"
          animate="animate" 
        >
          <HiArrowDown />
        </motion.div>
      </motion.div>   
      <WordAnimated text={text} variants={variantsText} hover={{ color: '#6366f1', transition: '0.3s'}} />
    </div>
  )
}

ScrollDown.propTypes = {
    text: PropTypes.string
}

export default ScrollDown