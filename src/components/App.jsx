import Header from './header';
import { useState, useEffect } from 'react';
import Gallery from './gallery';
import Pagination from './pagination/pagination';
import Loader from './loader';
import MovieInfo from './movieInfo';

import { fetchTrendingMovies, fetchMovies, fetchMovieDetailInfo } from './api/api';

export const App = () => {
  const [findMovies, setfindMovies] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [isModalMovieOpen, setIsModalMovieOpen] = useState(false);
  const [modalMovieId, setModalMovieId] = useState(null);
  const [modalDetailMovieInfo, setModalDetailMovieInfo] = useState({});
  // const [watchedMovies, setWatchedMovies] = useState([]);


  useEffect(() => {
    handleUp();
    setLoader(true);
    if (query === '') {
      fetchTrendingMovies(currentPage).then(({ data }) => {
        setLoader(false);
        setfindMovies(data.results);
        setTotalPages(data.total_pages);
      });
    }

    if (query !== '') {
      fetchMovies(query, currentPage)
        .then(({ data }) => {
          if (isGetMovies(data)) {
            setLoader(false);
            setError(false);
            setfindMovies(data.results);
            setTotalPages(data.total_pages);
          } else {
            setError(true);
            setQuery('');
          }
        })
        .catch(() => {
          setError(true);
          setQuery('');
        });
    }

    if (currentPage > 1) {
      setError(false);
    }
  }, [query, currentPage]);

  useEffect(()=>{
    if (modalMovieId === null) return;
    fetchMovieDetailInfo(modalMovieId).then(({data}) => {
      console.log("data", data);
      setModalDetailMovieInfo(data)});

  }, [modalMovieId])

  const isGetMovies = data => {
    if (data?.results.length > 0) {
      return true;
    }
    return false;
  };

  const handleUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header
        setQuery={setQuery}
        setCurrentPage={setCurrentPage}
        movies={findMovies}
        error={error}
      />
      <Loader loadStatus={loader} />
      <Gallery setIsModalMovieOpen={setIsModalMovieOpen}
      setModalMovieId={setModalMovieId} findMovies={findMovies} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {isModalMovieOpen && <MovieInfo setIsModalMovieOpen={setIsModalMovieOpen}
      modalMovieId={modalMovieId} 
      movie={modalDetailMovieInfo}/>}
    </>
  );
};
