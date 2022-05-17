import React from 'react'
import PropTypes from 'prop-types'
import { HiArrowDown } from 'react-icons/hi'
import { motion } from "framer-motion";

import WordAnimated from './WordAnimated'

const variantsScrollIconContainer = {
  initial: { y: 8, opacity: 0 },
  animate: { 
    y: 0,
    opacity: 1, 
    transition: {
      duration: 0.6,
      delay: 4.25,
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
          default: {duration: 0.75, delay: 3.5 + (i * 0.05)},
      }
  })
}


const ScollDown = ({text}) => {
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

ScollDown.propTypes = {
    text: PropTypes.string
}

export default ScollDown