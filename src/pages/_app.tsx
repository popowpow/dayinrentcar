import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { Layout } from "@components";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        description="Sewa mobil plus driver segala jenis unit mobil, harian, mingguan, bulanan, dan tahunan"
        canonical="https://dayinrentcar.com/"
        openGraph={{
          type: "website",
          url: "https://dayinrentcar.com/",
          description:
            "Sewa mobil plus driver segala jenis unit mobil, harian, mingguan, bulanan, dan tahunan",
          images: [
            {
              url: "https://dl.dropboxusercontent.com/s/b9zh5m741dfd59jc30z3s/cover.jpg?rlkey=fa6yzeapb1x5eiifc7ii7esql&dl=0",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "rental mobil, jasa rental, jasa rental mobil harian, jasa rental mobil mingguan, jasa rental mobil bulanan, jasa rental mobil jakarta, jasa super jabodetabek, rental mobil, rental mobil harian, rental mobil mingguan, rental mobil bulanan",
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
