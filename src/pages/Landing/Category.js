const Category = () => {
  return (
    <div className="mt-20">
      <h1 className="text-gray-600 text-xl font-bold m-4">Browse by Category</h1>

      <div className="flex flex-col md:flex-row justify-center m-5">
        <div
          className=" w-full mt-5 md:w-1/4 relative  shadow-md bg-concert
                 rounded-md md:m-5 cursor-pointer 
                 hover:scale-110 duration-700 hover:border-white hover:transition-all delay-250"
        >
          <img
            src="https://www.ticketmaster.com/s3images/discovery/Concerts.jpg"
            alt=""
          />
          <div
            className="absolute bottom-0 left-0 rounded text-white 
                    m-4 bg-gray-500 px-1 py-1 font-medium"
          >
            <p>Concert</p>
          </div>
        </div>
        <div
          className=" w-full mt-5 md:w-1/4 relative  shadow-md md:m-5 rounded-md cursor-pointer 
                 hover:scale-110 duration-700 hover:border-white hover:transition-all"
        >
          <img
            src="https://www.ticketmaster.com/s3images/discovery/Sports.jpg"
            alt=""
          />
          <div
            className="absolute bottom-0 left-0 rounded text-white 
                    m-4 bg-gray-500 px-1 py-1 font-medium"
          >
            <p>Sports</p>
          </div>
        </div>
        <div
          className=" w-full mt-5 md:w-1/4 relative shadow-md md:m-5 rounded-md cursor-pointer 
                 hover:scale-110 duration-700 hover:border-white hover:transition-all"
        >
          <img
            src="https://www.ticketmaster.com/s3images/discovery/Family.jpg"
            alt=""
          />
          <div
            className="absolute bottom-0 left-0 rounded text-white 
                    m-4 bg-gray-500 px-1 py-1 font-medium"
          >
            <p>Fairs</p>
          </div>
        </div>
        <div
          className=" w-full mt-5 md:w-1/4 relative  shadow-md rounded-md md:m-5 cursor-pointer 
                 hover:scale-110 duration-700  hover:border-white hover:transition-all"
        >
          <img
            src="https://www.ticketmaster.com/s3images/discovery/Arts.jpg"
            alt=""
          />
          <div
            className="absolute bottom-0 left-0 rounded text-white 
                    m-4 bg-gray-500 px-1 py-1 font-medium"
          >
            <p>Transports</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
