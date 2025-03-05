import List from "./List";

const Navigation = ({ handleNavOnSmallDevice }) => {
  return (
    <nav
      className={`${
        handleNavOnSmallDevice ? "left-0" : "-left-[1024px]"
      } absolute top-20 w-full  h-screen duration-700 ease-in-out lg:static lg:top-0 lg:h-fit`}
    >
      <ul className="bg-gray-100 z-10 w-full h-full flex flex-col gap-4 font-normal pl-4 pt-5 lg:pl-0 lg:flex-row lg:pt-0 lg:z-0 lg:justify-end lg:items-center lg:bg-transparent lg:gap-6">
        <List title="Home" />
        <List title="About us" />
        <List title="Services" />
        <List title="Faq" />
        <List title="Contact us" />
        <a
          className="block bg-blue-800 rounded-md text-white px-6 py-3 w-52 text-base normal-case cursor-pointer sm:w-80 text-center"
          href="#"
        >
          Get a 30 minute free consultation
        </a>
      </ul>
    </nav>
  );
};

export default Navigation;
