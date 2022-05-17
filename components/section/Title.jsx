import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion'

const Title = ({duration = 0.75, fontSize = 'text-4xl', text}) => {

    const variantsHeroTitle = {
        initial: {
            y: '130%',
        },
        animate: {
            y: 0,
            transition: {
                duration: duration
              }
        }
    }
    
    const animation = useAnimation();
    const [ ref, inView ] = useInView({
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
        <h2 className={`text-indigo-600 overflow-hidden font-anton tracking-wider ${fontSize}`} ref={ref} >
            <motion.span className="block" variants={variantsHeroTitle} animate={animation}  >
                {text}
            </motion.span>
        </h2>
    )
}

Title.propTypes = {
    duration: PropTypes.number,
    fontSize: PropTypes.string,
    text: PropTypes.string
}

export default Title