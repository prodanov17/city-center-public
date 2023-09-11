import React from "react";
import { ContactIcon } from "../../assets/Icons";
import Footer from "../../components/Footer";
import Card from "../../UI/Card";
import Input from "../../UI/Input";
import Loader from "../../UI/Loader";

const Contact = () => {
  //   document.getElementById("navbar").style.backgroundColor = "transparent";
  return (
    <>
      <section className="w-full pt-24 flex flex-col gap-4 justify-center items-center bg-gradient-to-b bg-sky-700 from-white h-max md:h-screen">
        <Card bgColor="bg-white w-5/6 md:w-max md:px-20 sm:px-12 px-8 py-6 sm:py-8 mt-16 md:flex items-center gap-20">
          <span className="hidden md:block">
            <ContactIcon />
          </span>
          <div>
            <h1 className="text-center text-2xl font-medium mb-4">
              Contact Us
            </h1>
            <div className="flex flex-col gap-2 mb-4">
              <label
                htmlFor="name-field"
                className="font-semibold font-[outfit] text-sm"
              >
                Name
              </label>
              <input
                className="p-2 rounded-lg border border-neutral-400 bg-neutral-100 focus:bg-neutral-50 focus:ring-1 focus:ring-sky-800"
                type="text"
                name="name"
                placeholder="John Doe"
                id="name-field"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label
                htmlFor="email-field"
                className="font-semibold font-[outfit] text-sm"
              >
                Email
              </label>
              <input
                className="p-2 rounded-lg border border-neutral-400 bg-neutral-100 focus:bg-neutral-50 focus:ring-1 focus:ring-sky-800"
                type="email"
                name="email"
                placeholder="johndoe@example.com"
                id="email-field"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label
                htmlFor="message-field"
                className="font-semibold font-[outfit] text-sm"
              >
                Message
              </label>
              <textarea
                className="p-2 rounded-lg border border-neutral-400 bg-neutral-100 focus:bg-neutral-50 focus:ring-1 focus:ring-sky-800"
                name="message"
                placeholder="How can we help you?"
                id="message-field"
              />
            </div>
            <button className="rounded py-2 flex justify-center bg-sky-900 text-white w-full font-medium">
              Submit
            </button>
          </div>
        </Card>
        <Footer classes="w-full mt-4 bg-transparent" />
      </section>
    </>
  );
};

export default Contact;
