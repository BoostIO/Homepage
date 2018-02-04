import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width' />

          <link rel='apple-touch-icon' sizes='180x180' href='/static/favicon/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon/favicon-16x16.png' />
          <link rel='manifest' href='/static/favicon/site.webmanifest' />
          <meta name='msapplication-TileColor' content='#00aba9' />
          <meta name='theme-color' content='#ffffff' />

          <link href='/static/normalize.css' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Work+Sans:400,700' rel='stylesheet' />
          <link href='/static/base.css' rel='stylesheet' />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
