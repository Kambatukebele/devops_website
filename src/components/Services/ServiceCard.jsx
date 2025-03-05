const ServiceCard = ({ id, icon, servicesName, serviceDetails }) => {
  return (
    <div className="flex border px-8 py-4 rounded-md shadow flex-col justify-start items-start gap-4 border-r border-r-gray-200">
      <div>
        <img src={icon} alt={servicesName} />
      </div>
      <h3 className="text-2xl font-semibold text-blue-900">{servicesName}</h3>
      <ul className="flex flex-col gap-2 justify-center font-light items-start">
        {serviceDetails.map((details, index) => {
          return (
            <li
              key={index}
              className="text-base text-gray-800 font-normal list-disc list-inside"
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
