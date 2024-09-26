import React from 'react';

function ImportantSection() {
  return (
    <div className=" flex justify-center items-center my-20">
      <div className="grid grid-cols-2 w-[60%]">
        <p className="my-4 pl-3 text-5xl tracking-wider col-start-2 row-start-1 self-end max-md:ms-7 max-md:row-start-1 max-md:col-span-3 max-md:text-center max-md:text-4xl">
          Some more information about your business
        </p>
        <img
          className="col-start-1 row-span-2 max-md:row-start-2 max-md:col-span-3 max-md:row-span-1"
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/ef9d9b9f-freshgoods-about_100000000000000000001o.jpg"
          alt=""
        />
        <p className="col-start-2 pl-3 row-start-2 self-start my-4 max-md:row-start-3 max-md:col-span-3 max-md:text-center">
          Share a little about yourself as a business owner, or maybe describe
          what makes your product or service unique. Give visitors one more
          reason to care about your offer and want to buy from you
        </p>
      </div>
    </div>
  );
}

export default ImportantSection;
