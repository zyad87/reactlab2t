import React from 'react';

function FeaturesSection() {
  return (
    <div className="bg-[#F5F5F5] flex justify-evenly items-center my-10 gap-10 max-md:flex-col mx-2 py-16">
      <div className="flex flex-col justify-center items-center w-72 text-center gap-5 ">
        <img
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6765ae81-freshgoods-feature1_10go0b20go09e00000001o.jpg"
          alt=""
        />
        <div>
          <h1 className="font-bold">Feature 1</h1>
          <p>
            Talk about some of the details of your offer with focus on the value
            people get back
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-72 text-center gap-5">
        <img
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/bf92a2f6-freshgoods-feature2_10go0ku0go09e00009e01o.jpg"
          alt=""
        />
        <div>
          <h1 className="font-bold">Feature 2</h1>
          <p>
            Talk about some of the details of your offer with focus on the value
            people get back
          </p>
        </div>
      </div>{' '}
      <div className="flex flex-col justify-center items-center w-72 text-center gap-5">
        <img
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/f55dfcfa-freshgoods-feature3_10go0b40go09e00000601o.jpeg"
          alt=""
        />
        <div>
          <h1 className="font-bold">Feature 3</h1>

          <p>
            Talk about some of the details of your offer with focus on the value
            people get back
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
