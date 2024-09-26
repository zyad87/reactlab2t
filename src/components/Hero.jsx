import React from 'react';
import HeroImg from '../assets/hero.png';

function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-neutral-content flex max-w-[80rem] gap-[1rem] p-[1rem] w-screen">
        <div className="flex flex-col items-start justify-center text-wrap">
          <h1 className="mb-5 text-3xl font-bold text-left md:w-full">
            FreshGoods
          </h1>
          <p className="mb-5 text-6xl text-left tracking-widest w-6/12 text-wrap">
            Concisely describe your product or service
          </p>
          <p className="mb-5 w-1/2 ">
            No need to get clever. Tell people exactly what you're offering,
            then use this space to communicate your key value proposition.
          </p>
          <button className="btn btn-warning bg-[#FFB400] px-10 py-2 max-sm:px-20">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
