import { Box, Button } from "@mui/material";
import { NextPage } from "next"
import { ContainerMain } from "../src/components/main/main.style";
import Titulo from "../src/components/outros/titulo";
import Tabela from "../src/components/tabela/tabela";
import { useAulas } from "../src/hooks/useAulas";

const Matricula: NextPage = () => {
    const {
        listaAula,
        checked,
        setChecked,
        selId,
        setSelId
    } = useAulas();

    return (
        <div>
            <ContainerMain >
                <Titulo
                    opcao={1}
                    texto="Alunos matriculados"
                ></Titulo>
                <Button 
                    sx={{fontSize:12, mb:1, pt:1, pb:1, justifyContent:"flex-start"}}
                    onClick={() => console.log('foi', selId)}
                >Excluir marcados</Button>
                <Tabela 
                    aulas={listaAula}
                    controlChk={(aula) => setChecked(aula)}
                ></Tabela>
                <br />
            </ContainerMain>
        </div>
    )
}

export default Matricula;