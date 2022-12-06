import { WrapperContainer } from '../wrapper/wrapper.styled';
import {Menu} from './menu/menu';
import {Searchbar} from './searchbar/searchbar';
import {
  HeaderSection,
} from './header.styled';

function Header({updateMovies, updateTotalPages, setCurrentPage}) {
  return (
    <HeaderSection>
      <WrapperContainer>
        <Menu/>
        <Searchbar updateMovies={updateMovies} updateTotalPages={updateTotalPages} setCurrentPage={setCurrentPage}/>
      </WrapperContainer>
    </HeaderSection>
  );
};

export default Header;
