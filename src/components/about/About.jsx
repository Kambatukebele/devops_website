const About = () => {
  return (
    <section id="about" className="w-full bg-white h-fit py-12 lg:py-24">
      <div className="container px-4 mx-auto">
        <div>
          <h3 className="text-xl text-gray-800 leading-loose font-normal sm:text-3xl sm:leading-normal lg:leading-[50px]">
            Since 2018,
            <span className="px-2 font-semibold">qubitz</span>, our DevOps
            consulting firm has collaborated with enterprises and scale-ups,
            providing expertise across
            <span className="px-2 bg-blue-900 text-white">170+ projects</span>.
            Our engineers excel in
            <span className="px-2 font-semibold">serverless architectures</span>
            ,<span className="px-2 font-semibold">Kubernetes</span>, and
            <span className="px-2 font-semibold">on-premise deployments</span>.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
