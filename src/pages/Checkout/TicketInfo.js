import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { doc, collection, setDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";
import { v4 as uuidv4 } from "uuid";

const TicketInfo = ({
  event,
  quantity,
  price,
  setPrice,
  setQty,
  openModal,
  eventId,
}) => {
  const [{ authUser }, dispatch] = useStateValue();
  const [owner, setOwner] = useState("");

  const Count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const uid = uuidv4();

  const updateTickets = (e) => {
    setQty(e.target.value);
  };

  const selectTicket = (e) => {
    setPrice(e.target.value);
    console.log("ticket price is ", price, " ", e.target.value);
  };

  const forSomeone = () => {
    setOwner("other");
  };

  const forSelf = () => {
    setOwner("self");
  };

  return (
    <div className=" md:w-1/4  h-3/4 shadow-lg bg-white rounder border-1 border-gray-200 p-5">
      <div className="flex mx-2 my-1">
        <img
          className="h-20 w-1/2 rounded object-cover"
          src={event.image}
          alt=""
        />
        <div className="m-2">
          <h3 className="font-bold">{event.name}</h3>
          <p className="font-light">
            {event.start_time.toDate().toDateString()}
          </p>
          <h6 className="font-serif text-xs">{event.location}</h6>
        </div>
      </div>

      <div className=" divide-y divide-dashed">
        <div className="border-b border-gray-300 "></div>
      </div>
      <div className="mt-4">
        <div className="container mt-2">
          <h6 className="font-extralight semibold text-center">
            {" "}
            Purchase Ticket For
          </h6>
          <div className="ticket_for flex justify-center mt-2 cursor-pointer">
            <div
              className={
                owner == "self"
                  ? "group self w-1/2 mr-1 border-solid border text-white border-blue-500 rounded-md hover:bg-sky-900 bg-sky-900"
                  : "group self w-1/2  mr-1 text-black border-solid border border-blue-500 rounded-md hover:bg-sky-900"
              }
              onClick={forSelf}
            >
              <h2 className="font-mono text-xl text-center p-2  group-hover:text-white">
                Self
              </h2>
            </div>

            <div
              className={
                owner == "other"
                  ? "group someone w-1/2 text-white border-double border-2 border-sky-500 rounded-md hover:bg-blue-400 bg-blue-400"
                  : "group someone w-1/2  text-black  border-double border-2 border-sky-500 rounded-md hover:bg-blue-400"
              }
              onClick={forSomeone}
            >
              <h2 className="font-mono text-xl text-center p-2  group-hover:text-white">
                Someone
              </h2>
            </div>
          </div>
        </div>
        <span className="text-gray-700 font-semibold flex justify-center">
          Ticket Type
        </span>
        <div className="mt-2 flex justify-evenly">
          {event.ticket_types.map((ticket) => (
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                name="ticketType"
                value={ticket.price}
                onClick={selectTicket}
              />
              <span className="font-bold">{ticket.name}</span>
            </label>
          ))}
        </div>

        {owner !== "" ? (
          <div className="ticketsCount flex justify-center  mt-2">
            <div className="ticket_qty w-full flex items-center m-1">
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-700 text-center w-3/5"
              >
                # of Tickets
              </label>
              <select
                id="country"
                name="country"
                onChange={updateTickets}
                autoComplete="country-name"
                className="mt-1 py-2 block w-full px-3 border text-center border-gray-300 bg-indigo-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-white text-xl font-medium"
              >
                {Count.map((count) => (
                  <option
                    className="font-semibold text-center text-xl bg-white text-blue-400 italic"
                    value={count}
                  >
                    {count} Ticket
                  </option>
                ))}
              </select>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className=" divide-y divide-dashed">
        <div className="border-b border-gray-300 "></div>
      </div>
      <div className="total flex justify-between my-5">
        <div>
          <h2 className="font-semibold text-md">Ticket</h2>
        </div>

        <div>
          <h5>
            D{price}.00
            <span className="text-gray-400 "> x {quantity}</span>
          </h5>
        </div>
      </div>

      <div className=" divide-y divide-dashed">
        <div className="border-b border-gray-300 "></div>
      </div>
      <div className="buy flex flex-col justify-center my-3">
        <button
          className={
            price > 1 && authUser != ""
              ? "w-full rounded bg-indigo-500 shadow-lg shadow-indigo-500/50 p-2 text-white"
              : "cursor-not-allowed w-full rounded bg-indigo-500 shadow-lg shadow-indigo-500/50 p-2 text-white"
          }
        >
          Pay{" "}
          <span className="font-semibold text-red-600">
            D {quantity * price}
          </span>
          <span className="text-white-500">
            {price <= 1 ? (
              <div className="text-red-600">Select Ticket Type</div>
            ) : authUser == "" ? (
              <Link to="/login">
                <div className="fon-bold text-yellow-500">Sign In Required</div>
              </Link>
            ) : (
              <PayPalScriptProvider
                key={price * quantity}
                options={{
                  "client-id":
                    "AcoR3bgtQQSkJBTVDjoq30jKJBuG0ACxd5hci2Xp01I1Rk6eF_XG8J2VqP1DN-rdNFsOXErHVU0oY2Cq",
                  currency: "USD",
                }}
              >
                {price <= 1 ? (
                  <div className="text-red-600">Select Ticket Type</div>
                ) : (
                  <PayPalButtons
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: quantity * price,
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        const email = details.payer.email_address;
                        const authEmail = authUser.email;
                        const fullname = authUser.displayName;
                        //update firestore db when payemnt successful

                        // Add a new document with a generated id.
                        const docRef = doc(
                          collection(
                            db,
                            `events/${eventId}/vendors/webVendor/tickets`
                          )
                        );
                        let userTicket = {
                          email: authEmail,
                          paypal_email: email,
                          ticket_type: "Single Entrance",
                          price: parseInt(price),
                          ticket_quantity: parseInt(quantity),
                          timestamp: serverTimestamp(),
                          event_date: event.start_time,
                          location: event.location,
                          event_name: event.name,
                          fullname: fullname,
                          uid: uid,
                        };

                        setDoc(docRef, userTicket).then((data) => {
                          // alert(
                          //   `Transaction completed by ${name}, send recipt to ${email}`
                          // );
                          openModal();
                          console.log("Document written with ID: ", docRef.id);
                          console.log("Data Sent ", data);
                        });
                      });
                    }}
                  />
                )}
              </PayPalScriptProvider>
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default TicketInfo;
