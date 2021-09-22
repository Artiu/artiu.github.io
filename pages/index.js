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
  @media (min-width: 1000px)
  {
    ::-webkit-scrollbar {
     width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #777D7D;
      :hover{
        background-color: #595E5E;
      }
    }
  }
`
export default function Home() {
  const scrollEl = useRef();
  
  return (
    <>
      <Head>
        <title>Artur Oborski | Frontend developer</title>
        <meta name="description" content="React developer and creative person who likes application logic" />
        <meta name="keyword" content="javascript, react, junior developer, portfolio" />
        <meta property="og:title" content="Artur Oborski | Frontend Developer"/>
        <meta property="og:description" content="React developer and creative person who likes application logic" />
        <meta property="og:url" content="https://artiu.github.io" />
        <meta property="og:type" content="website" />
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
