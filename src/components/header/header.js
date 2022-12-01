import { WrapperContainer } from '../wrapper/wrapper.styled';
import {Menu} from './menu/menu';
import {Searchbar} from './searchbar/searchbar';
import {
  HeaderSection,
} from './header.styled';

function Header() {
  return (
    <HeaderSection>
      <WrapperContainer>
        <Menu/>
        <Searchbar/>
      </WrapperContainer>
    </HeaderSection>
  );
};

export default Header;
