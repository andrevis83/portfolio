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
    <div className="absolute left-0 right-0 bottom-0 text-indigo-50 flex items-center px-6 py-3">
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