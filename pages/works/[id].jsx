import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useState } from 'react'
import NavLink from '../../components/navbar/NavLink'
import Loader from '../../components/Loader'
import { projects as projectsList } from '../../components/assets/contents/projects'
import { variantCtaContainer, variantCtaLetters, variantsHeroTitle, variantsProjectSlide } from '../../components/assets/variants'
import { List, Paragraph, Section, Title } from '../../components/section/'

import WordAnimated from '../../components/WordAnimated'
import ScrollDown from '../../components/ScrollDown'
import Video from '../../components/Video'


export const getStaticPaths = async () => {   
    const paths = projectsList.map( ({id}) => {
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
            className="flex flex-col justify-center"
            fixedHeight 
        >
            <div className="text-indigo-600 text-4xl w-full mx-auto uppercase font-anton ">
                <WordAnimated text={ title } variants={ variantsHeroTitle } hover={{ color: '#c7d2fe', transition: '0.3s'}}/>
            </div>
            <div className="w-full h-fit mt-6 relative overflow-hidden" >
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
                    variants={variantsProjectSlide(1, 0.75)}
                    initial="initial"
                    animate="animate"
                />
                <motion.div 
                    className="absolute inset-0 bg-indigo-600 " 
                    variants={variantsProjectSlide(1.25, 0.75)}
                    initial="initial"
                    animate="animate"
                />
            </div>  
            <Paragraph delay={1.25} className="text-indigo-400 text-xl uppercase font-anton tracking-wider mt-12" text={ subtitle } />
            <Paragraph delay={1.5} className="text-indigo-300 text-base uppercase mt-8" text={ description } onComplete = { () => setIsComplete(true) } />
            <motion.div className="mt-8 w-fit" variants={variantCtaContainer} initial="initial" animate="animate">
                <NavLink 
                    external
                    href={cta.href} 
                    childrenClassName="uppercase px-3 py-2 bg-indigo-600 hover:bg-indigo-800 rounded-3xl block text-indigo-100 hover:text-indigo-50 transition-all duration-500" 
                    childrenText={cta.text} 
                    variants={variantCtaLetters()}
                />
            </motion.div>
            <ScrollDown text={"Scroll to explore"} />
        </Section>
        { isComplete && 
            <>
                <Section className="mt-16 bg-black py-16">
                    <Title color="text-indigo-600" text={secondSection.title[0]} underlined={false} />  
                    <Title color="text-indigo-600" colorUnderline={'from-indigo-700 via-indigo-700/60'} text={secondSection.title[1]} />                  
                    <Paragraph delay={0.3} text={ secondSection.description[0] } scrollAnimation className="mt-12 text-indigo-300 text-lg" />    
                    <Paragraph delay={0.3} text={ secondSection.description[1] } scrollAnimation className="mt-4 text-indigo-300 text-lg" /> 
                    <Paragraph delay={0.3} text={ secondSection.description[2] } scrollAnimation className="mt-4 text-indigo-300 text-lg" /> 
                    <Video src={video} posterPath={image.path} />
                </Section>     
                <Section className=" py-16 next__project">
                    <Link href={ `/works/${cta.nextId}` } passHref  scroll={false}>
                        <a className="overflow-hidden" >
                            <Title color="text-indigo-600" text={'Next'} fontSize="text-4xl" underlined={false} />
                            <Paragraph delay={0.3} text={ cta.next } scrollAnimation className="mt-4 text-indigo-300 text-lg" />  
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