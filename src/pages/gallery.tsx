import Head from "next/head";
import Image from "next/image";

import { GALLERY } from "@constants/gallery";

const Gallery = () => {
  return (
    <>
      <Head>
        <title>
          Gallery Dayinrentcar - Sewa mobil plus driver, aman, nyaman,
          terpercaya dan profesional
        </title>
      </Head>

      <main>
        <section className="text-center pt-16 bg-cover bg-center bg-no-repeat bg-[url('https://dl.dropboxusercontent.com/s/v2zmgn657o8veqz/order.png?dl=0')]">
          <div className="py-10 lg:py-20">
            <h1 className="font-secondary font-bold text-4xl md:text-5xl text-white">
              Gallery
            </h1>
          </div>
        </section>

        <section className="bg-white text-center py-20 px-10 lg:px-40">
          <p className="font-bold font-logo text-2xl">
            DAYIN<span className="text-yellow-500">RENTCAR</span>
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY.map(({ IMG }) => (
              <div key={IMG} className="max-w-lg drop-shadow-md">
                <Image
                  alt="Dayinrentcar"
                  src={IMG}
                  width="100%"
                  height="60%"
                  layout="responsive"
                  objectFit="contain"
                  priority
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Gallery;
