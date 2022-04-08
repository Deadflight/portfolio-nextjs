import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  overflow: hidden;
  border-radius: 0.625rem 0.625rem 0 0;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(33.5rem,1fr));
place-items: center;
padding: 0.5rem 0.5rem;
gap: 2.5rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
`
export const BlogCard = styled.div`
  border-radius: 0.625rem;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 100%;
  height:100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  padding-top: 1rem;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 0.06rem;
  color: #9cc9e3;
  padding: 2rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 3.125rem;
  height: 0.188rem;
  margin: 1.25 auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 10.625rem;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 0.813rem;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 3.125rem;
  padding-top: 2rem;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 1.5rem;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:2rem
  }
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 0.938rem;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`
