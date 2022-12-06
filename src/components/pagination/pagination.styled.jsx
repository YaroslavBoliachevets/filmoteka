import styled from "styled-components";

export const List = styled.ul`
display:flex;
list-style:none;
gap:15px;
justify-content:center;
`;

export const Button = styled.button`
padding:15px 20px;
border-radius:5px;
border:0;
cursor:pointer;

font-family: Roboto;
font-size: ${p=>p.theme.fontSizes.s};
font-weight: ${p=>p.theme.fontWeights.bold};
text-align: left;


 &: hover {
	border-color:${p=>p.theme.colors.accent};
	box-shadow:${p=>p.theme.shadow.normal};
}


`;

export const CurrentButton =styled.button`
padding:15px 20px;
border-radius:5px;
border:0;
cursor:pointer;

font-family: Roboto;
font-size: ${p=>p.theme.fontSizes.s};
font-weight: ${p=>p.theme.fontWeights.bold};
text-align: left;


color:${p=>p.theme.colors.white};
background-color:${p=>p.theme.colors.accent};
`;