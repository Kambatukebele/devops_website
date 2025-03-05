import compare from "../../assets/images/compare.webp";
// the reverseRow is just to reverse the image and image position
const TextImage = ({ reverseRow }) => {
  console.log(reverseRow);

  return (
    <section className="w-full h-full py-6 lg:py-12">
      <div
        className={`container mx-auto px-4 flex ${
          reverseRow
            ? "flex-col-reverse lg:flex-row-reverse"
            : "flex-col lg:flex-row"
        }  justify-center items-start gap-9`}
      >
        <div className="w-full flex flex-col justify-center items-start gap-4 lg:w-1/2">
          <h2 className="text-3xl font-semibold font-beatrice text-gray-900 md:text-4xl lg:text-5xl">
            Creating one of the fastest way to grow your business successfully
          </h2>
          <p className="text-base font-light font-Kanit text-gray-700 md:text-lg">
            We believe that the human dimensions essential to start any
            successful project and that this is where splendid emotional
            relationships between the company and people are born
          </p>
          <ul className="flex flex-col justify-center items-start list-decimal list-inside gap-2">
            <li className="text-gray-900 font-beatrice font-semibold">
              Visual project management
            </li>
            <li className="text-gray-900 font-beatrice font-semibold">
              Team collaboration
            </li>
            <li className="text-gray-900 font-beatrice font-semibold">
              Connection to company
            </li>
            <li className="text-gray-900 font-beatrice font-semibold">
              Connection to company
            </li>
            <li className="text-gray-900 font-beatrice font-semibold">
              Connection to company
            </li>
          </ul>
        </div>
        <div className="w-full h-full lg:w-1/2">
          <img
            className="w-full h-full object-cover object-center"
            src={compare}
            alt="image office"
          />
        </div>
      </div>
    </section>
  );
};

export default TextImage;
