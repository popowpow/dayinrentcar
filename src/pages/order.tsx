import type { NextPage } from "next";
import Head from "next/head";

import useClick from "@hooks/useClick";

const ORDER_FLOW = [
  {
    number: 1,
    title: "Pesan via WhatsApp",
    desc: "Hubungi nomor ini untuk pesan via WhatsApp +62 821-2449-0998",
  },
  {
    number: 2,
    title: "Konfirmasi Pesanan",
    desc: "Admin DriverDay akan mengkonfirmasi terlebih dahulu",
  },
  {
    number: 3,
    title: "Pembayaran Uang Muka",
    desc: "Melakukan pembayaran uang muka via transfer",
  },
  {
    number: 4,
    title: "Surat Tanda Jadi",
    desc: "Admin DriverDay akan mengirimkan surat tanda jadi via WhatsApp",
  },
  {
    number: 5,
    title: "Melakukan Perjalanan",
    desc: "Supir akan menuju lokasi Anda dengan tanggal dan waktu yang telah ditentukan. Dan selamat menikmati perjalanan Anda",
  },
  {
    number: 6,
    title: "Sisa Pembayaran",
    desc: "Melakukan sisa pembayaran (Cash/Transfer)",
  },
];

const Order: NextPage = () => {
  const { onLinkClick } = useClick();

  return (
    <>
      <Head>
        <title>
          Cara Pesan DriverDay - Jasa Supir dan Rental Mobil Harian, Mingguan,
          Bulanan
        </title>
      </Head>

      <main>
        <section className="text-center pt-16 bg-cover bg-center bg-no-repeat bg-[url('https://dl.dropboxusercontent.com/s/v2zmgn657o8veqz/order.png?dl=0')]">
          <div className="py-10">
            <h1 className="font-secondary font-bold text-4xl text-white">
              Cara Pesan
            </h1>
          </div>
        </section>

        <section className="bg-white py-14 flex flex-col justify-center items-center text-center">
          {ORDER_FLOW.map(({ number, title, desc }) => (
            <div className="px-24 py-5">
              <h2 className="text-5xl font-bold text-yellow-500 font-secondary">
                {number}
              </h2>
              <h3 className="text-lg font-bold mt-2 font-secondary">{title}</h3>
              <p className="mt-2">{desc}</p>
            </div>
          ))}
        </section>

        <section className="bg-gray-100 text-center p-20">
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

export default Order;
