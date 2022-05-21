import React from "react";

const Info = () => {
  let data = [
    { name: "Popcaan Concert", category: "Concert", location:"Stadium", date: "2/01/2022" },
    { name: "Yousou Ndour", category: "Gala Dinner", location:"Coco Ocean", date: "2/02/2022" },
    { name: "Danel Estade", category: "Concert", location:"Stadium", date: "27/01/2022" },
  ];
  return (
    <div className="m-10 w-5/6 min-h-full bg-white  drop-shadow-xl rounded">
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Event Name
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Date
                    </th>
                    <th scope="col" class="p-4">
                      Action
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                
                    {data.map((event) => (
                      
                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {event.name}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                          {event.location}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {event.category}
                        </td>
                        
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                          {event.date}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-center whitespace-nowrap">
                          <a
                            href="#"
                            className="text-blue-600 rounded-lg bg-blue-200 p-1 dark:text-blue-500 hover:underline"
                          >
                            View Details
                          </a>
                        </td>
                        </tr>
                      
                    ))}
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
