import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const Paragraph = ({className, delay = 0, onComplete, scrollAnimation = false, text}) => {

    const variantsParagraph = {
        initial: { opacity: 0, y: 32},
        animate: { 
          opacity: 1, 
          originX: 1,
          y: 0,
          transition: { 
              opacity: {duration: 0.75, delay: delay, ease: "easeOut"},
              y: {duration: 0.75, delay: delay, ease: "easeOut"}
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
    
    const paragraphOnScroll = () => {
        return(
            <motion.div 
                className={`w-full mx-auto ${className}`}
                variants={variantsParagraph} 
                animate={animation}
                ref={ref}
            >
                <span>{ text }</span>
            </motion.div>
        )
    }

    const paragraphStatic = () => {
        return(
            <motion.div 
                className={` w-full mx-auto ${className}`}
                variants={variantsParagraph} 
                initial="initial" 
                animate="animate"
                onAnimationComplete={onComplete ? onComplete : null}
            >
                <span>{ text }</span>
            </motion.div>
        )
    }

    return (
        <>
            { scrollAnimation ? paragraphOnScroll() : paragraphStatic() }
        </>
    )
}

Paragraph.propTypes = {
    className: PropTypes.string,
    delay: PropTypes.number,
    onComplete: PropTypes.func,
    scrollAnimation: PropTypes.bool,
    text: PropTypes.string
}

export default Paragraph