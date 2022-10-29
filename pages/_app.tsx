import '../styles/globals.css'
import type { AppProps } from 'next/app'
import tema from '../src/themes/theme'
import { ThemeProvider } from '@mui/material'
import Cabecalho from '../src/components/cabecalho/cabecalho'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <Cabecalho></Cabecalho>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
