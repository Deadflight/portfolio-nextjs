import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Head from 'next/head'

const Home = () => {
  return (
    <>
    <Head>
      <title>Carlos Correa</title>  
      <meta property='og:title' content='Carlos Correa'/>
      <meta property='og:image' content='//public/images/ScreenShot.PNG'/>
      <meta property='og:description' content='Carlos Correa Portfolio'/>
      <meta property='og:url' content='//https://carloscorreaportfolio.netlify.app/'/>
    </Head>
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      {/*<Acomplishments />*/}
    </Layout>
    </>
  );
  
};

export default Home;
