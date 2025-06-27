import React from "react";
import Job from "./Job.JSX";
import Partners from "./Partners";

const Topjob = () => {
  return (
    <div className="my-10 mx-36 flex flex-col">
      <p className="text-3xl text-center">
        {" "}
        <span className="font-bold text-gray-400">TOP</span> PARTNERS⎯{" "}
      </p>

      <div className="flex gap-4 flex-wrap">
        <Partners
          name="Microsoft"
          img="https://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png"
        />
        <Partners
          name="Amazon"
          img="https://pngimg.com/uploads/amazon/amazon_PNG5.png"
        />
        <Partners
          name="Facebook"
          img="https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png"
        />
        <Partners
          name="Netflix"
          img="https://static.vecteezy.com/system/resources/previews/014/018/571/non_2x/netflix-logo-on-transparent-background-free-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Topjob;
