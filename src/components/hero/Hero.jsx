import arrow from "../../assets/icons/arrow.svg";

const Hero = () => {
  return (
    <section className="w-full h-fit py-12 lg:py-24">
      <div className="container  mx-auto px-4  lg:flex lg:justify-between lg:items-start lg:gap-5">
        <div className="mb-5 lg:w-2/5 lg:py-0">
          <span className="border-b-blue-50 border w-full block sm:w-80 md:w-96"></span>
          <div className="flex justify-between items-center w-full sm:w-80 md:w-96">
            <p className="text-lg text-gray-900 pt-5">
              Accelerate Your Software Delivery with Expert DevOps Consulting
            </p>
            <span className="shrink-0 block">
              <img src={arrow} alt="arrow" />
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center sm:items-start lg:w-3/4 lg:gap-6">
          <div>
            <h1 className="text-4xl text-blue-900 font-bold leading-10 sm:w-[450px] md:w-[600px] md:text-5xl lg:w-full  lg:text-6xl lg:leading-tight 2xl:text-8xl">
              DevOps Consulting Services
            </h1>
          </div>
          <div className="sm:w-96 md:w-[600px] ml-auto">
            <p className="text-base font-normal text-gray-900 md:text-xl lg:text-2xl">
              Solve any non-trivial challenge with DevOps consulting services
              that treat your delivery pipeline like a product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
