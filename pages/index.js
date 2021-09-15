import Head from 'next/head'
import styled from 'styled-components';
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import { useRef } from 'react';

const Fullscreen = styled.div`
  height: 100vh;
  overflow:hidden auto;
  scroll-snap-type: y mandatory;
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
        <Intro />
        <AboutMe scrollRef={scrollEl}/>
      </Fullscreen>
    </>
  )
}
