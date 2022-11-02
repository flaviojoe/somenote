import { Box } from "@mui/material";
import { NextPage } from "next"
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
            <Box sx={{ px:8 }}>
                <Tabela 
                    aulas={listaAula}
                    controlChk={(aula) => setChecked(aula)}
                ></Tabela>
            </Box>
        </div>
    )
}

export default Matricula;