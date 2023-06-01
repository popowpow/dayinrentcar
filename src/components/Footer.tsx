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
        <iframe
          title="Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253807.26443096486!2d106.75448550123149!3d-6.298052811882506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b9b95d617886db%3A0x5b82bab0391ce36!2sJasa%20sewa%20supir%20%2F%20Driverday.id!5e0!3m2!1sen!2sid!4v1685635223502!5m2!1sen!2sid"
          height="300"
          allowFullScreen
          loading="lazy"
          style={{ width: "-webkit-fill-available" }}
        ></iframe>
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
