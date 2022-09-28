import type { NextPage } from "next";
import Head from "next/head";
import {
  ShieldShaded,
  StarFill,
  PatchCheckFill,
  HeartFill,
} from "react-bootstrap-icons";

import useClick from "@hooks/useClick";

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
          <div className="py-20">
            <h1 className="font-secondary font-bold text-4xl text-white">
              JASA SUPIR &<br />
              RENTAL MOBIL
            </h1>
          </div>
        </section>

        <section className="bg-gradient-to-b from-yellow-500 to-yellow-700 font-secondary font-semibold text-lg py-10 flex flex-col justify-center items-center">
          <div className="bg-white h-36 w-72 flex flex-col justify-center items-center">
            <ShieldShaded className="text-4xl mb-2" />
            <p>Aman</p>
          </div>
          <div className="bg-gray-100 h-36 w-72 flex flex-col justify-center items-center">
            <StarFill className="text-4xl mb-2" />
            <p>Nyaman</p>
          </div>
          <div className="bg-gray-200 h-36 w-72 flex flex-col justify-center items-center">
            <PatchCheckFill className="text-4xl mb-2" />
            <p>Terpercaya</p>
          </div>
          <div className="bg-gray-300 h-36 w-72 flex flex-col justify-center items-center">
            <HeartFill className="text-4xl mb-2" />
            <p>Berasuransi</p>
          </div>
        </section>

        <section className="bg-gray-100 text-center p-20">
          <h2 className="text-2xl font-bold">
            <span className="font-secondary">Order</span>{" "}
            <span className="font-bold font-logo">
              DRIVER<span className="text-yellow-500">DAY</span>
            </span>
          </h2>
          <p className="mt-8 text-lg font-bold">
            Pesan jasa supir & rental mobil harian, mingguan, bulanan
          </p>
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

        <section className="bg-white py-20 flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold font-secondary">PRICE LIST</h2>
          <div className="mt-10 bg-yellow-500 w-60 text-center p-5 rounded-xl shadow-lg text-gray-100">
            <h3 className="font-bold text-lg border-b border-gray-100 text-red-700">
              HARIAN
            </h3>
            <p className="mt-5 font-bold">Supir</p>
            <p className="text-sm">Mulai dari Rp240.000</p>
            <p className="mt-5 font-bold">Mobil</p>
            <p className="text-sm">Mulai dari Rp350.000</p>
          </div>

          <div className="mt-5 bg-yellow-500 w-60 text-center p-5 rounded-xl shadow-lg text-gray-100">
            <h3 className="font-bold text-lg border-b border-gray-100 text-red-700">
              MINGGUAN
            </h3>
            <p className="mt-5 font-bold">Supir</p>
            <p className="text-sm">Mulai dari Rp1.400.000</p>
            <p className="mt-5 font-bold">Mobil</p>
            <p className="text-sm">Hubungi Kami</p>
          </div>

          <div className="mt-5 bg-yellow-500 w-60 text-center p-5 rounded-xl shadow-lg text-gray-100">
            <h3 className="font-bold text-lg border-b border-gray-100 text-red-700">
              BULANAN
            </h3>
            <p className="mt-5 font-bold">Supir</p>
            <p className="text-sm">Mulai dari Rp5.000.000</p>
            <p className="mt-5 font-bold">Mobil</p>
            <p className="text-sm">Hubungi Kami</p>
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
                "https://wa.me/+6282124490998?text=Hallo, saya ingin menjadi mitra DriverDay"
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
