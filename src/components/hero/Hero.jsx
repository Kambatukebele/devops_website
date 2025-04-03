import arrow from "../../assets/icons/arrow.svg";

const Hero = () => {
  return (
    <section className="w-full h-fit py-12 lg:py-24">
      <div className="container  mx-auto px-4  lg:flex lg:justify-between lg:items-start lg:gap-5">
        <div className="w-full flex flex-col gap-4 justify-center items-center lg:gap-6">
          <div className="w-full">
            <h1 className="text-4xl text-left text-blue-950 font-bold leading-10 sm:text-center md:text-5xl lg:text-center lg:w-full lg:text-6xl lg:leading-tight">
              DevOps Consulting Services
            </h1>
          </div>
          <div className="sm:w-[550px] sm:text-center mx-auto md:w-[650px] lg:w-[800px]">
            <p className="text-base font-normal text-gray-800 sm:text-center md:text-xl lg:text-2xl">
              Solve any non-trivial challenge with DevOps consulting services
              that treat your delivery pipeline like a product.
            </p>
          </div>
          <div className="w-full sm:items-center sm:justify-center sm:flex">
            <a
              className="block bg-blue-900 w-full rounded-md shadow-2xl text-white px-6 py-5 text-base normal-case cursor-pointer lg:text-lg sm:w-80 text-center hover:bg-blue-950 hover:text-white transition ease-out duration-300"
              href="#"
            >
              Free consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
