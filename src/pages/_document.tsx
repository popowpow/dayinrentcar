import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        {/* Other Meta Tags */}
        <meta
          name="keywords"
          content="jasa supir, jasa driver, jasa supir harian, jasa supir mingguan, jasa supir bulanan, jasa supir jakarta, jasa super jabodetabek, rental mobil, rental mobil harian, rental mobil mingguan, rental mobil bulanan"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* Link */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Hind+Vadodara:wght@400;600;700&family=Padauk:wght@400;700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body className="no-select font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
