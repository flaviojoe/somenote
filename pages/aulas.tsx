import { Box } from "@mui/material";
import { NextPage } from "next"
import Titulo from "../src/components/outros/titulo";
import Tabela from "../src/components/tabela/tabela";
import { useAulas } from "../src/hooks/useAulas";

const Matricula: NextPage = () => {
    const {
        listaAula,
        checked,
        setChecked,
    } = useAulas();

    return (
        <div>
            <Box sx={{ px:2, mx:2 }}>
                <Titulo
                    opcao={1}
                    texto="Alunos matriculados"
                ></Titulo>
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