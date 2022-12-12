import { useEffect } from 'react';
import {
  ModalBackground,
  ModalContent,
  BtnWrapper,
  Img,
  CloseBtn,
  AboutTitle,
  AboutText,
  Title,
  CharacteristicLine,
  Characteristic,
  CharacteristicValue,
  MovieInformationWrapper,
  ActionBtn,
} from './movieInfo.styled';

import {
  makePoster,
  makeMovieTitle,
  makeAllGenresList,
} from '../api/api';

function MovieInfo({ setIsModalMovieOpen, movie }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const onClickBtnClose = () => {
    setIsModalMovieOpen(false);
  };

  const { vote_average, vote_count, popularity, original_title, overview } =
    movie;

  return (
    <>
      <ModalBackground onClick={() => setIsModalMovieOpen(false)}>
        <ModalContent onClick={e => e.stopPropagation()}>
        <CloseBtn
            onClick={() => {
              onClickBtnClose();
            }}
          >
            X
          </CloseBtn>
          <Img src={makePoster(movie)} alt="#" />


          <MovieInformationWrapper>
            <Title>{makeMovieTitle(movie)}</Title>
            <table>
              <tbody>
                <CharacteristicLine>
                  <Characteristic>vote / votes </Characteristic>
                  <CharacteristicValue>
                    {' '}
                    {vote_average?.toFixed(1)}/{vote_count}
                  </CharacteristicValue>
                </CharacteristicLine>
                <CharacteristicLine>
                  <Characteristic>popularity</Characteristic>
                  <CharacteristicValue>
                    {popularity?.toFixed(1)}
                  </CharacteristicValue>
                </CharacteristicLine>
                <CharacteristicLine>
                  <Characteristic>original title</Characteristic>
                  <CharacteristicValue>{original_title}</CharacteristicValue>
                </CharacteristicLine>
                <CharacteristicLine>
                  <Characteristic>genre</Characteristic>
                  <CharacteristicValue>
                    {makeAllGenresList(movie)}
                  </CharacteristicValue>
                </CharacteristicLine>
              </tbody>
            </table>
            <AboutTitle>About</AboutTitle>
            <AboutText>{overview}</AboutText>

            <BtnWrapper>
              <ActionBtn>Add to watched</ActionBtn>
              <ActionBtn>add to queue</ActionBtn>
            </BtnWrapper>
          </MovieInformationWrapper>
        </ModalContent>
      </ModalBackground>
    </>
  );
}

export default MovieInfo;
