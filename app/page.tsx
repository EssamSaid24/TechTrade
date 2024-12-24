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
        {/* Navbar */}
        <Navbar />

        {/* Banner */}
        <Banner />

        {/* About Section */}
        <About />
        <WhyChooseUs></WhyChooseUs>
        {/* Remaining Sections */}
        <Services></Services>
        <div className="h-full">
          <Contact id={""} />
        </div>
        <PartnersSection />
        <Footer />
      </div>
    </>
  );
}
