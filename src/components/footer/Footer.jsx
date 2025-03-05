import logo from "../../assets/images/logo.jpeg";
const Footer = () => {
  return (
    <footer className="w-full h-fit py-8 bg-gray-950">
      <div className="container px-4 mx-auto flex flex-col justify-center items-center gap-4 sm:flex-row sm:justify-between">
        <div>
          <img className="w-44 " src={logo} alt="logo" />
        </div>
        <div>
          <span className="text-white text-lg ">
            Build by{" "}
            <a
              href="http://ezagrowllc.com/"
              target="_blank"
              className="underline"
            >
              Ezagrow LLC
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
