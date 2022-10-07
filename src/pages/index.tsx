import type { NextPage } from "next";
import Head from "next/head";
import {
  ShieldShaded,
  StarFill,
  PatchCheckFill,
  HeartFill,
  PersonFill,
} from "react-bootstrap-icons";

import useClick from "@hooks/useClick";

const TESTIMONIALS = [
  {
    name: "Tirta wijaya",
    text: "Driver-nya rapih, sopan, ramah, profesional dan hafal jalan Jakarta.",
  },
  {
    name: "Anisaa handini",
    text: "Terima kasih sudah membantu saya saat membutuhkan driver backup untuk aktivitas sehari-hari.",
  },
  {
    name: "Mr. Tony",
    text: "Nice driver , thanks DriverDay.",
  },
  {
    name: "Hendrawan",
    text: "Pelayanan admin baik dan harga terjangkau, very good solution",
  },
];

const Home: NextPage = () => {
  const { onLinkClick } = useClick();

  return (
    <>
      <Head>
        <title>
          DriverDay (Driver Every Day) - Jasa Supir dan Rental Mobil Harian,
          Mingguan, Bulanan
        </title>
      </Head>

      <main>
        <section className="text-center pt-16 bg-cover bg-center bg-no-repeat bg-[url('https://dl.dropboxusercontent.com/s/joae2hqrnvgv0zb/cover.png?dl=0')]">
          <div className="py-20 md:py-32">
            <h1 className="font-secondary font-bold text-4xl md:text-5xl text-white">
              JASA SUPIR &<br />
              RENTAL MOBIL
            </h1>
          </div>
        </section>

        <section className="bg-gradient-to-b from-yellow-500 to-yellow-700 font-secondary font-semibold text-lg py-10 flex flex-col lg:flex-row justify-center items-center">
          <div className="bg-white h-36 lg:h-52 w-72 lg:w-64 flex flex-col justify-center items-center">
            <ShieldShaded className="text-4xl mb-2" />
            <p>Aman</p>
          </div>
          <div className="bg-gray-100 h-36 lg:h-52 w-72 lg:w-64 flex flex-col justify-center items-center">
            <StarFill className="text-4xl mb-2" />
            <p>Nyaman</p>
          </div>
          <div className="bg-gray-200 h-36 lg:h-52 w-72 lg:w-64 flex flex-col justify-center items-center">
            <PatchCheckFill className="text-4xl mb-2" />
            <p>Terpercaya</p>
          </div>
          <div className="bg-gray-300 h-36 lg:h-52 w-72 lg:w-64 flex flex-col justify-center items-center">
            <HeartFill className="text-4xl mb-2" />
            <p>Berasuransi</p>
          </div>
        </section>

        <section className="bg-gray-100 text-center p-20">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="font-secondary">Order</span>{" "}
            <span className="font-bold font-logo">
              DRIVER<span className="text-yellow-500">DAY</span>
            </span>
          </h2>
          <p className="mt-8 text-lg md:text-xl font-bold">
            Pesan jasa supir & rental mobil harian, mingguan, bulanan
          </p>
          <button
            className="mt-8 py-3 px-8 rounded-full font-bold bg-red-700 text-white md:text-lg"
            onClick={() =>
              onLinkClick(
                "https://wa.me/+6282114410396?text=Hallo, saya ingin memesan jasa DriverDay"
              )
            }
          >
            Order via WhatsApp
          </button>
        </section>

        <section className="bg-white py-20 text-center">
          <h2 className="text-xl md:text-2xl font-bold font-secondary">
            PRICE LIST
          </h2>

          <div className="flex flex-col lg:flex-row justify-center items-center mt-5">
            <div className="mt-5 bg-yellow-500 w-60 text-center p-5 rounded-xl shadow-lg text-gray-100">
              <h3 className="font-bold text-lg md:text-xl border-b border-gray-100 text-red-700">
                HARIAN
              </h3>
              <p className="mt-5 font-bold md:text-lg">Supir</p>
              <p className="text-sm md:text-base">Mulai dari Rp240.000</p>
              <p className="mt-5 font-bold md:text-lg">Mobil</p>
              <p className="text-sm md:text-base">Mulai dari Rp350.000</p>
            </div>

            <div className="mt-5 lg:ml-14 bg-yellow-500 w-60 text-center p-5 rounded-xl shadow-lg text-gray-100">
              <h3 className="font-bold text-lg md:text-xl border-b border-gray-100 text-red-700">
                MINGGUAN
              </h3>
              <p className="mt-5 font-bold md:text-lg">Supir</p>
              <p className="text-sm md:text-base">Mulai dari Rp1.400.000</p>
              <p className="mt-5 font-bold md:text-lg">Mobil</p>
              <p className="text-sm md:text-base">Hubungi Kami</p>
            </div>

            <div className="mt-5 lg:ml-14 bg-yellow-500 w-60 text-center p-5 rounded-xl shadow-lg text-gray-100">
              <h3 className="font-bold text-lg md:text-xl border-b border-gray-100 text-red-700">
                BULANAN
              </h3>
              <p className="mt-5 font-bold md:text-lg">Supir</p>
              <p className="text-sm md:text-base">Mulai dari Rp5.000.000</p>
              <p className="mt-5 font-bold md:text-lg">Mobil</p>
              <p className="text-sm md:text-base">Hubungi Kami</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 text-center p-20">
          <h2 className="text-xl md:text-2xl font-bold font-secondary mb-8">
            TESTIMONI
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 justify-items-center">
            {TESTIMONIALS.map(({ name, text }, index) => (
              <div
                key={index}
                className="w-60 bg-white rounded-md p-5 shadow-md"
              >
                <p>"{text}"</p>
                <p className="font-bold mt-2 flex justify-center items-center">
                  <PersonFill className="mr-2" /> {name}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-zinc-700 text-center p-20 text-white">
          <h2 className="text-lg font-bold font-secondary">
            Jadilah Mitra Kami
          </h2>
          <p className="mt-8 text-sm">
            Kami membuka kesempatan untuk bergabung dengan{" "}
            <span className="font-bold font-logo">
              DRIVER<span className="text-yellow-500">DAY</span>
            </span>
          </p>
          <p className="mt-8 font-bold text-xs">DAFTARKAN DIRI ANDA SEKARANG</p>
          <button
            className="mt-8 py-3 px-8 rounded-full font-bold bg-red-700 text-white text-sm"
            onClick={() =>
              onLinkClick(
                "https://wa.me/+6282114410396?text=Hallo, saya ingin menjadi mitra DriverDay"
              )
            }
          >
            Daftar Menjadi Mitra
          </button>
        </section>
      </main>
    </>
  );
};

export default Home;
