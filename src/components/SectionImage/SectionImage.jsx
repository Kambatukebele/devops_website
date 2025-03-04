import image from "../../assets/images/devops.jpeg";
const SectionImage = () => {
  return (
    <section className="w-full h-full md:h-[400px] lg:h-[500px]">
      <img
        className="w-full h-full block object-cover object-center"
        src={image}
        alt="image"
      />
    </section>
  );
};

export default SectionImage;
