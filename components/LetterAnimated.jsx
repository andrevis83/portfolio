import { forwardRef, useEffect } from "react"
import PropTypes from 'prop-types'

import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const DEFAULT_VARIANTS = {
  initial: { y: '120%' },
  animate: i => ({ 
    y: 0, 
    transition:{ 
      default: {duration: 0.3, delay: 2.5 + (i * 0.05)},
    }
  })
}

const LetterAnimated = forwardRef(({text, variants = DEFAULT_VARIANTS, observer = false }, ref) => {

    const letters = text.split('');
    
    const animation = useAnimation();
    const [ refInview, inView ] = useInView({
        threshold: 1,
        triggerOnce: true
    });


    useEffect(() => { 
        if ( observer && inView) {
            animation.start('animate');
        } else {
            animation.start('initial');
        }
    }, [inView])




    return (
      <div className="overflow-hidden" ref={ observer ? refInview : null }>
        { letters && letters.map( (letter, index) => {
          return (
            <motion.span 
              className="inline-block min-w-5" 
              custom={index}
              variants={variants}
              initial="initial"
              animate={ observer ? animation : "animate"}
              key={ index }
            >
              { letter }
            </motion.span>
          )
        })}
      </div>   
    )
  })

LetterAnimated.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
}

export default LetterAnimated;
