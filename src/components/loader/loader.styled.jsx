
import styled from "styled-components";

export const LoaderWrapper = styled.div`
	display:flex;
	justify-content:center;
	margin: 24px auto;

`;

export const LoadCircle = styled.div`

border: 10px solid #f3f3f3; /* Light grey */
border-top: 10px solid #3498db; /* Blue */
border-radius: 50%;
width: ${p=>p.theme.iconSizes.xl};
height: ${p=>p.theme.iconSizes.xl};
animation: spin 2s linear infinite;

@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}
`;