const ServiceCard = ({ servicesName, serviceDetails, index }) => {
  return (
    <div
      className={`${
        index == 0 ? "bg-blue_600 text-white" : "bg-white"
      } flex border px-8 py-8 rounded-md shadow flex-col justify-start items-start gap-5 border-r border-r-gray-200 duration-300 hover:bg-blue_700 hover:text-white transition-all ease-in-out`}
    >
      <h3 className="text-2xl font-semibold">{servicesName}</h3>
      <ul className="flex flex-col gap-2 justify-center font-light items-start">
        {serviceDetails.map((details, index) => {
          return (
            <li
              key={index}
              className="text-base font-normal list-disc list-inside"
            >
              {details}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServiceCard;
