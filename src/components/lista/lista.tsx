import { Button } from "@mui/material"
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor } from "./lista.style"

const Lista = () => {
    return (
        <ListaStyled>
            <ItemLista>
                <Foto src="https://github.com/elton-fonseca.png"></Foto>
                <Informacoes>
                    <Nome>Elton Fonseca</Nome>
                    <Valor>R$ 100,00</Valor>
                    <Descricao>Aulas de Programação, pode te ensinar sobre React e TypeScript</Descricao>
                    <Button sx={{ width: '80%' }}>Marcar Aula com Elton</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://github.com/dilmoraes.png"></Foto>
                <Informacoes>
                    <Nome>Diego Laudelino</Nome>
                    <Valor>R$ 110,00</Valor>
                    <Descricao>Aulas de Programação, pode te ensinar sobre Quasar e Flutter</Descricao>
                    <Button sx={{ width: '80%' }}>Marcar Aula com Diego</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://github.com/flaviojoe.png"></Foto>
                <Informacoes>
                    <Nome>Flávio Moraes</Nome>
                    <Valor>R$ 120,00</Valor>
                    <Descricao>Aulas de Banco de Dados, pode te ensinar sobre SQL, NoSQL, etc.</Descricao>
                    <Button sx={{ width: '80%' }}>Marcar Aula com Flávio</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://github.com/elton-fonseca.png"></Foto>
                <Informacoes>
                    <Nome>Elton Fonseca</Nome>
                    <Valor>R$ 100,00</Valor>
                    <Descricao>Aulas de Programação, pode te ensinar sobre React e TypeScript</Descricao>
                    <Button sx={{ width: '80%' }}>Marcar Aula com Elton</Button>
                </Informacoes>
            </ItemLista>
        </ListaStyled>
    )
}

export default Lista