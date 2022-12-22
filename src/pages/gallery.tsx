import Head from "next/head";
import Image from "next/image";

const IMAGE = [
  {
    image: "https://dl.dropboxusercontent.com/s/st5lim9bcnqtjur/3.jpeg?dl=0",
  },
  {
    image: "https://dl.dropboxusercontent.com/s/7ckmn2cy084n1l2/4.jpeg?dl=0",
  },
  {
    image: "https://dl.dropboxusercontent.com/s/u9cyj7avo80i3k9/5.jpeg?dl=0",
  },
  {
    image: "https://dl.dropboxusercontent.com/s/tsm5j3pfslxdbrj/6.png?dl=0",
  },
  {
    image: "https://dl.dropboxusercontent.com/s/bznif5ajciorxb2/7.jpeg?dl=0",
  },
  {
    image: "https://dl.dropboxusercontent.com/s/xbz22pztynpllzu/8.jpeg?dl=0",
  },
  {
    image: "https://dl.dropboxusercontent.com/s/ov1zjcrafgsrpkh/9.jpeg?dl=0",
  },
  {
    image: "https://dl.dropboxusercontent.com/s/rmjh8bxrvcsu9d1/10.jpeg?dl=0",
  },
  {
    image: "https://dl.dropboxusercontent.com/s/zo78897vo3py0rj/11.jpeg?dl=0",
  },
  {
    image: "https://dl.dropboxusercontent.com/s/ht0h71m0inafrkd/12.jpeg?dl=0",
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
