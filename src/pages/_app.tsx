import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../config/theme'
import Layout from '../layout'
import GlobalStyles from '../config/globalStyle'

const MyApp = ({ Component, pageProps }: AppProps) => {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
