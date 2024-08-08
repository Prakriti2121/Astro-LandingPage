import React from "react";
import Button from "./Button";

const ContactUs = () => {
  return (
    <section
      id="contactus"
      className="mt-16 mx-4 sm:mx-8 md:mx-12 lg:mx-32 p-4 sm:p-6 rounded-lg "
    >
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col">
          <div className="space-y-3 text-xl md:text-2xl text-primary">
          <div className="text-4xl  text-primary font-normal font-serif">
            <h3>Voice for Being Together</h3>
          </div>
            <p className="font-sans text-sm lg:text-base text-center md:text-left text-black py-2">
              We, together can make this earth beautiful and need to make a
              voice united.
            </p>
          </div>

          <form className="flex flex-col space-y-4">
            <label htmlFor="email" className="font-sans text-lg">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-400 rounded-lg"
                required
              />
            </label>
            <label htmlFor="message" className="font-sans text-lg">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full p-2 border border-gray-400 rounded-lg"
                required
              ></textarea>
            </label>
            <div className="pt-2 flex justify-center md:justify-start">
              <Button variant="rounded">Submit</Button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 p-4 sm:p-6 flex justify-center items-center">
          <img
            src="../public/images/assets/prosandcons.png"
            alt="Pros and Cons"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
