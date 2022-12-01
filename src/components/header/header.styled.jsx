import styled from 'styled-components';
import headerMob from '../../images/header/headerMob.jpg';
import headerTab from '../../images/header/headerTab.jpg';
import headerDesk from '../../images/header/headerDesk.jpg';

export const HeaderSection = styled.section`
  padding-top: 45px;
  padding-bottom: 80px;
  background-size: cover;

  @media screen and ${p => p.theme.breakpoints.desktop} {
    background-image: url(${headerDesk});
  }

  @media screen and ${p => p.theme.breakpoints.tablet} {
    background-image: url(${headerTab});
  }

  @media screen and ${p => p.theme.breakpoints.mobile} {
    background-image: url(${headerMob});
  } ;
`;



