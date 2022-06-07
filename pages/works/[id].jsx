import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { CallToAction, Loader, ScrollDown, Video, WordAnimated} from '../../components'
import { projects as projectsList } from '../../components/assets/contents/projects'
import { variantsHeroTitle, variantsProjectSlide } from '../../components/assets/variants'
import { Paragraph, Section, Title } from '../../components/section/'

export const getStaticPaths = async () => {   
    const paths = projectsList.map( ({ id }) => {
        return {params: {
            id: id.toString()
        }}
    })

    return {
        paths,
        fallback: false,
    }
} 

export const getStaticProps = async ({params}) => {
    const projects = projectsList.filter( project => project.id === params.id);
    return {
        props: {
            project: projects[0]
        }
    }
}

const Project = ({project}) => {  

    const { 
        description, 
        cta, 
        image, 
        secondSection,
        subtitle, 
        title,
        video
    } = project

    const [isComplete, setIsComplete] = useState(false);

    return (
       <Loader>
        <Head>
            <title>Andrea Visentini, Web developer - { title }</title>
            <meta name="description" content="This is the case study for the website Edizioni Studio IGPI" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Section 
            className="flex flex-col pt-40 md:justify-center"
            fixedHeight 
        >
            <div className="">
                <div className="text-indigo-600 text-4xl md:text-6xl lg:text-8xl xl:text-9xl sm:w-[65%] md:w-[85%] lg:w-[93%] uppercase font-anton">
                    <WordAnimated className="md:mr-4 lg:mr-6" text={ title } variants={ variantsHeroTitle } hover={{ color: '#c7d2fe', transition: '0.3s'}}/>
                </div>
                <div className="w-full h-fit mt-10 lg:mt-16 relative overflow-hidden" >
                    <Image 
                        className="w-full h-auto"
                        layout='responsive'
                        alt='image project'
                        priority={true}
                        src={ image.path } 
                        width={image.width}
                        height={image.height}
                    />
                    <motion.div 
                        className="absolute inset-0 bg-primary z-20" 
                        variants={variantsProjectSlide(1, 1)}
                        initial="initial"
                        animate="animate"
                    />
                    <motion.div 
                        className="absolute inset-0 bg-indigo-600 " 
                        variants={variantsProjectSlide(1.25, 1)}
                        initial="initial"
                        animate="animate"
                    />
                </div>  
            </div>
            <Paragraph 
                className="text-indigo-400 text-lg md:text-3xl lg:text-4xl uppercase mt-8 md:mt-11 lg:mt-20 md:w-3/4" 
                text={ subtitle } 
                delay={0.25} 
            />
            <Paragraph 
                className="mt-12 md:mt-16 text-indigo-200 text-base md:text-2xl lg:text-3xl md:w-1/2 md:mr-auto" 
                delay={0.5} 
                text={ description } 
            />     
            <CallToAction href={ cta.href }  text={ cta.text } />
            <ScrollDown text={"Scroll to explore"} onComplete = { () => setIsComplete(true) }/>
        </Section>
        { isComplete && 
            <>
                <Section className="bg-black py-16 md:py-28">
                    <Title color="text-indigo-600" margin='mb-1' text={secondSection.title[0]} underlined={false} />  
                    <Title color="text-indigo-600" colorUnderline={'from-indigo-700 via-indigo-700/60'} text={secondSection.title[1]} />                  
                    <Paragraph delay={0.3} text={ secondSection.description[0] } className="mt-8 text-indigo-300 text-lg md:text-2xl lg:text-3xl md:w-2/3 lg:w-4/5" />    
                    <Paragraph delay={0.3} text={ secondSection.description[1] } className="text-indigo-300 text-lg md:text-2xl lg:text-3xl md:w-2/3 lg:w-4/5" /> 
                    <Paragraph delay={0.3} text={ secondSection.description[2] } className="text-indigo-300 text-lg md:text-2xl lg:text-3xl md:w-2/3 lg:w-4/5" /> 
                    <Video src={video} posterPath={image.path} />
                </Section>     
                <Section className=" py-16 next__project">
                    <Link href={ `/works/${cta.nextId}` } passHref  scroll={false}>
                        <a className="overflow-hidden outline-none" >
                            <Title margin="mb-0" color="text-indigo-600" text={'Next'} fontSize="text-4xl md:text-5xl lg:text-6xl" underlined={false} />
                            <Paragraph delay={0.3} text={ cta.next } className="mt-4 md:mt-6 lg:mt-10 text-indigo-300 text-lg md:text-2xl lg:text-3xl" />  
                        </a>
                    </Link>                  
                </Section>
            </>              
        }  
       </Loader>
    )
}

Project.propTypes = {
    project: PropTypes.object
}

export default Project