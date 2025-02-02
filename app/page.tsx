import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
// import PartnersSection from "../components/Partners";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import MissionVision from "../components/MissionVision";
// import Customers from "../components/Customers";
import WhatWeDo from "../components/WhatWeDo";
import OurValues from "../components/OurValues";
import OurProcess from "../components/OurProcess";
import OurTeam from "../components/OurTeam";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <Banner />
        <About id={"about"} />
        <MissionVision />
        <WhatWeDo />
        <OurValues />
        <WhyChooseUs />
        <Services id={"services"} />
        <OurProcess />
        <OurTeam />
        <Contact id={"contact"} />
        {/* <PartnersSection /> */}
        <Footer />
      </div>
    </>
  );
}