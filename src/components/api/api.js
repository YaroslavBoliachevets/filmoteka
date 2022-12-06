import axios from 'axios';
import { format } from 'date-fns';
import { genres } from 'utils/genres';


axios.defaults.baseURL = 'https://api.themoviedb.org/';

export const base_url = 'https://image.tmdb.org/t/p/w500';

const KEY = '5692dca6012d3660a336300872bd664c';
 
export const imageNotFound =
'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';

 export const fetchTrendingMovies = async (page) => {
    const responce = await axios.get(
      `3/trending/all/day?api_key=${KEY}&page=${page}`
    );
    return responce;
  };

  export const fetchMovies = async (query, page=1) => {
	const responce = await axios.get(`3/search/movie?api_key=${KEY}&query=${query}&page=${page}`);
	
	return responce;
  };


  export const makePoster = ({ poster_path }) => {
		const posterLink = poster_path ? base_url + poster_path : imageNotFound;
		return posterLink;
	  };
	
	  export const makeMovieTitle = ({ name, title }) => {
		const movieTitle = name ? name : title ? title : 'no info';
		return movieTitle;
	  };
	
	  export const makeGenres = ({ genre_ids=[] }) => {
		const genresArray = [];
	
		for (let id of genre_ids) {
		  const index = genres.findIndex(genre => genre.id === id);
		  if (genres[index] === null || genres[index] === undefined) {
			continue;
		  }
	
		  if (genresArray.length === 2) {
			genresArray.push('Other');
			break;
		  }
		  genresArray.push(genres[index].name);
		}
	
		if (genresArray.length === 0) {return 'no genres info'}
		return Object.values(genresArray).join(', ');
	  };
	
	  export const makeReleaseDate = ({ release_date, first_air_date }) => {
		const releaseDate = release_date
		  ? format(new Date(release_date), 'y')
		  : first_air_date
		  ? format(new Date(first_air_date), 'y')
		  : 'no release date info';
		return releaseDate;
	  };

  export const renderGallery = (movies) => {
    return (<>
      {/* {movies &&
        movies.map(movie => (
          <Card key={movie.id}>
            <Img
              src={makePoster(movie)}
              alt={'poster' + makeMovieTitle(movie)}
            />

            <Title>{makeMovieTitle(movie)}</Title>
      
            <AdditionalInfo>
              {makeGenres(movie)} {''}| {makeReleaseDate(movie)}
            </AdditionalInfo>
          </Card>
        ))} */}
          </>
    )
  

  };