import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion'

import { Paragraph, Title } from './';

const List = ({items, margin = 6, title, description}) => {

    const variantsList = {
        initial: { y: 32, opacity: 0 },
        animate: i => ({ 
            y: 0, 
            opacity: 1, 
            transition:{ 
                default: { 
                    duration: 0.5, 
                    delay: i * 0.25 
                },
            }
        })
    }

    const animation = useAnimation();
    const [ ref, inView, ] = useInView({
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
        <div style={{ marginTop: `${margin}rem`}}>
            { title && <Title text={ title } fontSize="text-2xl" underlined={ false } />}
            { description && <Paragraph delay={0.3} text={ description } scrollAnimation className="text-indigo-300 text-lg mt-10" />}
            <ul className="list-none text-indigo-300 mt-12" ref={ref}>
                { items.map( ( item, index) => { 
                    const {icon = null, skill = null, value = null} = item;

                    const variantSkillValue = {
                        initial: {
                            scaleX: 0,
                        },
                        animate: {
                            scaleX: 1,
                            transition: {
                                duration: 1,
                                delay: 0.5,
                                ease: 'easeInOut'
                            }
                        }
                    }

                    return (
                        <motion.li 
                            className={ `flex items-center flex-wrap text-lg ${ (item && typeof item === 'string') ? 'mb-5' : 'mb-10'} last-of-type:mb-0` } 
                            key={`${skill}-${index}`}
                            custom={index}
                            variants={variantsList}
                            animate={animation}                         
                        >
                            { icon && <span className="inline-block mr-3 text-xl">{icon}</span>}
                            { skill && <span className="inline-block tracking-wider">{skill}</span>}
                            { (item && typeof item === 'string') && <span className="inline-block tracking-wider">{item}</span>}
                            { value && (
                                <div className="w-full">
                                    { inView && (
                                        <motion.div 
                                            className="h-1 bg-gradient-to-r from-indigo-900/60 to-indigo-600 mt-2 rounded-md" 
                                            style={{ width: `${value}%`, originX: 0 }}
                                            variants={variantSkillValue}
                                            initial="initial" 
                                            animate="animate"
                                        >
                                        </motion.div>
                                    )}
                                    
                                </div>
                            )}
                        </motion.li>
                    )
                })}
            </ul>
        </div>
  )
}

List.propTypes = {
    items: PropTypes.array,
    margin: PropTypes.number,
    description: PropTypes.string,
    title: PropTypes.string
}

export default List