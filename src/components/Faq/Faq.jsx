import { useState } from "react";
import chevron from "../../assets/icons/chevron.svg";
const faqs = [
  {
    id: 1,
    question: "What is the main goal of DevOps?",
    response:
      "The main reason organizations adopt DevOps is to deliver products and services to market faster. DevOps aims to streamline the entire development process and foster tighter collaboration between teams working on different stages of the product lifecycle. Companies frequently look to bring on an expert DevOps solutions partner to help them realize these benefits of faster delivery, more efficient processes, and closer cross-functional teamwork across the value stream. An experienced provider can guide organizations through transforming their culture, tools, and practices to embrace a DevOps methodology that improves speed, quality, and customer satisfaction.",
  },
  {
    id: 2,
    question: "What are the main benefits companies see from adopting DevOps?",
    response:
      "Adopting DevOps can provide many benefits including faster time-to-market for new features and releases, reduced errors and outages through continuous testing and monitoring, improved software quality and security through modern development practices, enhanced collaboration between cross-functional teams, and better customer satisfaction from rapid delivery of value.",
  },
  {
    id: 3,
    question: "What cultural changes involve DevOps?",
    response:
      "To successfully adopt DevOps, organizations need cultural shifts away from siloed, legacy team structures towards collaboration, shared responsibilities and end-to-end ownership across the software delivery lifecycle. It involves instilling a culture of automation, continuous experimentation and learning powered by data-driven insights.",
  },
  {
    id: 4,
    question: "What are common DevOps tools?",
    response:
      "Typical DevOps tooling includes version control systems like Git for source code management, continuous integration/delivery (CI/CD) tools like Jenkins for automation, infrastructure as code tools like Terraform for provisioning, configuration management using Chef or Puppet, containers and orchestrators like Docker and Kubernetes, monitoring tools like Prometheus, and collaboration platforms like Slack.",
  },
  {
    id: 5,
    question: "How to measure DevOps ROI?",
    response:
      "DevOps return on investment can be measured through metrics like lead time from code commit to production, deployment frequency, time to restore service after incidents, and change failure rate. Other indicators include productivity metrics like features delivered, faster innovation, improved customer retention from reliable updates.",
  },
  {
    id: 6,
    question: "Do you need to rearchitect for DevOps?",
    response:
      "Transitioning legacy applications to cloud-native architectures provides the most agility. But adopting DevOps can also be done incrementally with existing systems through “strangling” monoliths. However, organizations may eventually replatform on containers and microservices to fully optimize workflows.",
  },
  {
    id: 7,
    question: "How long are DevOps implementations?",
    response:
      "There is no fixed duration for adopting DevOps since it is an evolving cultural and technological transition. Transformations can take months or years of gradual, continuous improvement. Avoid big bang deployments in favor of incrementally automating processes one step at a time.",
  },
  {
    id: 8,
    question: "How long are DevOps implementations?",
    response:
      "There is no fixed duration for adopting DevOps since it is an evolving cultural and technological transition. Transformations can take months or years of gradual, continuous improvement. Avoid big bang deployments in favor of incrementally automating processes one step at a time.",
  },
  {
    id: 9,
    question: "What are typical DevOps engineer responsibilities?",
    response:
      "DevOps engineers are responsible for creating automated workflows and CI/CD pipelines, building and managing infrastructure as code, configuring and integrating development, testing, and production environments, implementing monitoring and observability, collaborating with developers and ops teams, and helping debug issues with rapid feedback",
  },
  {
    id: 10,
    question: "Why choose RTS Labs?",
    response:
      "At RTS Labs, we have over a decade of DevOps Excellence. When it comes to DevOps transformation, experience isn’t just a metric—it’s a promise of quality, reliability, and innovation. With over 10 years of industry-leading expertise, RTS Labs has been at the forefront of DevOps evolution. Our seasoned professionals have successfully navigated complex DevOps challenges across diverse industries, from healthcare and finance to technology and retail. But we don’t rest on our laurels; we continually invest in upskilling and R&D to ensure that you benefit from the latest advancements in DevOps methodologies and tools. Choose RTS Labs and align yourself with a partner who has a proven track record of delivering excellence.",
  },
];

const Faq = () => {
  const [toggleFaq, setToggleFaq] = useState(null);

  //Toogle func
  const toggleFunc = (index) => {
    setToggleFaq(toggleFaq === index ? null : index);
  };
  return (
    <section className="w-full bg-white h-fit py-8 lg:py-16">
      <div className="container px-4 mx-auto flex flex-col justify-start items-start gap-8 lg:gap-32 lg:items-center">
        <div>
          <h2 className="text-4xl font-bold text-blue-900 md:text-5xl lg:text-6xl lg:text-center">
            Frequently Asked <br /> Questions
          </h2>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-10">
          {faqs.map((faq, index) => {
            const { id, question, response } = faq;
            return (
              <div
                key={id}
                className="w-full flex flex-col justify-start items-start gap-4"
              >
                <div className="flex justify-between items-center w-full">
                  <h4 className="text-base sm:text-2xl font-semibold text-blue-900">
                    {question}
                  </h4>
                  <div
                    onClick={() => {
                      toggleFunc(index);
                    }}
                    className="w-8 h-8 flex justify-center items-center bg-blue-900 rounded-full text-white shrink-0"
                  >
                    <img
                      className={`cursor-pointer ${
                        toggleFaq === index
                          ? "rotate-180 duration-500 ease-in-out"
                          : "rotate-0"
                      }`}
                      src={chevron}
                      alt="chevron icon"
                    />
                  </div>
                </div>
                <div
                  className={`text-gray-900 font-normal text-base duration-500 ease-in-out ${
                    toggleFaq === index ? "block" : "hidden"
                  }`}
                >
                  {response}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
