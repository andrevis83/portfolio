import Head from 'next/head'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Loader from '../components/Loader'
import { works } from '../components/assets/contents/works'
import { projects as ProjectList } from '../components/assets/contents/projects'
import { variantsHeroTitle } from '../components/assets/variants'
import { Divider, Paragraph, Project, Section, Title } from '../components/section/'

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
        className="flex flex-col pt-40 md:justify-center"
        fixedHeight 
      >
        <div className="text-indigo-600 text-4xl md:text-6xl lg:text-8xl xl:text-9xl sm:w-[65%] md:w-[85%] lg:w-[95%] 2xl:w-4/5 uppercase font-anton">
          <WordAnimated className="md:mr-4 lg:mr-6" text={ title } variants={ variantsHeroTitle } hover={{ color: '#c7d2fe', transition: '0.3s'}}/>
          <Divider 
            className="w-full h-full border-none bg-gradient-to-r from-indigo-700 via-indigo-700/60 to-primary" 
            classNameContainer="w-3/4 h-0.5 mt-4 lg:mt-6 xl:mt-8"
            delay={1}
          />
        </div>
        <Paragraph 
          className="text-indigo-400 text-lg md:text-3xl lg:text-4xl uppercase mt-8 md:mt-11 lg:mt-20 md:w-3/4 md:ml-auto" 
          text={ subtitle } 
          delay={0.25} 
        />
        <Paragraph 
          className="mt-12 md:mt-20 text-indigo-200 text-base md:text-2xl lg:text-3xl md:w-1/2 md:mr-auto md:pl-6 " 
          delay={0.5} 
          text={ getInTouch } 
        />
        <ScrollDown delay={2} text={"Scroll to explore"} onComplete = { () => setIsComplete(true) }/>
      </Section>
      { isComplete && 
          <Section className=" bg-black py-16 md:py-28" >
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
              }
            )}            
          </Section>
        }  
    </Loader>
  )
}

Works.propTypes = {
  contents: PropTypes.object,
}

export default Works;
