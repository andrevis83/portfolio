import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {Paragraph} from './'
import { variantsProjectSlide } from '../assets/variants' 

const Project = ({count, href = '#', image, title = null}) => {

    const animation = useAnimation();
    const [ ref, inView ] = useInView({
        threshold: 0.5,
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
        <div className="w-full mb-20 md:mb-32 last-of-type:mb-0 relative flex flex-col landscape:flex-row-reverse landscape:items-center">
            <div className="w-full landscape:w-3/5 landscape:absolute z-10">
                <Paragraph 
                    className="text-indigo-200 text-2xl md:text-4xl lg:text-6xl font-bold uppercase text-gray-400" 
                    text={ `${count < 10 ? `0${count}` : count}.` }                     
                    delay={0.5}
                />
                <Paragraph 
                    className="text-indigo-200 text-3xl md:text-5xl lg:text-7xl landscape:xl:text-8xl font-bold uppercase mt-1" 
                    text={ title }        
                    delay={0.75}             
                />
            </div>
            <div className="w-full landscape:w-1/2 h-fit mt-8 lg:mt-12 landscape:mr-auto relative overflow-hidden landscape:opacity-60" ref={ref}>
                <Link href={ href } passHref scroll={false}>
                    <a className="overflow-hidden" >
                        <Image 
                            className="w-full h-auto"
                            layout='responsive'
                            alt='image project'
                            src={ image.path } 
                            width={image.width}
                            height={image.height}
                        />
                    </a>
                </Link>
                <motion.div 
                    className="absolute inset-0 bg-black z-20" 
                    variants={variantsProjectSlide(0.5)}
                    animate={animation}
                />
                <motion.div 
                    className="absolute inset-0 bg-indigo-600 " 
                    variants={variantsProjectSlide(0.75)}
                    animate={animation}
                />
            </div>  
        </div>
    )
}

Project.propTypes = {
    count: PropTypes.number,
    href: PropTypes.string,
    image: PropTypes.object,
    title: PropTypes.string,

}

export default Project