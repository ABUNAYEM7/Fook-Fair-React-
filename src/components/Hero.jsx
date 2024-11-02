import React from "react";
import bannerImage from '../assets/Banner.jpg'

const Hero = () => {
  return (
    <div className="hero bg-base-200 md:h-[510px] rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
        <img
        className="w-96 h-96 object-fill rounded-xl"
          src= {bannerImage}
        />
        </div>
        <div className="space-y-10">
          <h1 className="text-5xl font-bold md:w-4/6">Books to freshen up your bookshelf</h1>
          <button className="btn bg-[#23BE0A] text-white hover:text-[#23BE0A]">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
