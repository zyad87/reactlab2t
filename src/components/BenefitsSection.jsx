import React from 'react';

function BenefitsSection() {
  return (
    <div className="py-10">
      <div className="flex flex-col justify-center items-center flex-wrap">
        <h1 className="tracking-wider text-5xl text-center w-[50%] max-md:text-3xl max-md:w-[70%]">
          Here are some of the benefits of your offer
        </h1>
        <p className="my-10 text-center w-[40%] max-md:text-xl max-md:w-[60%]">
          Explain what makes your product or service great. Talk about features
          in a way that highlight the real value people get out of them.
        </p>
      </div>
      <div className="flex justify-center items-center max-md:flex-col max-md:gap-10">
        <div className="flex justify-center flex-col items-center gap-2">
          <img
            className="w-14 max-md:w-20"
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png"
            alt=""
          />
          <h2 className="text-2xl max-md:text-3xl">Benifit 1</h2>
          <p className="w-1/2 text-center">
            For example, restaurants and bakeries could outline the health
            benefits of their all natural ingredients.
          </p>
        </div>
        <div className="flex justify-center flex-col items-center gap-2">
          <img
            className="w-20 max-md:w-24"
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png"
            alt=""
          />
          <h2 className="text-2xl max-md:text-3xl">Benifit 2</h2>
          <p className="w-1/2 text-center">
            For example, restaurants and bakeries could outline the health
            benefits of their all natural ingredients.
          </p>
        </div>
        <div className="flex justify-center flex-col items-center gap-2">
          <img
            className="w-14 max-md:w-[4.5rem]"
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png"
            alt=""
          />
          <h2 className="text-2xl max-md:text-3xl">Benifit 3</h2>
          <p className="w-1/2 text-center">
            For example, restaurants and bakeries could outline the health
            benefits of their all natural ingredients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;
