import React, { useState, useEffect } from "react";
import EditForm from "./EditForm";

const EditEvent = () => {
  function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
  }

  function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
  }

  const [left, setLeft] = useState([
    { name: "Aisha Fall", id: 1 },
    { name: "Ousman Bojang", id: 3 },
    { name: "Tapha Njie", id: 5 },
    { name: "Omar Ceesay", id: 7 },
  ]);
  const [right, setRight] = useState([
    { name: "Momodou Bah", id: 2 },
    { name: "Essa Njie", id: 4 },
    { name: "Malick Faal", id: 6 },
    { name: "Fatou Khan", id: 8 },
  ]);

  const [FormData, setFormData] = useState(
    {
      eventName: "",
      eventVenue: "",
      publishEvent: false,
      longitude: "",
      latitude: "",
      vendors: [],
      ticketLabel: "",
      ticketPrice: "",
      tickets: [],
      vendors: right,
    }
  );

 

  const [checked, setChecked] = React.useState([]);
  
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const [deleteLeft, setDeleteLeft] = useState([]);
  const [moveRight, setMoveRight] = useState([]);

  useEffect(() => {}, [FormData, FormData.tickets, leftChecked, right]);

  const handleCheckedRight = () => {
    console.table("items to be tranfered ", leftChecked);
    //add all ticked vendors to the right
    setRight(right.concat(leftChecked));
    // //Remove all ticked vendors from the left
    setLeft(not(left, leftChecked));
    setChecked([]);
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));

    setFormData({...FormData, vendors: right })
  };

  const deleteTicket = (index) => {
    FormData.tickets.splice(index, 1);
    setFormData({ ...FormData, tickets: FormData.tickets });
    // console.log("delete ", FormData.tickets);
  };

  const addTicket = (e) => {
    e.preventDefault();

    let newTicket = {
      ticketPrice: FormData.ticketPrice,
      label: FormData.ticketLabel,
    };

    // console.log("new ticket ", newTicket);

    if (FormData.tickets != null) {
      setFormData({ ...FormData, tickets: [...FormData.tickets, newTicket] });
    } else setFormData({ ...FormData, tickets: [newTicket] });
  };

  // console.log("left items ", leftChecked);
  return (
    <EditForm
      FormData={FormData}
      setFormData={setFormData}
      left={left}
      right={right}
      checked={checked}
      setChecked={setChecked}
      handleCheckedRight={handleCheckedRight}
      handleCheckedLeft={handleCheckedLeft}
      deleteTicket={deleteTicket}
      addTicket={addTicket}
    />
  );
};

export default EditEvent;
