import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  doc,
  getDoc,
  collectionGroup,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import db from "../../firebase";
import { useHistory, useParams } from "react-router-dom";
import you from "../../assets/you.jpg";
import qrcode from "../../assets/qrcode.webp";

const TicketDetails = () => {
  const history = useHistory();
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //OmfcBwkBEfNIFqRElY2Z
    const getTicket = async () => {
      const queryStmt = query(
        collectionGroup(db, "tickets"),
        where("uid", "==", ticketId)
      );

      const querySnapshot = await getDocs(queryStmt);
      console.log("Snapshot ", querySnapshot);

      setTicket(querySnapshot.docs.map((doc) => doc.data()));

      console.log("Top Events -> inside ->", ticket);
      setLoading(false);
      // querySnapshot.forEach((doc) => {
      //   console.log(doc.id, " => ", doc.data())

      // });

      // console.log("Here are the docs ", querySnapshot);
      // await setTicket(
      //   querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      // );
      // console.log("Check Ticket -> ", ticket);
    };

    getTicket();
    console.log("Check my Ticket -> ", ticket);
  }, []);

  const goBack = () => {
    history.goBack();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <button
        className="text-white bg-red-500 m-5 absolute left-10  rounded px-6 py-2 print:hidden"
        onClick={goBack}
      >
        Back
      </button>

      {!loading ? (
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

            <div className="event_title flex justify-center items-center flex-col">
              <div>
                {" "}
                <h1 className="font-mono text-md "> {ticket[0].event_name}</h1>
              </div>
              <div>
                {" "}
                <h3 className="font-bold text-md "> Ticket</h3>
              </div>
            </div>

            <div className="information flex justify-around items-center">
              <div className="details flex flex-col justify-between">
                <div className="info">
                  <div className="font-bold text-sm md:text-3xl text-gray-700">
                    {ticket[0].fullname}
                  </div>
                  <div className="font-mono text-sm md:text-md text-gray-400">
                    {ticket[0].ticket_quantity} Tickets
                  </div>
                  <div className="font-semibold text-xl text-gray-700 mb-4">
                    D {ticket[0].price}.00
                  </div>
                </div>

                <div className="purchaseinfo ">
                  <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-3">
                    <div className="text-sm font-light">Purchased on</div>
                    <div className="text-sm md:text-xl font-mono md:font-semibold">
                      {ticket[0].event_date
                        .toDate()
                        .toLocaleDateString("en-GB")}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-sm md:text-xl font-light">Paid</div>
                    <div className=" text-sm md:text-xl">
                      D {ticket[0].price}.00
                    </div>
                  </div>
                </div>
              </div>

              <div className="right flex flex-col justify-center items-center">
                <div className="qrcode flex justify-center  w-30">
                  {/* <img
                    src={qrcode}
                    alt="qrcode"
                    className="max-w-full h-48  rounded-lg object-contain"
                  /> */}
                  <QRCodeSVG value={ticket[0].qrcode} />
                </div>
                <div className="flex justify-center items-center gap-3">
                  <div className="text-sm font-light">Invoice No:</div>
                  {/* <div className="font-semibold">Kisnw9281020</div> */}
                  <div className="font-semibold"> {ticket[0].uid}</div>
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

            <div className="disclaimer flex justify-center items-center flex-col">
              <div>
                {" "}
                <h3 className="text-md font-light print:hidden ">Keep this receipt safe, Note that a ticket is invalid once it is scanned at entrance by a thirdparty or anyone.</h3>
              </div>
            </div>


          </div>
        </div>
      ) : (
        "Wait . . ."
      )}
    </>
  );
};

export default TicketDetails;
