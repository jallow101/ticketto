import React from "react";
import qrcode from "../../assets/qrcode.webp"
import you from "../../assets/you.jpg"

const Ticket = () => {
  return (
    <div className="flex justify-center items-center gap-3">
        <div className="flyer flex-1">
         <img src={you} alt="qrcode" className="max-w-full h-48  rounded-lg object-contain" />
        </div>
      <div className="details flex flex-col bg-gray-300">
        <div className="flex items-start gap-3">
          {/* <div className="">Name</div> */}
          <div className="">Fatou Gaye</div>
        </div>
        <div className="flex items-center gap-3">
          {/* <div className="">Price</div> */}
          <div className="">D 900.00</div>
        </div>
        <div className="flex items-center gap-3">
          {/* <div className="">Quantity</div> */}
          <div className="">3 Tickets</div>
        </div>
        <div className="flex items-center gap-3">
          {/* <div className="">Purchase Date</div> */}
          <div className="">20th September, 2021</div> 
        </div>
        <div className="flex items-center gap-3">
          <div className="">Total Spent</div>
          <div className="">D 2,700.00</div> 
        </div>
      </div>
      <div className="qrcode m w-30">
          <img src={qrcode} alt="qrcode" className="max-w-full h-48  rounded-lg object-contain" />
      </div>
      <div className="flex flex-col justify-center items-center gap-2 ">
          <button className="bg-green-700 rounded px-4">Download Ticket</button>
          <button className="bg-blue-400 rounded px-4">Print Ticket</button>
      </div>
    </div>
  );
};

export default Ticket;
