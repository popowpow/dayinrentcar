import Head from "next/head";
import Image from "next/image";

const IMAGE = [
  {
    image: "https://dl.dropboxusercontent.com/s/st5lim9bcnqtjur/3.jpeg?dl=0",
  },
  {
    image: "https://dl.dropboxusercontent.com/s/xbz22pztynpllzu/8.jpeg?dl=0",
  },
  {
    image:
      "https://dl.dropboxusercontent.com/s/ps0fodk9v3xsec6/WhatsApp%20Image%202023-01-30%20at%209.24.32%20PM%20%281%29.jpeg?dl=0",
  },
  {
    image:
      "https://dl.dropboxusercontent.com/s/id95oik4nfmsnct/WhatsApp%20Image%202023-01-30%20at%209.24.32%20PM%20%282%29.jpeg?dl=0",
  },
  {
    image:
      "https://dl.dropboxusercontent.com/s/3unq5citcfw7lk1/WhatsApp%20Image%202023-01-30%20at%209.24.32%20PM.jpeg?dl=0",
  },
  {
    image:
      "https://dl.dropboxusercontent.com/s/9mwp3g5jxc5qf6p/WhatsApp%20Image%202023-01-30%20at%209.24.31%20PM%20%281%29.jpeg?dl=0",
  },
  {
    image:
      "https://dl.dropboxusercontent.com/s/99kn9toytsmdern/WhatsApp%20Image%202023-01-30%20at%209.24.28%20PM.jpeg?dl=0",
  },
  {
    image:
      "https://dl.dropboxusercontent.com/s/nuas7rpac6iuoxb/WhatsApp%20Image%202023-01-30%20at%209.24.29%20PM%20%281%29.jpeg?dl=0",
  },
  {
    image:
      "https://dl.dropboxusercontent.com/s/kz8g3m91lr986bg/WhatsApp%20Image%202023-01-30%20at%209.24.29%20PM.jpeg?dl=0",
  },
  {
    image:
      "https://dl.dropboxusercontent.com/s/z983q1kx150ldg2/WhatsApp%20Image%202023-01-30%20at%209.25.16%20PM%20%281%29.jpeg?dl=0",
  },
  {
    image:
      "https://dl.dropboxusercontent.com/s/s76muk6vw0ipblz/WhatsApp%20Image%202023-01-30%20at%209.25.16%20PM.jpeg?dl=0",
  },
  {
    image:
      "https://dl.dropboxusercontent.com/s/bpwshtlb7d9s4y6/WhatsApp%20Image%202023-01-30%20at%209.24.31%20PM.jpeg?dl=0",
  },
  {
    image:
      "https://dl.dropboxusercontent.com/s/ozv63ma07e53sa6/WhatsApp%20Image%202023-01-30%20at%209.24.31%20PM%20%282%29.jpeg?dl=0",
  },
  {
    image:
      "https://dl.dropboxusercontent.com/s/m2ggndp5rcwtw0p/WhatsApp%20Image%202023-01-30%20at%209.24.33%20PM%20%281%29.jpeg?dl=0",
  },
  {
    image:
      "https://dl.dropboxusercontent.com/s/1j3gcsh8cbmthnq/11WhatsApp-Image-2023-01-30-at-9.jpg?dl=0",
  },
  {
    image:
      "https://dl.dropboxusercontent.com/s/bk6cddrxnup6jai/WhatsApp%20Image%202023-01-30%20at%209.24.30%20PM.jpeg?dl=0",
  },
  {
    image:
      "https://dl.dropboxusercontent.com/s/3mwmzcb5tqyknjl/WhatsApp%20Image%202023-01-30%20at%209.24.29%20PM%20%283%29.jpeg?dl=0",
  },
  {
    image:
      "https://dl.dropboxusercontent.com/s/u5dsmskzgo5wv05/WhatsApp%20Image%202023-01-30%20at%209.24.29%20PM%20%282%29.jpeg?dl=0",
  },
];

const Gallery = () => {
  return (
    <>
      <Head>
        <title>
          Gallery DriverDay - Jasa Supir dan Rental Mobil Harian, Mingguan,
          Bulanan
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
            DRIVER<span className="text-yellow-500">DAY</span>
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {IMAGE.map(({ image }, index) => (
              <div key={index} className="max-w-lg drop-shadow-md">
                <Image
                  alt="DriverDay"
                  src={image}
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
