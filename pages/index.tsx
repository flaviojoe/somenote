import { Box, Button, Container, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material';
import { NextPage } from 'next'
import Lista from '../src/components/lista/lista';
import { useIndex } from '../src/hooks/useIndex';

const Home: NextPage = () => {
  const {listaProfessores} = useIndex();
  const {
    nome,
    setNome,
    email,
    setEmail,
    selecProf,
    setSelecProf,
    marcarAula,
    msg,
    setMsg
  } = useIndex();

  return (
    <div>
      <Container >
          <Box sx={{ backgroundColor: 'secondary.main' }}>
            <Lista 
              professores={listaProfessores}
              onSelectProf={(professor) => setSelecProf(professor)}
            ></Lista>
            <Dialog onClose={() => setSelecProf(null)} open={selecProf !== null} fullWidth PaperProps={{sx: {p:5, borderRadius:10}}}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField 
                    label="Digite o nome"
                    type="text"
                    fullWidth
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    label="Digite o e-mail"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
              </Grid>
              <DialogActions sx={{mt: 5}}>
                <Button onClick={() => setSelecProf(null)}>Cancelar</Button>
                <Button onClick={() => marcarAula()}>Marcar</Button>
              </DialogActions>

              <Snackbar 
                message={msg} 
                open={msg.length > 0} 
                autoHideDuration={3000}
                onClose={() => setMsg('')}
                anchorOrigin={{vertical:'bottom', horizontal:'right'}}
                />
            </Dialog>
          </Box>
      </Container>
    </div>
  )
}

export default Home;