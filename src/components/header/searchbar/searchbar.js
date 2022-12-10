import { BsSearch } from 'react-icons/bs';

import { useState, } from 'react';

import {
  SearcherIcon,
  Searcher,
  Wrapper,
  SearchForm,
  InputQuery,
  Button,
  Error,
} from './searchbar.styled';

export function Searchbar({ setQuery, setCurrentPage, error }) {
  const [searchbarQuery, setSearchbarQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (isQueryEmpty(searchbarQuery)) return;

    setCurrentPage(1);
    setQuery(searchbarQuery?.trim().toLocaleLowerCase());
    setSearchbarQuery('');
  };

  const onChange = e => {
    setSearchbarQuery(e.target.value);
  };

  const isQueryEmpty = query => {
    if (query.trim() === '') return true;
    return false;
  };

  return (
    <Searcher>
      <Wrapper>
        <SearchForm onSubmit={onSubmit}>
          <InputQuery
            type="text"
            placeholder="Movie search"
            onChange={onChange}
            value={searchbarQuery}
          ></InputQuery>
          <Button type="submit">
            <SearcherIcon>
              <BsSearch />
            </SearcherIcon>
          </Button>
        </SearchForm>
      </Wrapper>
      {error && <Error>Search result not successful. Enter the correct movie name.</Error>}
    </Searcher>
  );
}
