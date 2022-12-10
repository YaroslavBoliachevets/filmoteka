import { WrapperContainer } from '../wrapper/wrapper.styled';
import {Menu} from './menu/menu';
import {Searchbar} from './searchbar/searchbar';
import {
  HeaderSection,
} from './header.styled';

function Header({setQuery, setCurrentPage, movies, error}) {
  return (
    <HeaderSection>
      <WrapperContainer>
        <Menu/>
        <Searchbar setQuery={setQuery} setCurrentPage={setCurrentPage} movies={movies} error={error}/>
      </WrapperContainer>    
      
    </HeaderSection>
  );
};

export default Header;
