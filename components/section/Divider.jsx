import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion'

const Divider = ({className, delay = 0}) => {

    const variantsDivider = {
        initial: {
            scaleX: 0,
            boxShadow: ''
        },
        animate: {
            scaleX: 1,
            transition: {
                duration: 0.75,
                delay: delay,
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
        <div className="w-fit mx-auto my-16" ref={ref}>
            <motion.hr 
                className={`${className}`} 
                variants={variantsDivider} 
                animate={animation} 
                style={{ originX: 0 }}
            />
        </div>
    )
}

Divider.propTypes = {
    className: PropTypes.string,
    delay: PropTypes.number
}

export default Divider