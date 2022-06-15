import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { NextPage } from 'next'
import { ReactElement } from 'react'
import theme from '../config/theme'
import GlobalStyle from '../config/globalStyle'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, _props) => typeof page
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page, _props) => page)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />, pageProps)}
    </ThemeProvider>
  )
}

export default MyApp
