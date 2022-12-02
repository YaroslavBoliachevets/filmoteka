import { BsSearch } from 'react-icons/bs';

import { useState } from 'react';

import {
  SearcherIcon,
  Searcher,
  Wrapper,
  SearchForm,
  InputQuery,
  Button,
  Error,
} from './searchbar.styled';
import { fetchMovies } from '../../api/api';

export function Searchbar({ updateMovies }) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = e => {
    e.preventDefault();

    fetchMovies(query).then(({ data }) => {
      console.log( 'data.results', data);
      if (isFindMovie(data.results)) {
        setError(false);
        updateMovies(data.results);
      } else setError(true);
      console.log(error);
    });

    const isFindMovie = movies => {
      if (movies.length !== 0) {
        return true;
        console.log('что-то есть');
      }
      return false;
      console.log('ничего нет');
    };
  };
  const onChange = e => {
    setQuery(e.target.value);
  };
  return (
    <Searcher>
      <Wrapper>
        <SearchForm onSubmit={onSubmit}>
          <InputQuery
            type="text"
            placeholder="Movie search"
            onChange={onChange}
          ></InputQuery>
          <Button type="submit">
            <SearcherIcon>
              <BsSearch />
            </SearcherIcon>
          </Button>
        </SearchForm>
        {error && <Error>Enter the correct movie name. </Error>}
      </Wrapper>
    </Searcher>
  );
}
