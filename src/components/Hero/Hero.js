import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Carlos Correa<br />
          Fronted Developer
        </SectionTitle>
        <SectionText>
          Building amazing apps with best practices
        </SectionText>
        <Link href="#about">
          <Button>Learn More</Button>
        </Link>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;