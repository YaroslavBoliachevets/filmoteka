import {  useEffect } from 'react';

import { WrapperContainer } from '../wrapper/wrapper.styled';
import Movies  from 'components/movie';
import { List, } from './gallery.styled';



export default function Gallery({findMovies, updateMovies, currentPage}) {



  
  return (
    <WrapperContainer>
      <List>
      <Movies findMovies={findMovies}/>
      </List>
    </WrapperContainer>
  );
}