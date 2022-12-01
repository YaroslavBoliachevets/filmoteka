import styled from 'styled-components';

export const Searcher = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchForm = styled.form`
  display: flex;
  width: ${p => p.theme.sizes.all};
  max-width: ${p => p.theme.sizes.m};
`;

export const InputQuery = styled.input`
  background-color:unset;
  color:${p => p.theme.colors.white};
  padding: ${p=>p.theme.space[2]}px;
  padding-left: ${p=>p.theme.space[3]}px;
  border: ${p=>p.theme.space[0]};
  border-bottom: 1px solid  ${p => p.theme.colors.white};
  outline: none;
  width: ${p => p.theme.sizes.all};

  &:focus {
    border-bottom: 1px solid ${p => p.theme.colors.accent};
    box-shadow: ${p => p.theme.shadow.light};
    transition: ${p => p.theme.transition.normal};
  };

  ::placeholder { 
    opacity:1;
    color: ${p => p.theme.colors.white};
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: unset;
  border: ${p=>p.theme.space[0]};
  border-bottom: 1px solid ${p=>p.theme.colors.white};
  &: hover {
	border-color:${p=>p.theme.colors.accent};
	box-shadow:${p=>p.theme.shadow.light};
	transition:${p=>p.theme.transition.normal};
  }
`;

export const SearcherIcon = styled.span`
  padding: 5px;

  font-family: 'Roboto';
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.white};
  &:hover {
    color: ${p => p.theme.colors.accent};
    transition: ${p => p.theme.transition.normal};
  }
`;
