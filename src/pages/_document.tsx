import { createStylesServer, ServerStyles } from '@mantine/next'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'

const stylesServer = createStylesServer()
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles
          html={initialProps.html}
          server={stylesServer}
          key="styles"
        />
      ]
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#fff" />
          <meta name="description" content="Adebayo Ajayi portfolio website." />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="manifest" href="/manifest.json" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <style data-href="https://fonts.googleapis.com/css2?family=Exo:wght@100;300;400;700;900&display=swap" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
