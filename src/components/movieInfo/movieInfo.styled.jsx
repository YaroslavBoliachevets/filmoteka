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
  border-radius:5px;
  background-color: ${p => p.theme.colors.white};
  display: flex;
  padding: 40px 16px;
  width: 800px;
`;

export const Img = styled.img`
  width: 375px;
  height: 480px;
  border-radius: 5px;
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
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const CloseBtn = styled.button`
  position: absolute;
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
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-family: Roboto;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.fontSizes.l};
  text-align: left;
`;

export const CharacteristicLine = styled.tr`
  padding: 10px;
`;

export const Characteristic = styled.td`
  color: ${p => p.theme.colors.secondaryTextColor};
  text-transform: capitalize;

  font-family: Roboto;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-align: left;
`;

export const CharacteristicValue = styled.td`
  padding: 5px 0;
  padding-left: 80px;

  font-family: Roboto;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-align: left;
`;

export const MovieInformationWrapper = styled.div`
  max-width: 390px;
  margin-left: 16px;
`;

export const ActionBtn = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  padding: 14px;
  border: 1px solid black;
  border-radius: 5px;
  &:hover {
    border: 0;
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
`;
