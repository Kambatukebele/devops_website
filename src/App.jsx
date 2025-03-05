import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import SectionImage from "./components/SectionImage/SectionImage";
import Services from "./components/Services/Services";
import TextImage from "./components/text-image/TextImage";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <SectionImage />
      <Services />
      <TextImage />
      <TextImage reverseRow={1} />
    </>
  );
};

export default App;
