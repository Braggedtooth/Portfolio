import { MantineProvider } from '@mantine/core'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, useEffect, useState } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, _props: any) => typeof page
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page, _props) => page)
  const [state, setState] = useState(false)
  useEffect(() => {
    setState(true)
  }, [])
  return (
    state && (
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark'
        }}
      >
        {getLayout(<Component {...pageProps} />, pageProps)}
      </MantineProvider>
    )
  )
}

export default MyApp
