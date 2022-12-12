import styled from 'styled-components';

export const ModalBackground = styled.div`
  height: 100%;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  justify-content:center;
  border-radius: 5px;
  background-color: ${p => p.theme.colors.white};

  padding: 10px 16px 40px 16px;
  width: 800px;

  @media (min-width: 768px) {
    width: 700px;
    display: flex;

  }

  @media (min-width: 1279px) {
    width: 800px;
  }

  @media (max-width: 767px) {
    width: 280px;
    height: 60%;
    overflow-y: scroll;
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: 375px;
  height: 480px;
  border-radius: 5px;

  @media (max-width: 1279px) {
    width: 260px;
    height: 370px;
  }

  @media (max-width: 767px) {
    width: 240px;
    height: 360px;

    display: block;
    margin: 0 auto;
  }
`;

export const MovieInformationWrapper = styled.div`
  max-width: 390px;
  margin-left: 16px;

  @media (max-width: 1279px) {
    margin-left: 70px;
  }
  @media (max-width: 767px) {
    margin-left: 0;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-family: Roboto;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.fontSizes.l};
  text-align: left;

  margin: 20px 0;

  @media (max-width: 1279px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const CharacteristicLine = styled.tr``;

export const Characteristic = styled.td`
  color: ${p => p.theme.colors.secondaryTextColor};
  text-transform: capitalize;

  font-family: Roboto;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-align: left;
`;

export const CharacteristicValue = styled.td`
  padding: 4px 0;
  padding-left: 80px;

  font-family: Roboto;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-align: left;

  @media (max-width: 1279px) {
    padding-left: 40px;
  }
`;

export const AdditionalInfo = styled.span``;

export const AboutTitle = styled.h3`
  font-family: Roboto;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-align: left;
  text-transform: uppercase;
`;

export const AboutText = styled.p`
  width: 390px;
  font-family: Roboto;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-align: left;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 1279px) {
    width: 260px;
  }

  @media (max-width: 767px) {
    width: 240px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const CloseBtn = styled.button`
  position: sticky;
  cursor: pointer;
  top: 16px;
  right: 16px;
  padding: 10px;

  border: 0;
  border-radius: 100%;
  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }

  @media (min-width: 768px) {
    top: 10px;
    position: absolute;
  }

  @media (max-width: 767px) {
    top: 0px;
    position: sticky;
    margin-left: 260px;
  }
`;

export const ActionBtn = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  height: 44px;

  border: 1px solid black;
  border-radius: 5px;

  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;

  &:hover {
    border: 0;
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }

  
  @media (min-width: 768px) {
    width: 125px;
  }

  @media (max-width: 767px) {
    width: 110px;
  }


`;
