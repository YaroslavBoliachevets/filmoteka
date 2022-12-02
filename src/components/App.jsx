import Header from './header';
import { useState } from 'react';
import Gallery from './gallery';

export const App = () => {
  const [findMovies, setfindMovies] = useState([]);

  // const updatefindMovies = (userfindMovies) => {
  //   setfindMovies(userfindMovies);
  // }

  return (
    <>
      <Header updateMovies={setfindMovies} />
      <Gallery findMovies={findMovies} updateMovies={setfindMovies} />
    </>
  );
};
