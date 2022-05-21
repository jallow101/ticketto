import React from "react";
import Card from "./components/EventCard";
import VendorCard from "./components/VendorCard";
import Info from "./Info";
import Sidebar from "./Sidebar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "../Admin/event/Modal";
import { useState } from "react";
import CreateEvent from "./event/CreateEvent";

const Content = () => {

  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="flex bg-grey-300 h-screen">
      <Sidebar />

      <Router>
        <Switch>
          <Route exact path="/admin">
            <Card />
          </Route>
          <Route exact path="/admin/vendors">
            <VendorCard />
          </Route>
        </Switch>
      </Router>
      {/* <Info /> */}
      <Modal  isOpen={isOpen} closeModal={closeModal} title={"Create Event"} content={<CreateEvent closeModal={closeModal}/>}/>
      
        <div
         onClick={openModal}
          href="createEvent"
          className=" flex justify-center items-center fixed bottom-0 right-0 m-5
        button  cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-full bg-blue-400  opacity-75 hover:opacity-100 "></div>
          <div className="absolute font-bold  text-white ">+</div>
        </div>
     
    </div>
  );
};

export default Content;
