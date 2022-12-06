import Header from './header';
import { useState, useEffect } from 'react';
import Gallery from './gallery';
import Pagination from './pagination/pagination';

import { fetchTrendingMovies } from './api/api';

export const App = () => {
  const [findMovies, setfindMovies] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');

  // useEffect(()=>{console.log(totalPages)},);

  useEffect(() => {
    fetchTrendingMovies(currentPage).then(({ data }) => {
      setfindMovies(data.results);
      setTotalPages(data.total_pages);
      // setCurrentPage(1);
    });
  }, []);

  useEffect(() => {
    fetchTrendingMovies(currentPage).then(({ data }) => {
      setfindMovies(data.results);
      setTotalPages(data.total_pages);
      // setCurrentPage(1);
    });
  }, [query]);

  // console.log(totalPages);
  // const updatefindMovies = (userfindMovies) => {
    
  //   setfindMovies(userfindMovies);
  // }

  return (
    <>
      <Header
        updateMovies={setfindMovies}
        updateTotalPages={setTotalPages}
        setCurrentPage={setCurrentPage}
      />
      <Gallery
        findMovies={findMovies}
        updateMovies={setfindMovies}
        currentPage={currentPage}
      />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        updateCurrentPage={setCurrentPage}
      />
    </>
  );
};
