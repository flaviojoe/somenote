import { styled } from "@mui/material";

export const MenuContainer = styled('div')`
    width: 250px;
    position: absolute;
    margin: 0 auto;
`;

export const ListaMenu = styled('ul')`
    width: 100%;
    padding: ${({theme}) => theme.spacing(16,0)};
    margin: 0 auto;
`;

export const Icone = styled('div')`
    padding: ${({theme}) => theme.spacing(5, 0, 0, 0)};
    height: ${({theme}) => theme.spacing(5)};
    margin-left: auto;
    margin-right: auto; 
    `;

export const MenuVazio = styled('h4')`
    text-align: center;
    padding: ${({theme}) => theme.spacing(0)};
`;