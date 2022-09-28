import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        {/* HTML Meta Tags */}
        <meta
          name="description"
          content="Jasa Supir dan Rental Mobil Harian, Mingguan dan Bulanan. Aman, nyaman, terpercaya, dan berasuransi"
        />

        {/* Google / Search Engine Tags */}
        <meta
          itemProp="name"
          content="DriverDay (Driver Every Day) - Jasa Supir dan Rental Mobil Harian, Mingguan, Bulanan"
        />
        <meta
          itemProp="description"
          content="Jasa Supir dan Rental Mobil Harian, Mingguan dan Bulanan. Aman, nyaman, terpercaya, dan berasuransi"
        />
        <meta
          itemProp="image"
          content="https://dl.dropboxusercontent.com/s/joae2hqrnvgv0zb/cover.png?dl=0"
        />

        {/* Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="DriverDay (Driver Every Day) - Jasa Supir dan Rental Mobil Harian, Mingguan, Bulanan"
        />
        <meta
          property="og:description"
          content="Jasa Supir dan Rental Mobil Harian, Mingguan dan Bulanan. Aman, nyaman, terpercaya, dan berasuransi"
        />
        <meta
          property="og:image"
          content="https://dl.dropboxusercontent.com/s/joae2hqrnvgv0zb/cover.png?dl=0"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DriverDay (Driver Every Day) - Jasa Supir dan Rental Mobil Harian, Mingguan, Bulanan"
        />
        <meta
          name="twitter:description"
          content="Jasa Supir dan Rental Mobil Harian, Mingguan dan Bulanan. Aman, nyaman, terpercaya, dan berasuransi"
        />
        <meta
          name="twitter:image"
          content="https://dl.dropboxusercontent.com/s/joae2hqrnvgv0zb/cover.png?dl=0"
        />

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
