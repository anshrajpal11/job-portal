import React from "react";

const Discount = () => {
  return (
    <div className="flex flex-col mx-2 md:mx-36 justify-center items-center my-10 md:my-30">
      <p className="text-[1.25rem] md:text-[1.5rem] font-bold text-gray-800 my-1 text-center">
        Subscribe now to receive job mails
      </p>
      <p className="text-[0.75rem] text-gray-400 my-1 text-center">
        we are providing flat 20% off , just provide your mail.
      </p>
      <form className="w-full sm:w-3/4 md:w-1/2 flex flex-col sm:flex-row items-center gap-3 mx-auto my-6 border pl-3">
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
  );
};

export default Discount;
