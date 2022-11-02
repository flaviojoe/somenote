import { Button } from "@mui/material"
import { Professor } from "../../@types/professor"
import { FormataService } from "../../services/FormataService"
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from "./lista.style"
interface ListaProps {
    professores: Professor[],
    onSelectProf: (professor: Professor) => void
}

const Lista = (props: ListaProps) => {
    return (
        <div>
            {props.professores.length > 0 ? (
                <ListaStyled>
                    {props.professores.map(professor => (
                        <ItemLista key={professor.id}>
                            <Foto src={professor.picture}></Foto>
                            <Informacoes>
                                <Nome>{professor.name}</Nome>
                                <Valor>{FormataService.valMonet(professor.hour_value)}</Valor>
                                <Descricao>{FormataService.limiteText(professor.description, 82)}</Descricao>
                                <Button 
                                    onClick={() => props.onSelectProf(professor)}
                                    sx={{ width: '70%' }}>Marcar Aula com {professor.name.split(' ',1)[0]}
                                </Button>
                            </Informacoes>
                        </ItemLista>
                    ))}
                </ListaStyled>
            ) : (
                <ListaVazia>Dados não encontrados</ListaVazia>
            )}
        </div>
    )
}

export default Lista;