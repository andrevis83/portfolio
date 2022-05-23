import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import LetterAnimated from '../LetterAnimated'
import { variantsNavlinks, variantsProjectSlide } from '../assets/variants' 

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
        <div className="w-full mb-24 last-of-type:mb-0">
             <LetterAnimated 
                className="text-indigo-200 text-3xl font-bold uppercase mt-10" 
                text={ `${count < 10 ? `0${count}` : count}.` } 
                variants = {variantsNavlinks(0.25, 0.5)}
                observer={true}
            />
            <LetterAnimated 
                className="text-indigo-200 text-3xl font-bold uppercase mt-1" 
                text={ title } 
                variants = {variantsNavlinks(0.25, 0.5)}
                observer={true}
            />
            <div className="w-full h-fit mt-6 relative overflow-hidden" ref={ref}>
                <Link href={ href } passHref scroll={false}>
                    <a className="overflow-hidden" >
                        <Image 
                            className="w-full h-auto"
                            layout='responsive'
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