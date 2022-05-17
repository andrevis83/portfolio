import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import LetterAnimated from '../LetterAnimated'
import { variantsNavlinks, variantsProjectSlide } from '../assets/variants' 

const Project = ({count, externalHref = false, href = '#', pathImg, title = null}) => {

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
        <div className="w-full">
            <div className="text-indigo-200 text-3xl mt-10 text-center" >
                <LetterAnimated 
                    className="text-cyan-50" 
                    text={ count < 10 ? `0${count}.` : `${count}.`}
                    variants = {variantsNavlinks(0.5)}
                    observer={true}
                />
            </div>
            <div className="text-indigo-200 text-3xl text-center mt-2" >
                <LetterAnimated 
                    className="text-cyan-50" 
                    text={ title } 
                    variants = {variantsNavlinks(0.5)}
                    observer={true}
                />
            </div>
            <div className="w-full h-fit mt-8 relative overflow-hidden" ref={ref}>
                <Link href={ href } passHref >
                    <a 
                        className="" 
                        target={ externalHref ? "_blank" : "_self" }
                    >
                        <Image 
                            className="w-full h-auto "
                            layout='responsive'
                            src={ pathImg } 
                            width={1200}
                            height={910}
                        />
                    </a>
                </Link>
                <motion.div 
                    className="absolute inset-0 bg-black z-20" 
                    variants={variantsProjectSlide()}
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
    externalHref: PropTypes.bool,
    href: PropTypes.string,
    pathImg: PropTypes.string,
    title: PropTypes.string,

}

export default Project