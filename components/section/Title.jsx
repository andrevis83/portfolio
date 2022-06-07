import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion'
import { Divider } from './'

const Title = (props) => {

    const {
        color = 'text-indigo-600', 
        colorUnderline = 'from-indigo-700 via-indigo-700/60',
        duration = 1.25, 
        fontSize = 'text-4xl md:text-6xl lg:text-8xl', 
        margin = 'mb-8 md:mb-16 lg:mb-24',
        text, 
        underlined = true
    } = props;

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
        <h2 className={`${ color } overflow-hidden font-anton tracking-wider lg:tracking-wide uppercase ${margin}  ${fontSize}`} ref={ref} >
            <motion.span className="inline-block w-fit" variants={variantsHeroTitle} animate={animation}  >
                {text}
                { underlined && (
                    <Divider 
                        className={`w-full h-0.5 border-none bg-gradient-to-r ${colorUnderline} to-primary`}
                        classNameContainer="ml-0 my-3"
                    />
                )}
            </motion.span>
        </h2>
    )
}

Title.propTypes = {
    color: PropTypes.string,
    duration: PropTypes.number,
    fontSize: PropTypes.string,
    margin: PropTypes.string,
    text: PropTypes.string,
    underlined: PropTypes.bool
}

export default Title