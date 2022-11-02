import { Box, Button, Container, Dialog, Grid, Snackbar, Stack, TextField } from "@mui/material";
import { NextPage } from "next";
import { useCadastro } from "../src/hooks/useCadastro";

const Cadastro: NextPage = () => {
    const  {
        nomeProf,
        setNomeProf,
        desc,
        setDesc,
        valor,
        setValor,
        foto,
        setFoto,
        msg,
        setMsg
    } = useCadastro();
    return (
        <div>
            <Container sx={{ px:10, backgroundColor: 'secondary.main'}}>
                <Box sx={{ mx:20, margin: '10px auto'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField 
                                label="Digite o nome"
                                type="text"
                                fullWidth
                                autoComplete="off"
                                value={nomeProf}
                                onChange={(e) => setNomeProf(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                label="Foto"
                                type="text"
                                fullWidth
                                autoComplete="off"
                                placeholder="Tipo link http://..."
                                value={foto}
                                onChange={(e) => setFoto(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                label="Valor por hora"
                                type="number"
                                fullWidth
                                autoComplete="off"
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                label="Descrição"
                                multiline
                                fullWidth
                                autoComplete="off"
                                rows={4}
                                maxRows={4}
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Stack direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={2}
                        sx={{mt: 5}}>
                        <Button >Cancelar</Button>
                        <Button >Salvar</Button>
                    </Stack>

                    <Snackbar 
                        message={msg} 
                        open={msg.length > 0} 
                        autoHideDuration={3000}
                        onClose={() => setMsg('')}
                        anchorOrigin={{vertical:'bottom', horizontal:'right'}}
                    />
                </Box>
            </Container>
        </div>
    )
}

export default Cadastro;