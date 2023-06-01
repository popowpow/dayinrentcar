import { Whatsapp } from "react-bootstrap-icons";
import useClick from "@hooks/useClick";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  const { onLinkClick } = useClick();

  return (
    <>
      <Header />
      {children}
      <Footer />

      <button
        onClick={() =>
          onLinkClick(
            "https://wa.me/+6282114410396?text=Hallo, saya ingin memesan jasa DriverDay"
          )
        }
        className="fixed z-90 bottom-5 right-5 bg-gradient-to-tr from-green-600 to-green-400 w-14 h-14 rounded-full drop-shadow-lg flex justify-center items-center text-white"
      >
        <Whatsapp className="text-2xl" />
      </button>
    </>
  );
};

export default Layout;
