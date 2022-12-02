import styled from "styled-components";

export const List = styled.ul`
display: flex;
justify-content:center;
flex-wrap:wrap;
list-style:none;
max-width:1000px;

margin:auto;
padding:0px;
padding-top:${p=>p.theme.space[6]}px;
padding-bottom:${p=>p.theme.space[6]}px;
gap:${p=>p.theme.space[6]}px;
`;

