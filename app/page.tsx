import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import PartnersSection from "../components/Partners";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";


export default function Home() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <Banner />
        <About />
        <WhyChooseUs></WhyChooseUs>
        <Services></Services>
        <Contact id={""}  />
        <PartnersSection />
        <Footer />
      </div>
    </>
  );
}
