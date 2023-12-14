import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import {
  ShieldShaded,
  StarFill,
  PatchCheckFill,
  PersonFill,
  HandThumbsUpFill,
} from "react-bootstrap-icons";

import useClick from "@hooks/useClick";
import { DRIVER, UNIT } from "@constants/order-list";

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
        <title>Dayinrentcar - Rental Mobil Harian, Mingguan, Bulanan</title>
      </Head>

      <main>
        <section className="text-center pt-16 bg-cover bg-center bg-no-repeat bg-[url('https://dl.dropboxusercontent.com/s/b9zh5m741dfd59jc30z3s/cover.jpg?rlkey=fa6yzeapb1x5eiifc7ii7esql&dl=0')]">
          <div className="py-40 md:py-56" />
        </section>

        <section className="bg-white pt-10 pb-20 text-center">
          <h2 className="text-xl md:text-2xl font-bold font-secondary">
            PRICE LIST
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center mt-5">
            {UNIT.map(({ TITLE, IMG, PRICE }) => (
              <div
                key={TITLE}
                className="w-80 xl:w-96 text-center p-5 rounded-xl shadow-lg"
              >
                <Image
                  alt={TITLE}
                  src={IMG}
                  width="100%"
                  height="60%"
                  layout="responsive"
                  objectFit="contain"
                  priority
                />
                <p className="md:text-lg font-bold mt-3">{TITLE}</p>
                <p className="md:text-lg font-bold">{PRICE}</p>
                <button
                  className="w-full mt-5 py-3 px-8 rounded-full font-bold bg-gradient-to-tr from-green-600 to-green-400 text-white text-sm"
                  onClick={() =>
                    onLinkClick(
                      `https://wa.me/+6282246481369?text=Hallo, saya ingin memesan unit ${TITLE}`
                    )
                  }
                >
                  PESAN
                </button>
              </div>
            ))}
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
            <HandThumbsUpFill className="text-4xl mb-2" />
            <p>Profesional</p>
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
            Utamakan Keselamatan dan Kenyamanan Dalam Perjalanan Anda
          </h2>
          <p className="mt-8 text-lg">
            <span className="font-bold font-logo">
              DAYIN<span className="text-yellow-500">RENTCAR</span>
            </span>
          </p>
          <button
            className="mt-8 py-3 px-8 rounded-full font-bold bg-gradient-to-tr from-green-600 to-green-400 text-white text-sm"
            onClick={() =>
              onLinkClick(
                "https://wa.me/+6282246481369?text=Hallo, saya ingin memesan rental mobil Dayinrentcar"
              )
            }
          >
            PESAN SEKARANG
          </button>
        </section>
      </main>
    </>
  );
};

export default Home;
