import Head from 'next/head'
import styled from 'styled-components';
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import { useRef } from 'react';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Fullscreen = styled.div`
  height: 100vh;
  overflow:hidden auto;
`
export default function Home() {
  const scrollEl = useRef();
  
  return (
    <>
      <Head>
        <title>Artur Oborski | Home</title>
        <meta name="description" content="I'm frontend developer" />
      </Head>
      <Fullscreen ref={scrollEl}>
        <Intro scrollRef={scrollEl} />
        <AboutMe scrollRef={scrollEl} />
        <TechStack />
        <Projects />
        <Footer />
      </Fullscreen>
    </>
  )
}
