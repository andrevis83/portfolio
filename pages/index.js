import Head from 'next/head'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Loader, ScrollDown, WordAnimated } from '../components'
import { home, projects, skills } from '../components/assets/contents/home'
import { variantsHeroTitle, } from '../components/assets/variants'
import { Divider, List, Paragraph, Project, Section, Title } from '../components/section/'
import {  CallToAction } from '../components'


export const getStaticProps = async () => {

  return {
    props: {
      contents: home,
      projects
    },
  }

}

const Home = ({contents, projects: ProjectsList}) => {

  const {title, subtitle, getInTouch, about, about_2, skillsTech, skillsTech_2} = contents;

  const [isComplete, setIsComplete] = useState(false);

  return (
    <Loader>
      <Head>
        <title>Andrea Visentini, Web developer</title>
        <meta name="description" content="This is the home of the portfolio created by Andrea Visentini" />
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
          className="text-indigo-400 text-lg md:text-3xl lg:text-4xl uppercase mt-8 md:mt-11 lg:mt-20 md:w-3/4 lg:w-1/2 md:ml-auto" 
          text={ subtitle } 
          delay={0.25}
        />
        <Paragraph 
          className="mt-12 md:mt-20 text-indigo-200 text-base md:text-2xl lg:text-3xl md:w-1/2 lg:w-1/3 md:mr-auto md:pl-6 " 
          delay={0.5} 
          text={ getInTouch } 
        />
        <CallToAction  href="mailto:andrea.visentini83@gmail.com"  text="Get in touch" />
        <ScrollDown text={"Scroll to know me"} onComplete = { () => {setIsComplete(true)} } />
      </Section>
      { isComplete && 
          <>
            <Section className="bg-black py-16 md:py-28">
              <Title color="text-indigo-600" text='About me' />          
              <Paragraph  delay={0.3} text={ about }  className=" text-indigo-300 text-lg md:text-2xl lg:text-3xl md:w-2/3 lg:w-1/2" />           
              <Paragraph  delay={0.3} text={ about_2 }  className="mt-6 md:mt-12 lg:mt-24 text-indigo-300 text-lg md:text-2xl lg:text-3xl md:w-2/3 lg:w-1/2 md:ml-auto md:pl-7" />
            </Section>
            <Section className="mt-16" fixedHeight>
              <Title text='Technical Skills' />
              <Paragraph  delay={0.3} text={ skillsTech } className=" text-indigo-300 text-lg md:text-2xl lg:text-3xl md:w-2/3" />
              <Paragraph  delay={0.3} text={ skillsTech_2 } className="text-indigo-300 text-lg md:text-2xl lg:text-3xl md:w-2/3 " />
              <div className="flex flex-wrap">
                { skills.map( (skill) => {
                    const { list, title, description } = skill;     
                    return (  
                      <List 
                        key={title} 
                        items={list} 
                        title={title} 
                        description={description}
                      />   
                    )                                                  
                  })
                }
              </div>
            </Section>
            <Section className=" mt-16 bg-black py-16 md:py-28" >
              <Title text='Projects' />
              { ProjectsList.map( (project, index) => {
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
          </>
        }  
    </Loader>
  )
}

Home.propTypes = {
  contents: PropTypes.object,
}

export default Home;
