import About from "./components/about/About";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import SectionImage from "./components/SectionImage/SectionImage";
import Services from "./components/Services/Services";
import TextImage from "./components/text-image/TextImage";
import How from "./components/how/How";
import Faq from "./components/Faq/Faq";
import Footer from "./components/footer/Footer";
import ContactUs from "./components/contact/ContactUs";
// const otherServices = [
//   {
//     id: 1,
//     title: "Transform digital product development with Digital Factory",
//     description: "Looking to standardise and automate your software development processes – for faster, higher-quality releases? Discover how Zühlke’s Digital Factory can help you drive efficiencies, boost customer satisfaction, and accelerate time to market."
//   },
//   {
//     id: 2,
//     title: "Migros rapidly stabilises business-critical software",
//     description: "Our software specialists performed open-heart surgery to stabilise the POS system for Switzerland’s largest retail company and supermarket chain."
//   }
// ]
const App = () => {
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
  );
};

export default App;
