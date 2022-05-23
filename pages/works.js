import Head from 'next/head'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Loader from '../components/Loader'
import NavLink from '../components/navbar/NavLink'

import { works } from '../components/assets/contents/works'
import { projects as ProjectList } from '../components/assets/contents/projects'
import { variantsHeroTitle, variantCtaContainer, variantCtaLetters } from '../components/assets/variants'
import { Divider, List, Paragraph, Project, Section, Title } from '../components/section/'

import WordAnimated from '../components/WordAnimated'
import ScrollDown from '../components/ScrollDown'


export const getStaticProps = async () => {

  return {
    props: {
      contents: works,
      ProjectList
    },
  }

}

const Works = ({contents, ProjectList}) => {

  const {title, subtitle, getInTouch } = contents;

  const [isComplete, setIsComplete] = useState(false);

  return (
    <Loader>
      <Head>
        <title>Andrea Visentini, Web developer - List of works</title>
        <meta name="description" content="This is the works created by Andrea Visentini" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section 
        className="flex flex-col justify-center"
        fixedHeight 
      >
        <div className="text-indigo-600 text-4xl w-full mx-auto uppercase font-anton ">
          <WordAnimated text={ title } variants={ variantsHeroTitle } hover={{ color: '#c7d2fe', transition: '0.3s'}}/>
        </div>
        <Divider 
          className="w-56 h-0.5 border-none bg-gradient-to-r from-indigo-700 via-indigo-700/60 to-primary" 
          classNameContainer="ml-0 mt-4 my-8 w-fit"
          delay={1}
        />
        <Paragraph className="text-indigo-400 text-lg uppercase" text={ subtitle } delay={1} />
        <Paragraph className="mt-12 text-indigo-200 text-lg" delay={1.5} text={ getInTouch } onComplete = { () => setIsComplete(true) } />
        <ScrollDown delay={2} text={"Scroll to explore"} />
      </Section>
      { isComplete && 
          <Section className=" mt-16 bg-black py-16" >
            <Title text='Projects' />
            { ProjectList.map( (project, index) => {
                  const { id, image, title } = project;     
                  return (
                    <Project
                      key={`project--${index}`}
                      count={index + 1} 
                      href={`/works/${id}`}
                      image={image}
                      title={title}                        
                    />
                  )
              })}            
          </Section>
        }  
    </Loader>
  )
}

Works.propTypes = {
  contents: PropTypes.object,
}

export default Works;
