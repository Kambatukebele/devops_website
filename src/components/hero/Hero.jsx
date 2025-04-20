
const Hero = () => {
  return (
    <section className="w-full h-fit py-12 lg:py-24">
      <div className="container  mx-auto px-4  lg:flex lg:justify-between lg:items-start lg:gap-5">
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <div className="w-full">
            <h1 className="text-4xl text-left text-gray_900 font-bold leading-10 sm:text-center md:text-5xl lg:text-center lg:w-full lg:text-6xl lg:leading-tight">
              DevOps Consulting Services
            </h1>
          </div>
          <div className="sm:w-[550px] sm:text-center mx-auto md:w-[650px] lg:w-[800px]">
            <p className="text-base font-normal text-gray_900 sm:text-center md:text-xl">
              Solve any non-trivial challenge with DevOps consulting services
              that treat your delivery pipeline like a product.
            </p>
          </div>
          <div className="w-full items-center justify-center flex flex-col gap-2 sm:flex-row">
            <a
              className="block bg-blue_600 w-full text-white px-6 py-3 text-base normal-case cursor-pointer font-medium sm:w-48 text-center hover:bg-blue_700 hover:text-white transition ease-out duration-300 rounded-md"
              href="#"
            >
              Free consultation
            </a>
            <a
              className="block bg-blue_200 w-full text-blue_600 px-6 py-3 text-base normal-case cursor-pointer font-medium sm:w-48 text-center hover:bg-blue-100 transition ease-out duration-300 rounded-md"
              href="#"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
