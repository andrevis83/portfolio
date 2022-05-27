import Head from 'next/head'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Loader from '../components/Loader'
import NavLink from '../components/navbar/NavLink'

import { home, projects, skills } from '../components/assets/contents/home'
import { variantsHeroTitle, variantCtaContainer, variantCtaLetters } from '../components/assets/variants'
import { Divider, List, Paragraph, Project, Section, Title } from '../components/section/'

import WordAnimated from '../components/WordAnimated'
import ScrollDown from '../components/ScrollDown'


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
        <div className="text-indigo-600 text-4xl md:text-6xl w-full md:w-5/6 uppercase font-anton">
          <WordAnimated text={ title } variants={ variantsHeroTitle } hover={{ color: '#c7d2fe', transition: '0.3s'}}/>
        </div>
        <Divider 
          className="w-56 md:w-104 h-0.5 border-none bg-gradient-to-r from-indigo-700 via-indigo-700/60 to-primary" 
          classNameContainer="ml-0 mt-4 my-8 w-fit"
          delay={1}
        />
        <Paragraph className="text-indigo-400 text-lg md:text-3xl uppercase mt-8 md:mt-12 md:w-5/6 md:ml-auto" text={ subtitle } delay={1} />
        <Paragraph className="mt-12 md:mt-20 text-indigo-200 text-base md:text-2xl md:w-1/2 md:mr-auto md:pl-6 " delay={1.5} text={ getInTouch } />
        <motion.div className="mt-7 md:mt-12 w-fit md:pl-6" variants={ variantCtaContainer } initial="initial" animate="animate">
          <NavLink 
              href="mailto:andrea.visentini83@gmail.com" 
              childrenClassName="uppercase px-3 py-2 bg-indigo-600 hover:bg-indigo-800 rounded-3xl block text-base md:text-lg text-indigo-100 hover:text-indigo-50 transition-all duration-500" 
              childrenText="Get in touch"
              variants={variantCtaLetters()}
          />
        </motion.div>
        <ScrollDown text={"Scroll to know me"} onComplete = { () => {setIsComplete(true)} } />
      </Section>
      { isComplete && 
          <>
            <Section className="bg-black py-16">
              <Title color="text-indigo-600" text='About me' />          
              <Paragraph  delay={0.3} text={ about }  className="mt-8 text-indigo-300 text-lg md:text-3xl" />           
              <Paragraph  delay={0.3} text={ about_2 }  className="mt-6 md:mt-16 text-indigo-300 text-lg md:text-3xl" />
            </Section>
            <Section className="mt-16" fixedHeight>
              <Title text='Technical Skills' />
              <Paragraph  delay={0.3} text={ skillsTech } className="mt-8 text-indigo-300 text-lg  md:text-3xl" />
              <Paragraph  delay={0.3} text={ skillsTech_2 } className="mt-6 text-indigo-300 text-lg  md:text-3xl" />
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
            </Section>
            <Section className=" mt-16 bg-black py-16" >
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
