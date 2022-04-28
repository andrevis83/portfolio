import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en' className="overflow-x-hidden">
      <Head>
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
      </Head>
      <body className="bg-primary overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}