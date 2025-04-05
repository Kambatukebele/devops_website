import React from "react";

const ContactUs = () => {
  return (
    <section className="w-full bg-gray-50 py-12 lg:py-24">
      <div className="container px-4 flex flex-col justify-start items-start gap-10 xl:flex-row">
        <div className="flex flex-col justify-start items-start gap-3 xl:w-1/2">
          <h2 className="text-4xl font-extrabold text-blue-950 md:text-5xl lg:text-6xl lg:text-center">
            Contact us
          </h2>
          <p className="text-base font-normal text-blue-950 lg:text-lg">
            Our team will get back to you promptly <br /> to discuss the next
            steps
          </p>
        </div>
        <form
          className="w-full flex flex-col justify-start items-start gap-5 xl:w-1/2"
          action=""
        >
          <div className="w-full flex flex-col justify-center items-start gap-5 md:flex-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border py-4 pl-2 rounded-md w-full block"
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="border py-4 pl-2 rounded-md w-full block"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-5 md:flex-row">
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              className="border py-4 pl-2 rounded-md w-full block"
            />
            <input
              type="text"
              name="company_name"
              placeholder="Company Name"
              className="border py-4 pl-2 rounded-md w-full block"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start">
            <textarea
              rows="7"
              name="message"
              placeholder="Describe your idea"
              className="border py-3 pl-2 rounded-md w-full block"
            ></textarea>
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-5">
            <button
              type="submit"
              className="px-6 py-4 text-base cursor-pointer lg:text-lg border  rounded-md w-full block shadow-2xl uppercase bg-blue-900 text-white hover:bg-blue-950 hover:text-white transition ease-out duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
