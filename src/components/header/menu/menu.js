import { BsFilm } from 'react-icons/bs';

import { MainMenu, Logo, LogoIcon, Nav, NavList, NavItem } from './menu.styled';

export function Menu() {
  return (
    <MainMenu>
      <Logo>
        <LogoIcon>
        <BsFilm />
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
