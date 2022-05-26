import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import LetterAnimated from './LetterAnimated'
import { motion } from 'framer-motion'
import { variantsNavlinks } from './assets/variants'

const Loader = ({children}) => {

    const variants = {
        enter: { 
            x: ['0%', '100%'], 
            transition: {
                x: { delay: 1.25, duration: 1, type: 'easeOut' }
            } 
        },
        exit: { 
            x: ['-100%', '0%'], 
            transition: {
                x: { delay: 0, duration: 1, type: 'easeOut' }
            } 
        },
    }

    const [isComplete, setIsComplete] = useState(false);

    return (
        <main>   
            <motion.div 
                className="fixed inset-0 bg-black z-1000 flex items-center justify-center"
                variants={variants} 
                animate="enter" 
                exit="exit"                
                onAnimationComplete ={ () => setIsComplete(true) }
            >
                 <LetterAnimated 
                    className="text-indigo-200 text-3xl md:text-5xl font-bold uppercase mt-1" 
                    exit={ true }
                    text={ 'Andrea Visentini' } 
                    variants = {variantsNavlinks(0, 0.5)}
                />
            </motion.div>
            {isComplete && children}
        </main>
    )
}

Loader.propTypes = {
    children: PropTypes.any,
}

export default Loader