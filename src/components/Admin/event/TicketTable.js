import React from "react";
import TicketForm from "../components/TicketForm";

const TicketTable = ({
  FormData,
  setFormData,
  deleteTicket,
  ticketForms,
  addTicket,
}) => {
  const onChange = (e) => {
    if (e.target.name != "publishEvent")
      setFormData({ ...FormData, [e.target.name]: e.target.value });
    else setFormData({ ...FormData, [e.target.name]: FormData.publishEvent });
  };
  return (
    <>
      <div className="row flex justify-center items-center m-4 title text-3xl font-serif underline ">
        Ticket Pricing
      </div>
      <div className="row flex justify-center items-start gap-6">
        {ticketForms.map((input) => (
          <TicketForm
            onChange={onChange}
            label={input.label}
            {...input}
            value={FormData[input.name]}
            setFormData={setFormData}
            FormData={FormData}
          />
        ))}

        <div className="add_ticket">
          <button
            onClick={addTicket}
            disabled={FormData.ticketLabel == "" || FormData.ticketPrice == ""}
            className={`text-white ${
              FormData.ticketLabel == "" || FormData.ticketPrice == ""
                ? "bg-red-600 hover:bg-white hover:text-red-600"
                : "bg-cyan-800 hover:bg-cyan-700"
            }  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-100[px] sm:w-auto px-5 py-2.5 text-center cursor-pointer`}
          >
            {FormData.ticketLabel == "" || FormData.ticketPrice == ""
              ? "Create Ticket"
              : "Add Ticket"}
          </button>
        </div>
      </div>
      <div className="ticket_table flex justify-center items-center m-10 ">
        <div className="relative w-1/2 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  Ticket Label
                </th>

                <th scope="col" className="px-6 py-3 text-center">
                  Ticket Price
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {FormData.tickets.length == 0 ? (
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

              {FormData.tickets?.map((ticket, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 text-center font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {ticket.label}
                  </th>

                  <td className="px-6 py-4 text-center">
                    D {ticket.ticketPrice}
                  </td>
                  <td
                    className="px-6 py-4 text-right"
                    onClick={() => deleteTicket(index)}
                  >
                    <a className="font-medium text-red-600 dark:text-red-500 hover:underline">
                      Delete
                    </a>
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

export default TicketTable;
