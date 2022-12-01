import { BsSearch } from 'react-icons/bs';

import {
	SearcherIcon,
	Searcher,
	SearchForm,
	InputQuery,
	Button,
  } from './searchbar.styled';

export function Searchbar () {
	const onSubmit = () => {};
	return (
		<Searcher>
          <SearchForm onSubmit={onSubmit}>
            <InputQuery type="text" placeholder="Movie search"></InputQuery>
            <Button type="submit">
              <SearcherIcon>
                <BsSearch />
              </SearcherIcon>
            </Button>
          </SearchForm>
        </Searcher>
	)
};
