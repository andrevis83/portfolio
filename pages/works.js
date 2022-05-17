import Head from 'next/head'
import { motion } from 'framer-motion'
import NavLink from '../components/navbar/NavLink'
import Section from '../components/section/Section'
import ScollDown from '../components/ScollDown'
import WordAnimated from '../components/WordAnimated'

const TITLE = "Hi! I'm Andrea Visentini, a front-end developer based in Ferrara, Italy"
const SUBTITLE = "I turn ideas into reality, creating and animating websites and web apps from mockups. I have worked with agencies and as freelance in the last years."
const GETINTOUCH = "Currently I'm available for projects, job offers or hiring. So, get in touch."
const SKILLSTECH = "I usually develop the front-end of an app or website using React or Next but I have some knowledge"
const SCROLL = "Scroll to know me"

const variantsHeroTitle = {
  initial: {
      y: '130%',
  },
  animate: i => ({
      y: 0,
      transition:{ duration: 1, delay: i * 0.1 }
  })
}

const variantGetInTouchContainer = {
  initial: { scaleX: 0 },
  animate: {
    originX: 0,
    scaleX: [0, 1.25, 1],
    transition: {
      delay: 2.5,
      duration: 1.5
    }
  }
}

const variantGetInTouchLetters = {
  initial: { letterSpacing: '0.1em', opacity: 0 },
  animate: i => ({ 
      letterSpacing: ['0.1em', '0.5em', '0.1em'],
      opacity: 1,
      transition:{ 
          default: {duration: 0.75, delay: 2.5 + (i * 0.05)},
      }
  })
}

const variantsGetInTouch = {
  initial: { opacity: 0, skew: -8, y: 16},
  animate: { 
    opacity: 1, 
    originX: 1,
    skew: 0,
    y: 0,
    transition: { duration: 0.75, delay: 2, ease: "easeOut"}
  }
}

const variantsSubTitle = {
  initial: { opacity: 0, skew: -8, y: 16},
  animate: { 
    opacity: 1, 
    originX: 1,
    skew: 0,
    y: 0,
    transition: { duration: 0.75, delay: 1.5, ease: "easeOut"}
  }
}


export default function Works() {
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
        <div className="text-indigo-500 text-2xl w-full mx-auto uppercase font-extrabold ">
          <WordAnimated text={ TITLE } variants={ variantsHeroTitle } hover={{ color: '#c7d2fe', transition: '0.3s'}}/>
        </div>
        <motion.div 
          className="text-indigo-300 text-lg w-full mx-auto relative mt-12"
          variants={variantsSubTitle} 
          initial="initial" 
          animate="animate"
        >
          <span>{ SUBTITLE }</span>
        </motion.div>
        <div className="text-indigo-200 text-lg w-full mx-auto relative mt-10 z-10">
          <motion.span
            className="block"
            variants={variantsGetInTouch} 
            initial="initial" 
            animate="animate"
          >
            { GETINTOUCH }
          </motion.span>
          <motion.div className="mt-20 w-fit" variants={variantGetInTouchContainer} initial="initial" animate="animate">
            <NavLink 
                href="mailto:andrea.visentini83@gmail.com" 
                childrenClassName="uppercase px-4 py-2 bg-indigo-600 hover:bg-indigo-800 rounded-3xl block hover:text-indigo-50 transition-all duration-500" 
                childrenText="Get in touch"
                variants={variantGetInTouchLetters}
            />
          </motion.div>
        </div>
        <ScollDown text={SCROLL} />
      </Section>
      <Section className=" pt-24" fixedHeight>
        <h2 className="text-indigo-500 text-3xl">01. About me</h2>
      </Section>
      <Section className="pt-24" fixedHeight>
        <h2 className="text-indigo-500 text-3xl">02. Projects and works</h2>
      </Section>
    </>
  )
}
