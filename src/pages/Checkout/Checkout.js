import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import db  from "../../firebase";
import { useParams } from "react-router-dom";
import EventDetails from "./EventDetails";
import Modal from "../../components/Modal";
import TicketInfo from "./TicketInfo";


const Checkout = () => {

  const { eventId } = useParams();

  let [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState("");
  const [quantity, setQty] = useState(1);
  const [price, setPrice] = useState(0);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    //OmfcBwkBEfNIFqRElY2Z
    const getEvent = async () => {
      const docRef = doc(db, "events", eventId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setEvent(docSnap.data());
        // setPrice(docSnap.data().ticket_types[0].price)
        setLoading(false);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document! -> with id = ", eventId);
      }
    };

    getEvent();
  }, [price]);

  
  
  return (
    <>
      {loading ? (
        "Please Wait"
      ) : (
        <>
          <div className="container w-full mt-5 mx-15 flex flex-col md:flex-row justify-center">
            {/* <SelfForm /> */}
            <EventDetails event={event}/>
            <TicketInfo eventId={eventId} event={event} price={price} setPrice={setPrice}
             setQty={setQty} quantity={quantity} openModal={openModal} />
          </div>

          <Modal isOpen={isOpen} closeModal={closeModal} />
         
        </>
      )}
    </>
  );
};

export default Checkout;
