import React, { useState } from "react";

const Navitem = ({ href, activateBridge, activateConcert,isActive, children, setConcert, setBridge}) => {

  const [active, setActive] = useState(isActive)
  const switchNav = ()=> {
     
    if(activateBridge){
      setActive(null)
      setConcert(false)
      setBridge(true)
      setActive(true)
      console.log(" brigde activated");
    } 
    else if(activateConcert){
      setConcert(true)
      setBridge(false)
      setActive(true)
      console.log(" Concert activated");
    }

  }

  return (
    <li>
      <a
        href={href}
        className={`block px-3 py-2 rounded-md cursor-pointer ${
          active ? "bg-sky-500 text-white" : "bg-gray-50"
        }`}
        onClick={switchNav}
      >
        {children}
      </a>
    </li>
  );
};

export default Navitem;
