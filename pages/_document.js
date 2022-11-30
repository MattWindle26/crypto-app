import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* https://www.cryptofonts.com/index.html#get-started */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/monzanifabio/cryptofont/cryptofont.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"  />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}