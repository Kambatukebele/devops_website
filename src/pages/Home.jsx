
import About from "../components/about/About";
import ContactUs from "../components/contact/ContactUs";
import Faq from "../components/Faq/Faq";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import How from "../components/how/How";
import SectionImage from "../components/SectionImage/SectionImage";
import Services from "../components/Services/Services";
import TextImage from "../components/text-image/TextImage";

const Home = () => {
  return (
    <>
         <Header />
      <Hero />
      <SectionImage />
      <About />
      <How />
      <Services />
      <TextImage />
      <ContactUs />
      <Faq />
      <Footer />
    </>
  )
}

export default Home