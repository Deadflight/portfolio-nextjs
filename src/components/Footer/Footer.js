import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0424-8880741">0424-8880741</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:correamillancarlos@gmail.com">
            correamillancarlos@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Dream Always</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Deadflight" target="_blank" rel="noreferrer">
            <AiFillGithub size="2.5em" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/deadflight/" target="_blank" rel="noreferrer">
            <AiFillLinkedin size="2.5em" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/Carlos-Correa-105811761669254" target="_blank" rel="noreferrer">
            <AiFillFacebook size="2.5em"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
