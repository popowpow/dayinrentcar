import { PinMap, Whatsapp, Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 p-5 pb-0 text-white text-xs">
      <div>
        <p className="font-bold font-logo text-sm">
          DRIVER<span className="text-yellow-500">DAY</span>
        </p>
        <p className="mt-2">
          PT. YODANGGA DRIVERDAY INDO SUKSES (DriverDay - Driver Every Day)
          adalah layanan yang bergerak dibidang jasa supir dan rental mobil
          aman, nyaman, terpercaya, dan berasuransi. Kami memprioritaskan
          keamanan dan kenyamanan dalam perjalanan Anda. Kami juga memiliki
          supir yang berpengalaman dan profesional, dan tidak perlu diragukan
          lagi dengan berbagai latar belakang dan sertifikat, melalui tahap
          pelatihan yang ketat. Kami juga memiliki mobil yang aman dan nyaman
          serta memiliki asuransi kecelakaan disetiap perjalanan Anda.
        </p>
      </div>

      <div className="mt-5">
        <p className="text-sm font-bold">Kontak Kami</p>
        <div className="flex items-center">
          <PinMap />
          <p className="mt-1 ml-3">
            Jl. Bojong Nangka IV No.10, RT.008/RW.008, Jatirahayu,
            <br /> Kec. Pd. Melati, Kota Bks, Jawa Barat 17414
          </p>
        </div>
        <div className="flex items-center mt-1">
          <Whatsapp />
          <p className="mt-1 ml-3">+62 821-1441-0396</p>
        </div>
        <div className="flex items-center mt-1">
          <Instagram />
          <p className="mt-1 ml-3">@driverday.id</p>
        </div>
      </div>

      <div className="text-center border-t mt-5 py-2">
        <p className="text-[0.65rem]">
          Copyright © {new Date().getFullYear()}. DriverDay. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
