import { Fragment } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useState } from 'react'
import NavLink from '../components/navbar/NavLink'

import { home, skills } from '../components/assets/contents/home'
import { variantsHeroTitle, variantCtaContainer, variantCtaLetters } from '../components/assets/variants'
import { Divider, List, Paragraph, Project, Section, Title } from '../components/section/'

import WordAnimated from '../components/WordAnimated'
import ScollDown from '../components/ScollDown'


export const getStaticProps = async () => {

  return {
    props: {
      contents: home,
    },
  }

}

const Home = ({contents}) => {

  const {title, subtitle, getInTouch, about, about_2, skillsTech, skillsTech_2, scroll} = contents;

  const [isComplete, setIsComplete] = useState(false);

  return (
    <>
      <Head>
        <title>Andrea Visentini, Web developer</title>
        <meta name="description" content="This is the home of the portfolio created by Andrea Visentini" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section 
        className="flex flex-col justify-center"
        fixedHeight 
      >
        <div className="text-indigo-600 text-4xl w-full mx-auto uppercase font-anton ">
          <WordAnimated text={ title } variants={ variantsHeroTitle } hover={{ color: '#c7d2fe', transition: '0.3s'}}/>
        </div>
        <Paragraph className="mt-16 text-indigo-400 text-lg uppercase" text={ subtitle } delay={1} />
        <Paragraph className="mt-12 text-indigo-200 text-lg" delay={1.5} text={ getInTouch } onComplete = { () => setIsComplete(true) } />
        <motion.div className="mt-20 w-fit" variants={variantCtaContainer} initial="initial" animate="animate">
          <NavLink 
              href="mailto:andrea.visentini83@gmail.com" 
              childrenClassName="uppercase px-4 py-2 bg-indigo-600 hover:bg-indigo-800 rounded-3xl block text-indigo-100 hover:text-indigo-50 transition-all duration-500" 
              childrenText="Get in touch"
              variants={variantCtaLetters}
          />
        </motion.div>
      <ScollDown text={scroll} />
      </Section>
      { isComplete && 
          <>
            <Section className="mt-24 bg-black py-16">
              <Title text='About me' />
              <Paragraph text={ about } scrollAnimation className="mt-12 text-indigo-300 text-lg" />
              <Divider 
                className="w-56 h-0.5 border-none bg-gradient-to-r from-primary via-indigo-700 to-primary"
              />
              <Paragraph text={ about_2 } scrollAnimation className="text-indigo-300 text-lg" />
            </Section>
            <Section className="mt-16" fixedHeight>
              <Title text='Skills and experiences' />
              <Paragraph text={ skillsTech } scrollAnimation className="mt-10 text-indigo-300 text-lg" />
              <div className="mt-24">
                { skills.map( (skill, index) => {
                    const { list, title, description } = skill;     
                    return (
                      <Fragment key={`skill-list-${index}`}> 
                        <List items={list} title={title} description={description} />
                        { (index !== skills.length -1) && (
                            <Divider
                              className="w-56 h-0.5 my-28 border-none bg-gradient-to-r from-primary via-indigo-300 to-primary" 
                              delay={0.5}     
                            />
                        )}                  
                      </Fragment>
                    )
                })}
              </div>
            </Section>
            <Section className=" mt-16 bg-black py-16" fixedHeight>
              <Title text='Projects and works' />
              <Project
                count={1} 
                href="https://www.edizionistudioigpi.com/"
                externalHref={true}
                pathImg="/images/web_igpi.png" 
                title="Edizioni studio IGPI"
                
              />
            </Section>
          </>
      }  
    </>
  )
}

Home.propTypes = {
  contents: PropTypes.object,
}

export default Home;
