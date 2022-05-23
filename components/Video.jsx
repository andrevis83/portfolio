import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const Video = ({posterPath, src}) => {

  const animation = useAnimation();
    const [ ref, inView ] = useInView({
        threshold: 0.5,
        triggerOnce: true
    });


    useEffect(() => { 
        if (inView) {
            animation.start( {opacity: 1} );
        } else {
            animation.start({opacity: 0});
        }
    }, [inView])

  return (
    <motion.div className="mt-10 w-full" ref={ref} animate={animation} transition={{delay:0.5, duration: 0.5}}>
      <video className="lazy" autoPlay muted loop playsInline width="610" height="254" poster={ posterPath } >
        <source src={ src } type="video/mp4" />
      </video>
    </motion.div>  
  )
}

Video.propTypes = {
    posterPath: PropTypes.string,
    src: PropTypes.string,
}

export default Video