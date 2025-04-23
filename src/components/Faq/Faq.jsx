import { useState } from "react";
import chevron from "../../assets/icons/chevron.svg";
const faqs = [
  {
    id: 1,
    question: "What is the cost of implementing DevSecOps?",
    response:
      "The cost of implementing DevSecOps depends on several factors, including the size of your organization, the complexity of your applications, and the level of support you require. We offer customized solutions and can work within your budget to ensure you get the best value. Contact us for a consultation, and we’ll provide a tailored proposal.",
  },
  {
    id: 2,
    question:
      "Can you help us integrate DevSecOps into our existing workflows?",
    response:
      "Yes, we specialize in integrating DevSecOps into existing DevOps workflows, regardless of your current setup. We’ll assess your current processes, recommend improvements, and guide you through the integration of security tools, practices, and policies. Whether you’re starting from scratch or looking to enhance your current pipeline, we can help streamline the transition.",
  },
  {
    id: 3,
    question: "How do you ensure compliance with security regulations?",
    response:
      "Our DevSecOps processes are designed to meet the requirements of various security regulations, such as:",
    bullet_points: ["GDPR", "HIPAA", "SOC 2", "PCI DSS", " ISO/IEC 27001"],
    extra_response:
      "We perform regular audits, implement automated compliance checks, and provide reports to help you maintain and demonstrate compliance.",
  },
  {
    id: 4,
    question: "What are the benefits of adopting DevSecOps?",
    response:
      "Adopting DevSecOps provides several advantages:Improved Security: Integrates security early, reducing vulnerabilities and risks.Faster Development Cycles: Automates security testing within CI/CD pipelines, speeding up the development process. Better Compliance: Helps ensure your software meets compliance standards like:",
    bullet_points: ["GDPR", "HIPAA", "SOC2"],
    extra_response:
      "Cost Reduction: Identifies and fixes security issues early, reducing the cost of addressing vulnerabilities later in the lifecycle.Collaboration: Encourages better collaboration between development, security, and operations teams.",
  },
  {
    id: 5,
    question:
      "DevSecOps ensures that security is not an afterthought, but an integral part of development from the start. By incorporating security into every stage of software development, your organization can:",
    response:
      "Reduce vulnerabilities and security risks.Improve compliance with industry regulations. Increase operational efficiency. Enable faster releases with less security debt. Promote a proactive security culture across the development team.",
  },
  {
    id: 6,
    question: "What is DevSecOps?",
    response:
      "DevSecOps is a modern approach to software development that integrates security practices into every phase of the DevOps lifecycle. It ensures that security is a shared responsibility across development, operations, and security teams—rather than being an afterthought. By automating security checks, performing continuous monitoring, and embedding compliance into CI/CD pipelines, DevSecOps helps organizations build faster, safer, and more resilient applications.",
  },
  {
    id: 7,
    question: "How does DevSecOps differ from traditional security practices?",
    response:
      "Traditional security practices often focus on manual, post-development processes such as penetration testing and code reviews. In contrast, DevSecOps incorporates automated security into the continuous delivery pipeline, ensuring that security controls are continuously applied and validated from the start. Key differences include:",
    bullet_points: [
      "Shift Left: Security is addressed earlier in the development lifecycle rather than as a final step.",
      "Automation: Security controls are automated through tooling, reducing human error and increasing efficiency.",
      "Continuous Monitoring: Ongoing monitoring and vulnerability assessments ensure that security risks are identified in real time, even after deployment.",
    ],
  },
];

const Faq = () => {
  const [toggleFaq, setToggleFaq] = useState(null);

  //Toogle func
  const toggleFunc = (index) => {
    setToggleFaq(toggleFaq === index ? null : index);
  };
  return (
    <section id="faq" className="w-full bg-gray_100 h-fit py-12 lg:py-24">
      <div className="container px-4 mx-auto flex flex-col justify-start items-start gap-8 lg:gap-32 lg:items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl lg:text-center">
            Frequently Asked <br /> Questions
          </h2>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-10">
          {faqs.map((faq, index) => {
            const { id, question, response, bullet_points, extra_response } =
              faq;
            return (
              <div
                key={id}
                className="w-full flex flex-col justify-start items-start gap-4 relative"
              >
                <div className="flex justify-between items-center w-full">
                  <h4 className="text-base sm:text-xl font-semibold text-gray-900 w-2/3">
                    {question}
                  </h4>
                  <div
                    onClick={() => {
                      toggleFunc(index);
                    }}
                    className="w-8 h-8 flex justify-center items-center  bg-blue_600 rounded-full text-white shrink-0"
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
                  className={`text-gray_900 w-2/3 font-normal text-base duration-700 ease-in-out ${
                    toggleFaq === index
                      ? "h-44 max-h-full opacity-100 mb-10"
                      : "h-0 opacity-0"
                  }`}
                >
                  {response}
                  {bullet_points && (
                    <ul className="my-5 list-disc list-inside">
                      {bullet_points.map((point) => {
                        return <li>{point}</li>;
                      })}
                    </ul>
                  )}
                  {extra_response && <p>{extra_response}</p>}
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
