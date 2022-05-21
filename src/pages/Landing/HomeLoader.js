import React from "react";

const HomeLoader = () => {
  return (
    <div className="animate-pulse flex m-10 w-2/3">
      <div className="w-1/2 h-[80vh] relative text-center">
        
          <img
            className="bg-gray-300 shadow-lg w-full h-full rounded-l-md "
           
            alt=""
          />
        
      </div>

      <div className="flex flex-col w-1/2 h-[80vh] bg-gray-300 ml-2">
        <div className=" relative hover:h-full h-1/2  text-center">
         </div>

        <div className="group relative hover:h-full h-1/2  text-center">
         
            <img
              className="absolute shadow-lg w-full h-full rounded-tr-md object-cover"
            />
            
          
        </div>
      </div>
    </div>
  );
};

export default HomeLoader;
