import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion'

import { Paragraph, Title } from './';

const List = ({items, title, description}) => {

    const variantsList = {
        initial: { y: 32, opacity: 0 },
        animate: i => ({ 
            y: 0, 
            opacity: 1, 
            transition:{ 
                default: { duration: 0.3, delay: i * 0.5 },
            }
        })
    }

    const animation = useAnimation();
    const [ ref, inView, ] = useInView({
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
        <div className="mt-0 first-of-type:mt-20" >
            <Title text={ title } fontSize="text-3xl" />
            <Paragraph text={ description } scrollAnimation className="text-indigo-300 text-lg mt-10" />
            <ul className="list-none text-indigo-300 mt-12" ref={ref}>
                { items.map( ({icon, skill, value}, index) => {

                    const variantSkillValue = {
                        initial: {
                            scaleX: 0,
                        },
                        animate: {
                            scaleX: 1,
                            transition: {
                                duration: 1,
                                delay: index * 0.5,
                                ease: 'easeInOut'
                            }
                        }
                    }

                    return (
                        <motion.li 
                            className="flex items-center flex-wrap text-lg mb-10 last-of-type:mb-0" 
                            key={`${skill}-${index}`}
                            custom={index}
                            variants={variantsList}
                            animate={animation}
                        >
                            <span className="inline-block mr-3 text-xl">{icon}</span>
                            <span className="inline-block tracking-wider">{skill}</span>
                            <div className="w-full">
                                { inView && (
                                    <motion.div 
                                        className="h-1 bg-gradient-to-r from-indigo-900/60 to-indigo-600 mt-4 text-base text-white relative" 
                                        style={{ width: `${value}%`, originX: 0 }}
                                        variants={variantSkillValue}
                                        initial="initial" 
                                        animate="animate"
                                    >
                                    </motion.div>
                                )}
                                
                            </div>
                        </motion.li>
                    )
                })}
            </ul>
        </div>
  )
}

List.propTypes = {
    items: PropTypes.array,
    description: PropTypes.string,
    title: PropTypes.string
}

export default List