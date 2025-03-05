import arrow from "../../assets/icons/arrow.svg";

const Hero = () => {
  return (
    <section className="w-full h-fit">
      <div className="container py-12 mx-auto px-4 lg:py-20 lg:flex lg:justify-between lg:items-start lg:gap-5">
        <div className="mb-5 lg:w-2/5 lg:py-0">
          <span className="border-b-black border w-full block sm:w-80 md:w-96"></span>
          <div className="flex justify-between items-center w-full sm:w-80 md:w-96">
            <p className="text-lg font-beatrice pt-5">
              Building outstanding design, development and strategy
            </p>
            <span className="shrink-0 block">
              <img src={arrow} alt="arrow" />
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center sm:items-start lg:w-3/4 lg:gap-6">
          <div>
            <h1 className="text-4xl text-gray-900 font-bold leading-10 font-beatrice sm:w-[450px] md:w-[600px] md:text-5xl lg:w-full  lg:text-6xl lg:leading-tight 2xl:text-8xl">
              DevOps Consulting Services
            </h1>
          </div>
          <div className="sm:w-96 md:w-[600px] ml-auto">
            <p className="text-base font-normal text-gray-800 md:text-xl lg:text-2xl">
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
