import styled from "styled-components";

export const List = styled.ul`
display: flex;
justify-content:center;
flex-wrap:wrap;
list-style:none;
max-width:1000px;

margin: 24px auto;
padding:0px;

gap:${p=>p.theme.space[6]}px;
`;

