import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Head from "next/head";
import { MetaTags } from "../constants/constants";

const Home = () => {
  if (typeof window !== "undefined") {
    window.location.replace("https://www.carlos-correa.com/");
    return null;
  }
  return null;
};

export default Home;
