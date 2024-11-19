import TwoPictures from "../components/TwoPictures";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Image from "next/image";
import PartnersSection from "../components/Partners";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";




export default function Home() {
  return (
    <div className="w-full items-center justify-center">

      <Navbar></Navbar>
      <Banner></Banner>
      <TwoPictures></TwoPictures>
      <About></About>
      <Contact id={""}></Contact>
      <PartnersSection></PartnersSection>
      <Footer></Footer>

    </div>


  );
}
