import React from 'react';

import bgCustomers from '../assets/bgCustomers.png';

function OurCustomers() {
  return (
    <div
      className="hero min-h-[80vh] my-5"
      style={{
        backgroundImage: `url(${bgCustomers})`,
      }}
    >
      <div className=""></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-4/5 flex flex-col gap-5 items-center">
          <h1 className="text-2xl font-bold pt-5">What our customers say</h1>
          <h1 className="text-[#FFB400] text-5xl">,,</h1>
          <p className="text-3xl text-center italic w-2/3 max-md:w-[100%]">
            Share a real testimonial that hits some of your benefits (but isn't
            too sales-y)
          </p>
          <div className="font-bold flex flex-col justify-center items-center mb-4">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/1a1f4659-freshgoods-testimonial_1000000000000000000028.png"
              alt=""
            />
            <p>REAL NAME</p>
            <p>Location</p>
            <p className="text-[#B28212]">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCustomers;

