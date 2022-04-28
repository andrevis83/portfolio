import Head from 'next/head'

import Section from '../components/section/Section'

const PRESENTATION = "Hi! I'm Andrea Visentini, a web developer and I love to turn the ideas into reality."

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrea Visentini, Web developer</title>
        <meta name="description" content="This is the home of the portfolio created by Andrea Visentini" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section 
        className = ""
        fixedHeight 
        text = { PRESENTATION }
      />
      <Section />
    </>
  )
}
