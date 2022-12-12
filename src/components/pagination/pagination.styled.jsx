import styled from "styled-components";

export const List = styled.ul`
display:flex;
list-style:none;
justify-content:center;
padding:0;

gap:15px;
@media screen and (max-width:450px) {
	gap:7px;
}

`;

export const Button = styled.button`
padding:15px 20px;

@media screen and (max-width:419px) {
	padding:10px 13px;
}
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
@media screen and (max-width:419px) {
	padding:10px 13px;
}

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