import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { Layout } from "@components";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        description="Jasa Supir dan Rental Mobil Harian, Mingguan dan Bulanan. Aman, nyaman, terpercaya, dan berasuransi"
        canonical="https://driverday.id/"
        openGraph={{
          type: "website",
          url: "https://driverday.id/",
          description:
            "Jasa Supir dan Rental Mobil Harian, Mingguan dan Bulanan. Aman, nyaman, terpercaya, dan berasuransi",
          images: [
            {
              url: "https://dl.dropboxusercontent.com/s/joae2hqrnvgv0zb/cover.png?dl=0",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "jasa supir, jasa driver, jasa supir harian, jasa supir mingguan, jasa supir bulanan, jasa supir jakarta, jasa super jabodetabek, rental mobil, rental mobil harian, rental mobil mingguan, rental mobil bulanan",
          },
        ]}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
