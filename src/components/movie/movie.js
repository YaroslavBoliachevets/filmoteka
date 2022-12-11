import { makeReleaseDate, makeGenres, makeMovieTitle, makePoster} from '../api/api';
import { Card, Img, Title, AdditionalInfo } from "./movie.styled";


function Movies({findMovies, setIsModalMovieOpen, setModalMovieId}) {

  const onCardClick = (id) => {
    setIsModalMovieOpen(true);
    setModalMovieId(id);
  }
  
	return (<>
	{findMovies &&
          findMovies.map(movie => (
            <Card key={movie.id} onClick={()=>{onCardClick(movie.id)}}>
              <Img
                src={makePoster(movie)}
                alt={'poster' + makeMovieTitle(movie)}
              />

              <Title>{makeMovieTitle(movie)}</Title>
			  
              <AdditionalInfo>
                {makeGenres(movie)} {''}| {makeReleaseDate(movie)}
              </AdditionalInfo>
            </Card>
          ))}
	</>)
};

export default Movies;