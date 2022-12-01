import styled from "styled-components";

export const List = styled.ul`
display: flex;
flex-wrap:wrap;
list-style:none;
max-width:1000px;

margin:auto;
padding:0px;
padding-top:${p=>p.theme.space[6]}px;
padding-bottom:${p=>p.theme.space[6]}px;
gap:${p=>p.theme.space[6]}px;
`;

export const Card = styled.li`
max-width:275px;
border-radius: ${p => p.theme.radii.s};
cursor:pointer;

&: hover {
	box-shadow:${p=>p.theme.shadow.normal};
}
`;

export const Img = styled.img`
width: 274px;
border-radius: ${p => p.theme.radii.s};
`;

export const Title = styled.h3`
margin:10px 0;
font-family: Roboto;
font-size: ${p=>p.theme.fontSizes.s};
font-weight: ${p=>p.theme.fontWeights.bold};
text-align: left;
text-transform:uppercase;
flex-wrap:wrap;

`;

export const AdditionalInfo = styled.p`
margin:0;

margin:10px 0;
font-family: Roboto;
font-size: ${p=>p.theme.fontSizes.s};
font-weight: ${p=>p.theme.fontWeights.bold};
text-align: left;

color:${p=> p.theme.colors.accent};
`;