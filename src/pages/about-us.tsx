import type { NextPage } from "next";
import Head from "next/head";

import useClick from "@hooks/useClick";

const AboutUs: NextPage = () => {
  const { onLinkClick } = useClick();

  return (
    <>
      <Head>
        <title>
          Tentang Kami Dayinrentcar - Sewa mobil plus driver, aman, nyaman,
          terpercaya dan profesional
        </title>
      </Head>

      <main>
        <section className="text-center pt-16 bg-cover bg-center bg-no-repeat bg-[url('https://dl.dropboxusercontent.com/s/v2zmgn657o8veqz/order.png?dl=0')]">
          <div className="py-10 lg:py-20">
            <h1 className="font-secondary font-bold text-4xl md:text-5xl text-white">
              Tentang Kami
            </h1>
          </div>
        </section>

        <section className="bg-white text-center py-20 px-10 lg:px-40">
          <p className="font-bold font-logo text-2xl">
            DAYIN<span className="text-yellow-500">RENTCAR</span>
          </p>
          <p className="mt-8">
            PT. YODANGGA DRIVERDAY INDO SUKSES (DriverDay - Driver Every Day)
            adalah layanan yang bergerak dibidang jasa supir dan rental mobil
            aman, nyaman, terpercaya, dan berasuransi. Kami memprioritaskan
            keamanan dan kenyamanan dalam perjalanan Anda. Kami juga memiliki
            supir yang berpengalaman dan profesional, dan tidak perlu diragukan
            lagi dengan berbagai latar belakang dan sertifikat, melalui tahap
            pelatihan yang ketat. Kami juga memiliki mobil yang aman dan nyaman
            serta memiliki asuransi kecelakaan disetiap perjalanan Anda.
          </p>
        </section>

        <section className="bg-gray-100 py-5 lg:px-72">
          <div className="bg-white px-10 py-5">
            <p className="text-xl text-red-700 font-bold font-secondary">
              Visi
            </p>
            <ul className="list-disc pl-5 mt-5">
              <li>
                Menjadi penyedia layanan jasa supir dan rental mobil nomor 1 di
                Indonesia yang aman, nyaman, terpercaya, dan profesional.
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
            DAYIN<span className="text-yellow-500">RENTCAR</span>
          </p>
          <p className="font-bold text-2xl font-secondary">Pesan Sekarang!</p>
          <button
            className="mt-8 py-3 px-8 rounded-full font-bold bg-gradient-to-tr from-green-600 to-green-400 text-white"
            onClick={() =>
              onLinkClick(
                "https://wa.me/+6282246481369?text=Hallo, saya ingin memesan rental mobil Dayinrentcar"
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
