import '../styles/globals.css'
import type { AppProps } from 'next/app'
import tema from '../src/themes/theme'
import { ThemeProvider } from '@mui/material'
import Cabecalho from '../src/components/cabecalho/cabecalho'
import Menu from '../src/components/nav/nav'
import { useIndex } from '../src/hooks/useIndex'

export default function App({ Component, pageProps }: AppProps) {
  const {
    leftMenu,
    setLeftMenu
  } = useIndex();

  return (
    <ThemeProvider theme={tema}>
      <Menu 
          open={leftMenu}
          toogleMenu={(leftMenu) => setLeftMenu(leftMenu)}
      ></Menu>
      <Cabecalho></Cabecalho>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
