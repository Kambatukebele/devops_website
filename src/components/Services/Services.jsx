import ServiceCard from "./ServiceCard";
import iconServiceOne from "../../assets/icons/icon-service-one.svg";
import iconServiceTwo from "../../assets/icons/icon-service-two.svg";
import iconServiceThree from "../../assets/icons/icon-service-three.svg";
import iconServiceFour from "../../assets/icons/icon-service-four.svg";

const services = [
  {
    id: 1,
    icon: iconServiceOne,
    servicesName: "Datacenter Infrastructure Field Support",
    serviceDetails: [
      "Servers",
      "Firewalls",
      "Routers",
      "Switches",
      "Rack and Cabling",
    ],
  },
  {
    id: 2,
    icon: iconServiceTwo,
    servicesName: "DevOps Integration",
    serviceDetails: ["CI/CD", "Kubernety", "Docker", "Linux", "Git"],
  },
  {
    id: 3,
    icon: iconServiceThree,
    servicesName: "Custom development",
    serviceDetails: [
      "Front-end",
      "Back-end",
      "Web App",
      "Mobile App",
      "Reactjs, nextjs",
    ],
  },
  {
    id: 4,
    icon: iconServiceFour,
    servicesName: "UI Design",
    serviceDetails: [
      "User interface",
      "User experience",
      "Design System",
      "wireframe",
      "prototype",
    ],
  },
];
const Services = () => {
  return (
    <section className="w-full h-fit">
      <div className="container px-4 mx-auto py-6 lg:py-12">
        <div className="flex flex-col justify-center items-start gap-4 py-6 lg:flex-row mb-6 lg:mb-12">
          <div className="lg:w-1/2">
            <h2 className="font-beatrice text-4xl font-semibold text-gray-900 md:text-5xl lg:text-6xl">
              Our exclusive services
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="font-Kanit text-base font-normal text-gray-700 lg:w-[450px] lg:ml-auto">
              Whether it's Crafting a visually stunning brand identity,
              designing immersive digital experiences, or developing strategic
              marketing campaigns
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:place-content-center lg:grid-cols-4">
          {services.map((service) => {
            const { id, icon, servicesName, serviceDetails } = service;
            return (
              <ServiceCard
                key={id}
                icon={icon}
                servicesName={servicesName}
                serviceDetails={serviceDetails}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
