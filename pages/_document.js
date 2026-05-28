import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Product Visual Lock — AI video ads that always show your real product. Visual fingerprinting for brands. Consistent product identity across every AI generation." />
        <meta property="og:title" content="Product Visual Lock" />
        <meta property="og:description" content="Your product. Every time. Across every AI-generated ad." />
        <meta name="theme-color" content="#07070f" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
