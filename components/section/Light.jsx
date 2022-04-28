import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'


const Light = ({className = null }) => {

    const [colors, setColors] = useState(null)

    useEffect(() => {
        setColors( 
            {
                initial: { 
                    background: '#a5b4fc', 
                    scale: 0.75,
                    x: 0
                },
                animate: { 
                    background: '#4f46e5',
                    scale: 1,
                    x: '80%',
                    transition: {
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }
                },
            }
        )
    
    }, [])
    

    
    const variants = colors ? colors : null;

    return (
        <> 
            { variants && 
                <motion.div 
                    className={ className ? className : ''}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                >
                </motion.div>
            }     
        </>
    )
}

Light.propTypes = {
    className: PropTypes.string
}

export default Light