import List from "./List";

const Navigation = ({ handleNavOnSmallDevice }) => {
  return (
    <nav
      className={`${
        handleNavOnSmallDevice ? "left-0" : "-left-[1024px]"
      } absolute top-16 w-full  h-screen duration-700 ease-in-out lg:static lg:top-0 lg:h-fit`}
    >
      <ul className="bg-gray-100 z-10 w-full h-full flex flex-col gap-4 font-normal pl-4 pt-5 lg:pl-0 lg:flex-row lg:pt-0 lg:z-0 lg:justify-end lg:items-center lg:bg-transparent lg:gap-6">
        <List title="About us" link="#about" />
        <List title="Services" link="#services" />
        <List title="Faq" link="#faq" />
        <List title="Contact us" link="#contact" />
      </ul>
    </nav>
  );
};

export default Navigation;
