import { BsFilm } from 'react-icons/bs';

import { MainMenu, Logo, LogoIcon, LogoName, Nav, NavList, NavItem } from './menu.styled';

export function Menu() {
  return (
    <MainMenu>
      <Logo>
        <LogoIcon>
        <BsFilm />{' '} <LogoName>Filmoteka</LogoName>
        </LogoIcon>
      </Logo>
      <Nav>
        <NavList>
          <NavItem>home</NavItem>
          <NavItem>my library</NavItem>
        </NavList>
      </Nav>
    </MainMenu>
  );
}
