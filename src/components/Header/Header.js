import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="2.5em" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Deadflight" target="_blank" rel="noreferrer">
        <AiFillGithub size="2em" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/carloscorreamillan" target="_blank" rel="noreferrer">
        <AiFillLinkedin size="2em" />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/Carlos-Correa-105811761669254" target="_blank" rel="noreferrer">
        <AiFillFacebook size="2em"/>
      </SocialIcons>
      <SocialIcons href="https://twitter.com/Deadfligth" target="_blank" rel="noreferrer">
        <AiFillTwitterCircle size="2em"/>
      </SocialIcons>
    </Div3>
    </Container>
);

export default Header;
