import ServiceCard from "./ServiceCard";
import iconServiceOne from "../../assets/icons/icon-service-one.svg";
import iconServiceTwo from "../../assets/icons/icon-service-two.svg";
import iconServiceThree from "../../assets/icons/icon-service-three.svg";
import iconServiceFour from "../../assets/icons/icon-service-four.svg";

const services = [
  {
    id: 1,
    icon: iconServiceOne,
    servicesName: "DevOps automation",
    serviceDetails: [
      "Infrastructure as Code",
      "CI/CD",
      "Serverless adoption",
      "Improved collaboration",
      "Containerization & Orchestration",
      "Reduced operational tasks",
    ],
  },
  {
    id: 2,
    icon: iconServiceTwo,
    servicesName: "Audit and consulting",
    serviceDetails: [
      "Aws consulting",
      "Azure consulting",
      "Cloud cost audi",
      "DevOps team mentoring",
      "Infrastructure modernization",
      "Test automation review",
    ],
  },
  {
    id: 3,
    icon: iconServiceThree,
    servicesName: "Cloud migration",
    serviceDetails: [
      "Legacy application migration",
      "Risk mitigation",
      "Ongoing support",
      "Cloud-to-cloud migration",
      "Security improvements",
      "Multi-cloud expertise",
    ],
  },
  {
    id: 4,
    icon: iconServiceFour,
    servicesName: "Logs management, monitoring, and alerting",
    serviceDetails: [
      "Logs collection, parsing, and transformation",
      "Real-time alerting",
      "Log & metrics visualization",
      "24/7 system health monitoring",
    ],
  },
  {
    id: 5,
    icon: iconServiceFour,
    servicesName: "Deployment of large-scale K8s clusters",
    serviceDetails: [
      "Faster development with standard Terraform project structure",
      "Minimized architecture-related security risks",
      "Unlimited auto-scaling",
      "Easy container orchestration",
      "Savings with K8s & Spot Instances",
    ],
  },
  {
    id: 6,
    icon: iconServiceFour,
    servicesName: "Migration to GitLab for easy compliance",
    serviceDetails: [
      "Easy on-premise GitLab deployment",
      "Integration with self-hosted runners to save costs",
      "Simplified compliance and audit trails",
      "Lower business risks",
    ],
  },
  {
    id: 7,
    icon: iconServiceFour,
    servicesName: "Cloud cost optimization",
    serviceDetails: [
      "Cloud infrastructure audit",
      "Architecture optimization",
      "Resource rightsizing",
      "Cloud storage optimization ",
    ],
  },
];
const Services = () => {
  return (
    <section className="w-full h-fit bg-white py-8 lg:py-16">
      <div className="container px-4 mx-auto flex flex-col justify-start items-start gap-8 lg:gap-32 lg:items-center">
        <div className="flex flex-col justify-center items-start gap-4 w-full lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-blue-900 md:text-5xl lg:text-6xl">
              Our exclusive <br /> services
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base font-normal text-gray-800 lg:w-[450px] lg:ml-auto">
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
