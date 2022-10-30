import { Box } from "@mui/material";
import { NextPage } from "next"
import Tabela from "../src/components/tabela/tabela";
import { useAulas } from "../src/hooks/useAulas";

const Matricula: NextPage = () => {
    const {listaAula} = useAulas();

    return (
        <div>
            <Box>
                <Tabela aulas={listaAula}></Tabela>
            </Box>
        </div>
    )
}

export default Matricula;