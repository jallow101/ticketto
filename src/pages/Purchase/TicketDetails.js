import React from "react";
import {useHistory} from "react-router-dom";
import you from "../../assets/you.jpg";
import qrcode from "../../assets/qrcode.webp";

const TicketDetails = () => {

  const history = useHistory();

  const goBack = () => {
    history.goBack()
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <button className="text-white bg-red-500 m-5 absolute left-10  rounded px-6 py-2 print:hidden" onClick={goBack}>Back</button>
      <div className="flex justify-center">
        <div className="md:w-1/2 h-full bg-white shadow-lg p-5  m-5">
          {/* <div className="title h-5 text-center  font-semibold m-2">
      <h1>Event Details</h1>
    </div> */}
          <div className="flyer h-3/5 bg-blue-300">
            <img
              className="h-60 w-full rounded object-cover"
              src={you}
              alt=""
            />
          </div>

          <div className="information flex justify-around items-center">
            <div className="details flex flex-col justify-between">
              <div className="info">
                <div className="font-bold text-sm md:text-3xl text-gray-700">
                  Fatou Gaye
                </div>
                <div className="font-mono text-sm md:text-md text-gray-400">
                  3 Tickets
                </div>
                <div className="font-semibold text-xl text-gray-700 mb-4">
                  D 900.00
                </div>
              </div>

              <div className="purchaseinfo ">
                <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-3">
                  <div className="text-sm font-light">Purchase on</div>
                  <div className="text-sm md:text-xl font-mono md:font-semibold">
                    20th September, 2021
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-sm md:text-xl">Paid</div>
                  <div className=" text-sm md:text-xl">D 2,700.00</div>
                </div>
              </div>
            </div>

            <div className="right flex flex-col justify-center items-center">
              <div className="qrcode flex justify-center  w-30">
                <img
                  src={qrcode}
                  alt="qrcode"
                  className="max-w-full h-48  rounded-lg object-contain"
                />
              </div>
              <div className="flex justify-center items-center gap-3">
                <div className="text-sm font-light">Invoice No:</div>
                <div className="font-semibold">Kisnw9281020</div>
              </div>
            </div>
          </div>
          <div className="print w-full bg-green-700 rounded py-2 px-4 print:hidden">
            <div
              className="text-center font-bold text-white cursor-pointer"
              onClick={handlePrint}
            >
              Print Ticket
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketDetails;
