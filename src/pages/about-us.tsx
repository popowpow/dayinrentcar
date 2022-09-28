import type { NextPage } from "next";
import Head from "next/head";

import useClick from "@hooks/useClick";

const AboutUs: NextPage = () => {
  const { onLinkClick } = useClick();

  return (
    <>
      <Head>
        <title>
          Tentang Kami DriverDay - Jasa Supir dan Rental Mobil Harian, Mingguan,
          Bulanan
        </title>
      </Head>

      <main>
        <section className="text-center pt-16 bg-cover bg-center bg-no-repeat bg-[url('https://dl.dropboxusercontent.com/s/v2zmgn657o8veqz/order.png?dl=0')]">
          <div className="py-10">
            <h1 className="font-secondary font-bold text-4xl text-white">
              Tentang Kami
            </h1>
          </div>
        </section>

        <section className="bg-white text-center py-20 px-10">
          <p className="font-bold font-logo text-2xl">
            DRIVER<span className="text-yellow-500">DAY</span>
          </p>
          <p className="mt-8">
            DriverDay (Driver Every Day) adalah layanan yang bergerak dibidang
            jasa supir dan rental mobil aman, nyaman, terpercaya, dan
            berasuransi. Kami memprioritaskan keamanan dan kenyamanan dalam
            perjalanan Anda. Kami juga memiliki supir yang berpengalaman dan
            profesional, dan tidak perlu diragukan lagi dengan berbagai latar
            belakang dan sertifikat, melalui tahap pelatihan yang ketat. Kami
            juga memiliki mobil yang aman dan nyaman serta memiliki asuransi
            kecelakaan disetiap perjalanan Anda.
          </p>
        </section>

        <section className="bg-gray-100 py-5">
          <div className="bg-white px-10 py-5">
            <p className="text-xl text-red-700 font-bold font-secondary">
              Visi
            </p>
            <ul className="list-disc pl-5 mt-5">
              <li>
                Menjadi penyedia layanan jasa supir dan rental mobil nomor 1 di
                Indonesia yang aman, nyaman, terpercaya, dan berasuransi
              </li>
            </ul>
          </div>
          <div className="bg-white px-10 py-5 mt-5">
            <p className="text-xl text-red-700 font-bold font-secondary">
              Misi
            </p>
            <ul className="list-disc pl-5 mt-5">
              <li>Memberi pelayanan yang terbaik terhadap pelanggan</li>
              <li>Mengutamakan keamanan dan kenyamanan dalam perjalanan</li>
              <li>Mengutamakan keselamatan dalam perjalanan</li>
              <li>Mengurangi angka kecelakan dalam berkendara</li>
              <li>Mengurangi angka pengangguran di Indonesia</li>
            </ul>
          </div>
        </section>

        <section className="bg-white text-center p-20">
          <p className="text-2xl font-bold font-secondary">Ingin Pesan</p>
          <p className="font-bold font-logo text-2xl">
            DRIVER<span className="text-yellow-500">DAY</span>
          </p>
          <p className="font-bold text-2xl font-secondary">Pesan Sekarang!</p>
          <button
            className="mt-8 py-3 px-8 rounded-full font-bold bg-red-700 text-white"
            onClick={() =>
              onLinkClick(
                "https://wa.me/+6282124490998?text=Hallo, saya ingin memesan jasa DriverDay"
              )
            }
          >
            Order via WhatsApp
          </button>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
