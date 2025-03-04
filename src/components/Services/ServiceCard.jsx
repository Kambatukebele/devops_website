const ServiceCard = ({ id, icon, servicesName, serviceDetails }) => {
  return (
    <div className="flex flex-col justify-center items-start gap-4 border-r border-r-gray-200">
      <div>
        <img src={icon} alt={servicesName} />
      </div>
      <h3 className="font-beatrice text-2xl font-semibold text-gray-900">
        {servicesName}
      </h3>
      <ul className="flex flex-col gap-2 justify-center font-light items-start">
        {serviceDetails.map((details) => {
          return (
            <li className="font-Kanit text-base list-disc ml-5">{details}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServiceCard;
