import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import PartnersSection from "../components/Partners";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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

        {/* Remaining Sections */}
        <div className="h-full">
          <Contact id={""} />
        </div>
        <PartnersSection />
        <Footer />
      </div>
    </>
  );
}
