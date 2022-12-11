import { WrapperContainer } from '../wrapper/wrapper.styled';
import Movies  from 'components/movie';
import { List, } from './gallery.styled';



export default function Gallery({findMovies, setIsModalMovieOpen, setModalMovieId}) {
  return (
    <WrapperContainer>
      <List>
      <Movies findMovies={findMovies} setIsModalMovieOpen={setIsModalMovieOpen} setModalMovieId={setModalMovieId}/>
      </List>
    </WrapperContainer>
  );
}