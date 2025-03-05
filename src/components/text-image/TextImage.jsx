import compare from "../../assets/images/compare.webp";
// the reverseRow is just to reverse the image and image position
const TextImage = () => {
  return (
    <section className="w-full h-full bg-gray-50 py-8 lg:py-16">
      <div className="container px-4 mx-auto flex flex-col justify-start items-start lg:items-center">
        <div className="flex flex-col justify-start items-start gap-6 lg:flex-row xl:items-center">
          <div className="w-full flex flex-col justify-center items-start gap-4 lg:w-1/2">
            <h2 className="text-3xl font-semibold text-blue-900 md:text-4xl lg:text-5xl">
              DevSecOps
            </h2>
            <p className="text-base font-normal text-gray-800 md:text-lg">
              We integrate security directly into the DevOps pipeline, making it
              a core part of development instead of an afterthought. DevSecOps
              leverages automation to drive agility, security, and speed,
              ensuring continuous compliance and reducing vulnerabilities
              throughout the software development lifecycle.
            </p>
            <a className="bg-blue-900 text-white py-4 px-8 rounded-md text-base shadow-2xl cursor-pointer">
              Contact us
            </a>
          </div>
          <div className="w-full h-full rounded-md lg:w-1/2">
            <img
              className="w-full h-full object-cover object-center rounded-md"
              src={compare}
              alt="image office"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextImage;
