import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion'

const Divider = ({className, classNameContainer = 'mx-auto my-16', delay = 0}) => {

    const variantsDivider = {
        initial: {
            scaleX: 0,
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
            if ( inView ) {
                animation.start('animate');
            } else {
                animation.start('initial');
            }

        
    }, [inView])


    return (
        <div className={`${classNameContainer}`} ref={ref}>
            <motion.hr 
                className={`${className}`} 
                variants={variantsDivider} 
                initial="initial"
                animate={ animation } 
                style={{ originX: 0 }}
            />
        </div>
    )
}

Divider.propTypes = {
    className: PropTypes.string,
    classNameContainer: PropTypes.string,
    delay: PropTypes.number,
}

export default Divider