import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About/About";
import AwardsSection from "./components/AwardsSection/AwardsSection";
import DesignCube from "./components/DesignCube/DesignCube";
import FooterSection from "./components/FooterSection/FooterSection";
import HeroSection from "./components/HeroSection/HeroSection";
import KeyMetrics from "./components/KeyMetrics/KeyMetrics";
import MainSectionParagraph from "./components/MainSectionParagraph/MainSectionParagraph";
import Marquee from "./components/Marquee/Marquee";
import NavBar from "./components/Navbar/NavBar";
import RotatingDivsection from "./components/RotatingDivsection/RotatingDivsection";
import Services from "./components/ServicesSection/Services";
import TeamCards from "./components/TeamCards/TeamCards";
import TestinonialSlide from "./components/TestinonialSlide/TestinonialSlide";
import VerticalButton from "./components/VerticalButton/VerticalButton";
import MainButton from "./components/MainButton/MainButton";
import ProjectGallery from "./components/ProjectGallery/ProjectGallery";
import CustomCTA from "./components/CustomCTA/CustomCTA";


function App() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <NavBar navItems={navItems} contactText="Contact Us" />
      <Marquee />
      <DesignCube />
      <MainSectionParagraph />
      <HeroSection />
      <CustomCTA
        name="Our Project"
      />
      <About name={"ABOUT*US"} />
      <VerticalButton />
      <RotatingDivsection />
      <KeyMetrics />
      <About name={"MEET*THE*TEAM"} />
      <VerticalButton />
      <TeamCards />
      <MainButton text={"Want to Join Our Team?"} name="Join Now" />
      <AwardsSection />
      <About name={"CUSTOMER*THOUGHTS"} />
      <VerticalButton />
      <TestinonialSlide />
      <Services />
      <MainButton
        heading={"PRICE REQUEST"}
        title={"Get a Customized Quote"}
        description={
          "Tell us about your project, and we'll provide a tailored quote to meet your needs. Our team is ready to help you elevate your brand and achieve your goals."
        }
        name="Get a Quote"
      />
      <About name={"OUR*PROJECTS"} />
      <VerticalButton />
      <FooterSection />

 
    </>
  );
}

export default App;
