import React from "react";

const Card = () => {
  return (
    <div className="flex flex-wrap w-full">
      
      <div className="w-1/3">
        <div className="flex justify-center items-center bg-gray-300 shadow-lg rounded-lg h-40 mt-10 mx-5">
          <div className="flex flex-col justify-center items-center mt-10">
            <div className="fullname font-bold">Albert Faal</div>
            <div className="fullname font-light">3583931</div>
            <div className="fullname italic font-light">Kololi</div>
          </div>
          <div className="avater bg-popcaan bg-cover absolute top-20 bg-red-400 rounded-full w-20 h-20"></div>
        </div>
      </div>

      <div className="w-1/3">
        <div className="flex justify-center items-center bg-gray-300 shadow-lg rounded-lg h-40 mt-10 mx-5">
          <div className="flex flex-col justify-center items-center mt-10">
            <div className="fullname font-bold">Modou Cham</div>
            <div className="fullname font-light">9928391</div>
            <div className="fullname italic font-light">Brufut</div>
          </div>
          <div className="avater bg-you bg-cover absolute top-20 bg-red-400 rounded-full w-20 h-20"></div>
        </div>
      </div>

      <div className="w-1/3">
        <div className="flex justify-center items-center bg-gray-300 shadow-lg rounded-lg h-40 mt-10 mx-5">
          <div className="flex flex-col justify-center items-center mt-10">
            <div className="fullname font-bold">Albert Faal</div>
            <div className="fullname font-light">3583931</div>
            <div className="fullname italic font-light">Kololi</div>
          </div>
          <div className="avater bg-popcaan bg-cover absolute top-20 bg-red-400 rounded-full w-20 h-20"></div>
        </div>
      </div>

      <div className="w-1/3">
        <div className="flex justify-center items-center bg-gray-300 shadow-lg rounded-lg h-40 mt-10 mx-5">
          <div className="flex flex-col justify-center items-center mt-10">
            <div className="fullname font-bold">Aisha Joof</div>
            <div className="fullname font-light">7726311</div>
            <div className="fullname italic font-light">Sukuta</div>
          </div>
          <div className="avater bg-you bg-cover absolute top-20 bg-red-400 rounded-full w-20 h-20"></div>
        </div>
      </div>


    </div>
  );
};

export default Card;
