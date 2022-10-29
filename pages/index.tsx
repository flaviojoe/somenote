import { Box } from '@mui/material';
import { NextPage } from 'next'
import Lista from '../src/components/lista/lista';

const Home: NextPage = () => {
  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista></Lista>
    </Box>
  )
}

export default Home;