import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
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
    <section id="services" className="w-full h-fit bg-white py-12 lg:py-24">
      <div className="container px-4 mx-auto flex flex-col justify-start items-start gap-8 lg:gap-32 lg:items-center">
        <div className="flex flex-col justify-center items-start gap-4 w-full lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-extrabold text-gray_900 md:text-5xl lg:text-6xl">
              Our exclusive <br /> solutions
            </h2>
          </div>
          <div className="lg:w-1/2">
            {/* <p className="text-base font-normal text-gray-800 lg:w-[450px] lg:ml-auto">
              Whether it's Crafting a visually stunning brand identity,
              designing immersive digital experiences, or developing strategic
              marketing campaigns
            </p> */}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:place-content-center lg:grid-cols-4">
          {services.map((service, index) => {
            return <ServiceCard key={service.id} index={index} {...service} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
