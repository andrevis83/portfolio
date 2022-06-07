import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import NavLink from './navbar/NavLink'
import { variantCtaContainer, variantCtaLetters } from '../components/assets/variants'


const CallToAction = ({href, text}) => {

    const animation = useAnimation();
    const [ ref, inView ] = useInView({
        triggerOnce: true
    });


    useEffect(() => { 
        if ( inView) {
            animation.start('animate');
        } else {
            animation.start('initial');
        }
    }, [inView])

    return (
        <motion.div className="mt-7 md:mt-12 w-fit " variants={ variantCtaContainer } initial="initial" animate={animation} ref={ ref } >
            { inView && 
                <NavLink 
                    external={true}
                    href={href}
                    childrenClassName="uppercase px-3 py-2 bg-indigo-600 hover:bg-indigo-800 rounded-3xl block text-base md:text-lg lg:text-xl lg:text-xl text-indigo-100 hover:text-indigo-50 transition-all duration-500" 
                    childrenText={ text }
                    variants={variantCtaLetters(0)}
                />
            }
        
        </motion.div>
    )
}

CallToAction.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default CallToAction