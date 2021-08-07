import React from 'react';
import { DiCss3, DiFirebase, DiGit, DiGithub, DiHtml5, DiJavascript, DiReact, DiSass, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the Frontend development world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="2.5em" />
        </picture>
        <ListContainer>
          <ListTitle>React</ListTitle>
          {/*<ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>*/}
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGit size="2.5em" />
        </picture>
        <ListContainer>
          <ListTitle>Git</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiSass size="2.5em" />
        </picture>
        <ListContainer>
          <ListTitle>SASS</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiHtml5 size="2.5em" />
        </picture>
        <ListContainer>
          <ListTitle>HTML5</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCss3 size="2.5em" />
        </picture>
        <ListContainer>
          <ListTitle>CSS3</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJavascript size="2.5em" />
        </picture>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
