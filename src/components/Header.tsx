import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  const { push } = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, []);

  const controlNavbar = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    setIsActive(winScroll > 0);
  };

  const onLinkClick = (path: string) => {
    setIsOpen(false);
    push(path);
  };

  return (
    <header className="fixed z-10 w-full">
      <div
        className={`w-full flex justify-between items-center bg-white px-3 py-2 ${
          (isActive || isOpen) && "border-b"
        }`}
      >
        <div>
          <a
            className="text-xl font-bold font-logo"
            onClick={() => onLinkClick("/")}
          >
            DRIVER<span className="text-yellow-500">DAY</span>
          </a>
          <p className="text-xs leading-3">Jasa Supir & Rental Mobil</p>
          <p className="text-xs leading-3">Harian, Mingguan, Bulanan</p>
        </div>

        <button
          className="text-gray-700 w-10 h-10 relative focus:outline-none bg-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isOpen && "opacity-0"
              }`}
            />
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </div>
        </button>
      </div>

      {isOpen && (
        <nav className="w-screen h-screen bg-white text-center flex flex-col text-sm lg:text-base color-primary px-5">
          <button className="mt-5" onClick={() => onLinkClick("/")}>
            Beranda
          </button>
          <button className="mt-5" onClick={() => onLinkClick("/order")}>
            Cara Pesan
          </button>
          <button className="mt-5" onClick={() => onLinkClick("/gallery")}>
            Gallery
          </button>
          <button className="mt-5" onClick={() => onLinkClick("/about-us")}>
            Tentang Kami
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
