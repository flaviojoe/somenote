import { Aula } from "../../@types/aula"
import { ListaVazia } from "../lista/lista.style";
import { ColunaTable, HeadTable, LinhaTable, PrinTable, TableConteiner } from "./tabela.style"

interface TabelaProps {
    aulas: Aula[],
}

const Tabela = (props: TabelaProps) => {
    return(
        <div>
            {props.aulas.length > 0 ? (
                <TableConteiner>
                    <PrinTable>
                        <HeadTable>NOME</HeadTable>
                        <HeadTable>E-MAIL</HeadTable>
                        <HeadTable>PROFESSOR(A)</HeadTable>
                        {props.aulas.map(aula => (
                            <LinhaTable key={aula.id}>
                                <ColunaTable>{aula.name}</ColunaTable>
                                <ColunaTable>{aula.email}</ColunaTable>
                                <ColunaTable>{aula.teacher_name}</ColunaTable>
                            </LinhaTable>
                        ))}
                    </PrinTable>
                </TableConteiner>
            ) : (
                <ListaVazia>Dados não encontrados</ListaVazia>
            )}
        </div>
    )
}

export default Tabela;