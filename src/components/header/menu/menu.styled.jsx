import styled from 'styled-components';


export const MainMenu = styled.div`
  display: flex;
  margin-bottom: ${p => p.theme.space[6]}px;
`;

export const Logo = styled.a`
  cursor: pointer;
  margin-block: ${p => p.theme.space[10]};

`;

export const LogoIcon = styled.span`
  padding: 5px;

  font-family: 'Roboto';
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.white};

  & :hover {
    color: ${p => p.theme.colors.accent};
    transition: ${p => p.theme.transition.normal};

`;

export const LogoName = styled.span`
font-family: Roboto;
font-size: ${p=>p.theme.fontSizes.l};
font-weight: ${p=>p.theme.fontWeights.bold};

text-align: center;
color:${p=>p.theme.colors.white};


`;

export const Nav = styled.nav`
  display: block;
  margin-left: auto;
`;

export const NavList = styled.ul`
  display: flex;
  text-transform: capitalize;
  list-style: none;
  gap: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[0]};
`;

export const NavItem = styled.a`
  cursor: pointer;

  font-family: Roboto;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-align: center;
  color: ${p => p.theme.colors.white};

  &:hover,
  :focus {
    color: ${p => p.theme.colors.accent};
    box-shadow: ${p => p.theme.shadow.light};
    transition: ${p => p.theme.transition.normal};
  }
`;