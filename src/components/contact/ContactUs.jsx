import { useForm, ValidationError } from "@formspree/react"; // from Formspree
import React from "react";
const ContactUs = () => {
  const [state, handleSubmit] = useForm("mzzekbaj"); // your form ID from Formspree

  if (state.succeeded) {
    return <p className="text-green-500 text-lg">Thanks for reaching out!</p>;
  }
  return (
    <section className="w-full bg-white py-12 lg:py-24">
      <div className="container px-4 flex flex-col justify-start items-start gap-10 xl:flex-row">
        <div className="flex flex-col justify-start items-start gap-3 xl:w-1/2">
          <h2 className="text-4xl font-extrabold text-gray_900 md:text-5xl lg:text-6xl lg:text-center">
            Contact us
          </h2>
          <p className="text-base font-normal text-gray_900 lg:text-lg">
            Our team will get back to you promptly <br /> to discuss the next
            steps
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-start items-start gap-5 xl:w-1/2"
        >
          <div className="w-full flex flex-col justify-center items-start gap-5 md:flex-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border py-4 pl-2 rounded-md w-full block"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              required
              className="border py-4 pl-2 rounded-md w-full block"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-5 md:flex-row">
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              required
              className="border py-4 pl-2 rounded-md w-full block"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
            <input
              type="text"
              name="company_name"
              placeholder="Company Name"
              className="border py-4 pl-2 rounded-md w-full block"
              required
            />
            <ValidationError
              prefix="Company_name"
              field="company_name"
              errors={state.errors}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start">
            <textarea
              rows="7"
              name="message"
              placeholder="How can we help you?"
              required
              className="border py-3 pl-2 rounded-md w-full block"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="w-full flex gap-4 justify-center items-start">
            <input type="checkbox" name="checkbox"  className="w-7 h-7" required/>
            <span className="text-sm font-normal text-gray_900">
            By submitting this form I give my consent for qubitz to process my personal data pursuant to qubitz <a href="#" className="underline">Privacy</a> and <a href="#" className="underline">Cookies</a> Policy.*
            </span>
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-5">
            <button
              type="submit"
              disabled={state.submitting}
              className="px-6 py-4 text-base font-semibold cursor-pointer lg:text-lg border  rounded-md w-44 block shadow-2xl bg-blue_600 text-white hover:bg-blue_700 hover:text-white transition ease-out duration-300"
            >
              {state.submitting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
