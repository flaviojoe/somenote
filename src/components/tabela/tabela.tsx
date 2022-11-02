import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { Aula } from "../../@types/aula"
import { ListaVazia } from "../lista/lista.style";
import { ColunaTable, GrupoBody, GrupoHead, HeadTable, LinhaTable, PrinTable, TableConteiner } from "./tabela.style"

interface TabelaProps {
    aulas: Aula[],
    controlChk:(aula:Aula) => void
}

const Tabela = (props: TabelaProps) => {
    return(
        <div>
            {props.aulas.length > 0 ? (
                <TableConteiner>
                    <PrinTable>
                        <GrupoHead>
                            <LinhaTable>
                                <HeadTable>
                                    {/* <FormControlLabel
                                        label="SELECIONAR"
                                        control={
                                        <Checkbox
                                            checked={false}
                                            indeterminate={false}
                                            onChange={(e) => e()}
                                        />
                                        }
                                    /> */}
                                    SELEÇÃO
                                </HeadTable>
                                <HeadTable>NOME</HeadTable>
                                <HeadTable>E-MAIL</HeadTable>
                                <HeadTable>PROFESSOR(A)</HeadTable>
                            </LinhaTable>
                        </GrupoHead>
                        <GrupoBody>
                            {props.aulas.map(aula => (
                                <LinhaTable key={aula.id}>
                                    <ColunaTable>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }} >
                                            <FormControlLabel
                                                label={aula.id}
                                                control={
                                                    <Checkbox onChange={() =>  props.controlChk(aula)} />
                                                } 
                                            />
                                        </Box>
                                    </ColunaTable>
                                    <ColunaTable>{aula.name}</ColunaTable>
                                    <ColunaTable>{aula.email}</ColunaTable>
                                    <ColunaTable>{aula.teacher_name}</ColunaTable>
                                </LinhaTable>
                            ))}
                        </GrupoBody>
                    </PrinTable>
                </TableConteiner>
            ) : (
                <ListaVazia>Dados não encontrados</ListaVazia>
            )}
        </div>
    )
}

export default Tabela;


