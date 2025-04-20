import image from "../../assets/images/devops.jpg";
const SectionImage = () => {
  return (
    <section className="container px-4 rounded-2xl h-full md:h-[400px] lg:h-[600px]">
      <img
        className="w-full h-full block object-cover object-center rounded-xl"
        src={image}
        alt="image"
      />
    </section>
  );
};

export default SectionImage;
