import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const WordAnimated = ({className = null, hover = null, text, variants}) => {
 
    const words = text.split(' ')
 
    return (
        <>
            { (text && variants) && words.map( (word, index) => {
                return (
                    <div key={index} className={`${ className ? className : '' } mr-2 overflow-hidden inline-block`}>
                        <motion.span 
                            className="inline-block"
                            custom={index}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            whileHover={hover ? hover : null}
                        >
                            { word }
                        </motion.span>
                    </div>
                )
            })}
        </>
    )
}

WordAnimated.propTypes = {
    text: PropTypes.string,
}

export default WordAnimated