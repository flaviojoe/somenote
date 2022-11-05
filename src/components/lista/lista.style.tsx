import { styled } from "@mui/material";

export const ListaStyled = styled('ul')`
    padding: ${({theme}) => theme.spacing(10, 2)};
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({theme}) => theme.spacing(9)};
    
    ${({theme}) => theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
        gap: ${({theme}) => theme.spacing(8)};
    };
    
    `;

export const ItemLista = styled('li')`
    list-style: none;
    `;

export const Foto = styled('img')`
    width: 100%;
    `;

export const ListaVazia = styled('h2')`
    text-align: center;
    padding: ${({theme}) => theme.spacing(20)};
`;


export const Informacoes = styled('div')`
    padding: 2;
`;


export const Nome = styled('h3')`
    margin: ${({theme}) => theme.spacing(2, 0, 0, 0)};
`;


export const Valor = styled('p')`
    margin-top: 10px;
    font-weight: bold;
    color: ${(props) => props.theme.palette.primary.main}
`;


export const Descricao = styled('p')`
    word-break: break-word;
`;