import { Box } from '@mui/material';
import { NextPage } from 'next'
import Lista from '../src/components/lista/lista';
import { useIndex } from '../src/hooks/useIndex';

const Home: NextPage = () => {
  const {listaProfessores} = useIndex();

  return (
    <div>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <Lista professores={listaProfessores}></Lista>
      </Box>
    </div>
  )
}

export default Home;