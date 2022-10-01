import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
      <Head>
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
