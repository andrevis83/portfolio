import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const Paragraph = ({className, delay = 0, scrollAnimation = false, text}) => {

    const variantsParagraph = {
        initial: { opacity: 0, rotateX: -15, y: 32},
        animate: { 
            opacity: 1, 
            originY: 1,
            rotateX: 0,
            y: 0,
            transition: { 
                duration: 0.75, 
                delay: delay,
                ease: "easeOut"
            }
        }
    }

    const animation = useAnimation();
    const [ ref, inView ] = useInView({
        threshold: 1,
        triggerOnce: true
    });


    useEffect(() => { 
        if (inView) {
            animation.start('animate');
        } else {
            animation.start('initial');
        }
    }, [inView])
    

    return (
        <div className="[perspective:1000px]">
             <motion.div 
                className={`w-full ${className}`}
                variants={variantsParagraph} 
                initial="initial"
                animate={animation}
                ref={ref}
            >
                <span>{ text }</span>
            </motion.div>
        </div>
    )
}

Paragraph.propTypes = {
    className: PropTypes.string,
    delay: PropTypes.number,
    scrollAnimation: PropTypes.bool,
    text: PropTypes.string
}

export default Paragraph