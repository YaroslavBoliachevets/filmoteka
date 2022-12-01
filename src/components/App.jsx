import Header from './header';
import Movie from './movie';
import {Menu} from './header/menu/menu';
// import {WrapperContainer} from './wrapper/wrapper.styled'

export const App = () => {
  return (
    <>
      <Header />
      <Menu/>
      <Movie />
    </>
  );
};
