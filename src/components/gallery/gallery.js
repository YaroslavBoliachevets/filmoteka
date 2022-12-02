import {  useEffect } from 'react';

import { WrapperContainer } from '../wrapper/wrapper.styled';
import Movies  from 'components/movie';
import { List, } from './gallery.styled';

import {fetchTrendingMovies,} from '../api/api';

export default function Gallery({findMovies, updateMovies}) {

  useEffect(() => {
    fetchTrendingMovies().then(({ data }) => {
      updateMovies(data.results);
    });
  }, []);

  
  return (
    <WrapperContainer>
      <List>
      <Movies findMovies={findMovies}/>
      </List>
    </WrapperContainer>
  );
}