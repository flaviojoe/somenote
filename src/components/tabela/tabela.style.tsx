import { styled } from "@mui/system";

export const TableConteiner = styled('div')`
    width: 100%;
    height: 600px;
    margin: ${({theme}) => theme.spacing(8,0,0,20)};
    padding: ${({theme}) => theme.spacing(2,2,2,2)};
`;

export const PrinTable = styled('table')`
    border: 1px solid ${({theme}) => theme.palette.secondary.main};
    border-collapse: collapse;
    padding: 10px 30px 10px 30px;
`;

export const HeadTable = styled('th')`
    border: 1px solid ${({theme}) => theme.palette.secondary.main};
    border-collapse: collapse;
    padding: 10px 30px 10px 30px;
    background-color: #ccc;
`;

export const LinhaTable = styled('tr')`
    border: 1px solid ${({theme}) => theme.palette.secondary.main};
    border-collapse: collapse;
    padding: 10px 30px 10px 30px;
    `;

export const ColunaTable = styled('td')`
    border: 1px solid ${({theme}) => theme.palette.secondary.main};
    border-collapse: collapse;
    padding: 10px 30px 10px 30px;
`;
