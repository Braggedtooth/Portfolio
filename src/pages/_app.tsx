import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import React, { ReactElement, } from 'react'
import '../../public/nprogress.css'
import { MantineProvider } from '@mantine/core'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, _props: any) => typeof page
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page, _props) => page)

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'dark'
      }}
    >
      {getLayout(<Component {...pageProps} />, pageProps)}
    </MantineProvider>
  )
}

export default MyApp
