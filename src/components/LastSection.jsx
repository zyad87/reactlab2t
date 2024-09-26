import React from 'react';

function LastSection() {
  return (
    <div className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="flex flex-col justify-center items-center flex-wrap">
          <h1 className="text-5xl tracking-wider w-4/6">
            End with one final call to action
          </h1>
          <p className="py-6 w-2/3 text-center">
            This is your last shot at converting someone. Remind them about the
            benefits of your offer and encourage them to act now.
          </p>
          <button className="btn btn-warning bg-[#FFB400] px-10 py-2 max-sm:px-20">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default LastSection;
