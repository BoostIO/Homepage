import React from 'react'
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
          <title>BoostIO</title>

          <meta name='description' content='Tokyo based open source enthusiastic collective.' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta name='msapplication-TileColor' content='#00aba9' />
          <meta name='theme-color' content='#ffffff' />

          <link rel='apple-touch-icon' sizes='180x180' href='/static/favicon/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon/favicon-16x16.png' />
          <link rel='manifest' href='/static/favicon/site.webmanifest' />

          <link href='/static/normalize.css' rel='stylesheet' />
          <link href='/static/base.css' rel='stylesheet' />
          <script src="https://unpkg.com/react/umd/react.production.js" crossorigin />
          <script src="https://unpkg.com/react-dom/umd/react-dom.production.js" crossorigin />
          <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossorigin="anonymous"
          />
          {this.props.styleTags}
          <script defer src='https://use.fontawesome.com/releases/v5.0.6/js/all.js' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
