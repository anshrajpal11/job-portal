import React from "react";
import contact_img from "../../assets/contact_img.jpg";
import { toast } from "react-toastify";

const Contact = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Subscribed successfully!");
  };

  const handleExploreJobs = () => {
    toast.info("Explore jobs feature coming soon!");
  };

  return (
    <div className="px-4 mb-5">
      <div className="text-center text-2xl pt-10 border-t">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500">
            CONTACT <span className="text-gray-700 font-medium">US</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full max-w-md md:w-[50rem] mx-auto"
          src={contact_img}
          alt="Contact"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0132 <br /> Email: admin@forever.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button
            className="border border-black bg-black text-white px-8 py-4 text-sm hover:bg-white hover:text-black transition-all duration-200"
            onClick={handleExploreJobs}
          >
            Explore Jobs
          </button>
        </div>
      </div>

      <div className="text-center">
        <p className="text-2xl font-medium text-gray-800">
          Subscribe now & get 20% off
        </p>
        <p className="text-gray-400 mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <form
          className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
          onSubmit={handleSubscribe}
        >
          <input
            className="w-full sm:flex-1 outline-none"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="bg-black text-white text-xs px-10 py-4"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
