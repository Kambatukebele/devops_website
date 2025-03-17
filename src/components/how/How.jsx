const helpServices = [
  {
    id: 1,
    title: "Scaling and maintaining complex systems",
    description:
      "We can help you integrate data from fragmented systems, refactor legacy code, and optimize infrastructure to better address your needs.",
  },
  {
    id: 2,
    title: "Cloud costs going out of control",
    description:
      "Companies waste, on average, 28% of cloud budgets. MindK has saved our clients hundreds of thousands of dollars by implementing the best FinOps practices.",
  },
  {
    id: 3,
    title: "Infrastructure automation gone wrong",
    description:
      "Infrastructure as Code (IaC) is often inefficient when done by inexperienced teams. MindK has extensive expertise with IaC refactoring and built a modular Terraform framework that standardizes all DevOps processes.",
  },
  {
    id: 4,
    title: "Security and compliance",
    description:
      "Our DevOps engineers follow the AWS well-architected framework and NIST guidelines to address security and HIPAA/GDPR compliance through the entire SDLC.",
  },
  {
    id: 5,
    title: "Measuring what really matters",
    description:
      "DevOps covers many tasks in different teams that need to work together and have their own metrics. We can integrate tools like Datadog to measure your key metrics.",
  },
  {
    id: 6,
    title: "Resistance, lack of collaboration, and more",
    description:
      "Make your operations, developers, and testers work in tandem with the help of experienced DevOps consultants.",
  },
  {
    id: 7,
    title: "Resistance, lack of collaboration, and more",
    description:
      "Make your operations, developers, and testers work in tandem with the help of experienced DevOps consultants.",
  },
  {
    id: 8,
    title: "Resistance, lack of collaboration, and more",
    description:
      "Make your operations, developers, and testers work in tandem with the help of experienced DevOps consultants.",
  },
];
const How = () => {
  return (
    <section className="w-full bg-gray-50 h-fit py-8 lg:py-16">
      <div className="container px-4 mx-auto flex flex-col justify-start items-start gap-8 lg:gap-32 lg:items-center">
        <div className="flex flex-col justify-center items-start gap-4 w-full lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-extrabold text-blue md:text-5xl lg:text-6xl">
              What can we <br /> help with?
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base font-normal text-gray-800 lg:w-[450px] lg:ml-auto">
              Since 2009, our DevOps consulting company worked with enterprises
              and scale-ups. Our engineers gained expertise on a variety of
              technologies, serveless, K8s, and on-prem deployment on 170+
              projects.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:place-content-center lg:grid-cols-3 xl:grid-cols-4">
          {helpServices.map((helpService, index) => {
            const { id, title, description } = helpService;
            return (
              <div
                key={id}
                className={`${
                  index == 0 ? "bg-blue text-white" : "bg-white"
                } flex flex-col justify-start items-start gap-6 border py-4 px-6 hover:shadow-lg duration-300 hover:bg-blue hover:text-white transition-all ease-in-out rounded-lg lg:py-5`}
              >
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="font-normal text-base md:text-lg">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default How;
