import { styled } from "@mui/system";

export const TableConteiner = styled('div')`
    width: 100%;
`;

export const PrinTable = styled('table')`
    border: 1px solid ${({theme}) => theme.palette.secondary.main};
    border-collapse: collapse;
    padding: 4px 22px 4px 22px;
`;

export const HeadTable = styled('th')`
    border: 1px solid #555;
    border-collapse: collapse;
    padding: 8px 22px 8px 22px;
    background-color: #ccc;
`;

export const LinhaTable = styled('tr')`
    border: 1px solid #555;
    border-collapse: collapse;
    padding: 4px 22px 4px 22px;
    `;

export const ColunaTable = styled('td')`
    border: 1px solid #555;
    border-collapse: collapse;
    padding: 4px 22px 4px 22px;
`;

export const GrupoHead = styled('thead')`

`;

export const GrupoBody = styled('tbody')`

`;

export const GrupoFoot = styled('tfoot')`

`;
