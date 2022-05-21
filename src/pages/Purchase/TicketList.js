import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Ticket from "./Ticket";

const TicketList = () => {

  const tickets = [
    {
      name: "Yousou Ndour Gala Dinner",
      price: 900,
      quantity: 1,
      eventDate: "14th May, 2022",
      prucaseDate: "20th May, 2022",
    },
  ];
  
  return (
    <>
      <div className="row flex justify-center items-center m-4 title text-3xl text-cyan-700 font-serif underline ">
        Your Tickets
      </div>
      
      <div className="row flex justify-center items-start gap-6"></div>
      <div className="ticket_table flex justify-center items-center m-10 ">
        <div className="relative w-2/3 overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex text-xs text-gray-700 uppercase bg-white mb-2">
             
                <div scope="col" className="w-1/2 px-6 py-3 font-mono text-xl text-center shadow-md bg-blue-200 cursor-pointer">
                  Upcoming Event
                </div>

                <div scope="col" className="w-1/2 px-6 py-3 font-mono text-xl text-center cursor-pointer">
                  Archived Events
                </div>
              
            </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  Event
                </th>

                <th scope="col" className="px-6 py-3 text-center">
                  Event Date
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Details
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">View Ticket</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {tickets.length == 0 ? (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 text-center font-light text-gray-900 dark:text-white whitespace-nowrap"
                    colSpan={2}
                  >
                    No Ticket Available
                  </th>
                </tr>
              ) : (
                ""
              )}

              {tickets?.map((ticket, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 text-center font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {ticket.name}
                  </th>

                  <td className="px-6 py-4 text-center font-semibold text-gray-700 ">
                   {ticket.eventDate}
                  </td>

                  <td className="px-6 py-4 text-center">
                    {ticket.quantity} {ticket.quantity > 1 ? "Tickets" : "Ticket"}
                  </td>
                  
                  <td className="px-6 py-4 text-center">
                    <Link to="tickets/tickinfo">
                    <div className="font-medium bg-green-600 text-white rounded px-2 py-2 dark:blue-red-500 hover:underline cursor-pointer">
                      View Ticket
                    </div>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TicketList;
