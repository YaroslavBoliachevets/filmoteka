import styled from 'styled-components';


export const WrapperContainer = styled.div`
padding-left:${p=>p.theme.space[6]}px;
padding-right:${p=>p.theme.space[6]}px;

  @media ${p=>p.theme.breakpoints.mobile} {
	padding-left:${p=>p.theme.space[4]}px;
	padding-right:${p=>p.theme.space[4]}px;
	}

	@media ${p=> p.theme.breakpoints.tablet} {
	  }

	  @media ${p=> p.theme.breakpoints.desktop} {
	  }
`;