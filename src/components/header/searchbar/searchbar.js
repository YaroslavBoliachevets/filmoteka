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

export function Searchbar({ updateMovies, updateTotalPages, setCurrentPage }) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    setCurrentPage(1);
    fetchMovies(query).then(({ data }) => {
      // console.log( 'data.results', data, data.total_pages);
      if (isFindMovie(data.results)) {
        setError(false);
        updateMovies(data.results);
        updateTotalPages(data.total_pages);
      } else setError(true);
      // console.log(error);
    });

    const isFindMovie = movies => {
      if (movies.length !== 0) {
        return true;
      }
      return false;
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
