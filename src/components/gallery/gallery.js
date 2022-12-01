import { useState, useEffect } from 'react';
import axios from 'axios';

import { WrapperContainer } from '../wrapper/wrapper.styled';
import { List, Card, Img, Title, AdditionalInfo } from './gallery.styled';
import { format } from 'date-fns';
import { genres } from 'utils/genres';

// key
// 5692dca6012d3660a336300872bd664c

export default function Gallery() {
  const [trandingMovies, setTrandingMovies] = useState([]);

  const [base_url] = useState('https://image.tmdb.org/t/p/w500');

  useEffect(() => {
    fetchMovies().then(({ data }) => {
      setTrandingMovies(data.results);
    });
  }, []);

  const imageNotFound =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';

  const fetchMovies = async () => {
    const responce = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=5692dca6012d3660a336300872bd664c'
    );
    return responce;
  };

  const makePoster = ({ poster_path }) => {
    const posterLink = poster_path ? base_url + poster_path : imageNotFound;
    return posterLink;
  };

  const makeMovieTitle = ({ name, title }) => {
    const movieTitle = name ? name : title ? title : 'no info';
    return movieTitle;
  };

  const makeGenres = ({ genre_ids }) => {
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

    return Object.values(genresArray).join(', ');
  };

  const makeReleaseDate = ({ release_date, first_air_date }) => {
    const releaseDate = release_date
      ? format(new Date(release_date), 'y')
      : first_air_date
      ? format(new Date(first_air_date), 'y')
      : 'no info';
    return releaseDate;
  };

  return (
    <WrapperContainer>
      <List>
        {trandingMovies &&
          trandingMovies.map(movie => (
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
          ))}
      </List>
    </WrapperContainer>
  );
}