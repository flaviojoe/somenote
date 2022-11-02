import { Box } from "@mui/material";
import { NextPage } from "next"
import Tabela from "../src/components/tabela/tabela";
import { TituloPage } from "../src/components/tabela/tabela.style";
import { useAulas } from "../src/hooks/useAulas";

const Matricula: NextPage = () => {
    const {
        listaAula,
        checked,
        setChecked,
    } = useAulas();

    return (
        <div>
            <Box sx={{ px:7, mx:7 }}>
                <TituloPage>Alunos matriculados</TituloPage>
                <Tabela 
                    aulas={listaAula}
                    controlChk={(aula) => setChecked(aula)}
                ></Tabela>
                <br />
            </Box>
        </div>
    )
}

export default Matricula;