import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import InputForm from "../components/InputForm";
import VendorForm from "../components/VendorForm";
import TicketTable from "./TicketTable";

const EditForm = ({
  FormData,
  setFormData,
  left,
  right,
  checked,
  setChecked,
  handleCheckedRight,
  handleCheckedLeft,
  deleteTicket,
  addTicket,
}) => {

  const history = useHistory();
  let data = [
    {
      id: "1",
      name: "eventName",
      placeholder: "",
      type: "text",
      label: "Event Name",
    },
    {
      id: "2",
      name: "eventVenue",
      placeholder: "",
      type: "text",
      label: "Event Venue",
    },
    {
      id: "3",
      name: "toggle",
      placeholder: "",
      type: "checkbox",
      label: "Tick",
      className:
        "toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer",
    },
  ];

  let ticketForms = [
    {
      id: "11",
      name: "ticketLabel",
      placeholder: "",
      type: "text",
      label: "TICKET LABEL",
    },
    {
      id: "12",
      name: "ticketPrice",
      placeholder: "",
      type: "number",
      label: "TICKET PRICE",
    },
  ];

  const [search, setSearch] = useState({
    left: "",
    right: "",
  });

  const updateSeatch = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
    console.log("items to search ", search);
  };

  const onChange = (e) => {
    if (e.target.name != "publishEvent")
      setFormData({ ...FormData, [e.target.name]: e.target.value });
    else setFormData({ ...FormData, [e.target.name]: FormData.publishEvent });
  };

  const handleToggle = (value) => () => {
    console.log("item ticked ", value);
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const submitForm = (e) => {
    e.preventDefault();

    console.log("Form to submit ", FormData);
    // addDoc (doc(db, "cities", "LA"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA",
    // });
  };

  return (
    <div>
      <div className="btn flex justify-end m-10">
        <button
          type="submit"
          className="right-0 text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          onClick={()=>{history.goBack()}}
        >
          Back
        </button>
      </div>
      <div className="flex justify-center mt-10">
        <div className="mx-5 pt-5 mb-5 w-2/3 min-h-full bg-white  drop-shadow-xl rounded border-solid border-2 border-gray-500">
          <form onSubmit={submitForm}>
            <div className="row flex justify-evenly items-center">
              {data.map((input) => (
                <InputForm
                  onChange={onChange}
                  label={input.label}
                  {...input}
                  value={FormData[input.name]}
                  setFormData={setFormData}
                  FormData={FormData}
                />
              ))}
            </div>

            <div className="row flex justify-center items-center w-full h-100">
              <div className="w-full border-dashed border-2 bg-blue-300 h-100  rounded m-10">
                Map
              </div>
            </div>

            <div className="row flex justify-evenly ">
              <div className="relative z-0 mb-6 w-1/4 group">
                <input
                  type="email"
                  name="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Longitude
                </label>
              </div>

              <div className="relative z-0 mb-6 w-1/3 group">
                <input
                  type="email"
                  name="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Latitude
                </label>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="vendors border-solid border-yellow-400 shadow-md w-1/3 max-h-64 overflow-y-scroll p-5">
                <div className="relative z-0 mt-2 w-full group">
                  <input
                    type="text"
                    name="left"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={updateSeatch}
                  />
                  <label
                    for="floating_email"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Search Vendor
                  </label>
                </div>
                {left
                  .filter((val) => {
                    if (search.left == "") {
                      return val;
                    } else if (
                      val.name.toLowerCase().includes(search.left.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((vendor) => (
                    <VendorForm
                      key={vendor}
                      checked={checked.indexOf(vendor) !== -1}
                      handleToggle={handleToggle(vendor)}
                      vendorlist={left}
                      vendor={vendor}
                      setChecked={setChecked}
                    />
                  ))}
              </div>

              <div className="buttons border-solid border-yellow-400 shadow-md h-300 p-5 m-2">
                <div
                  className="add p-2 bg-green-600 shadow-md rounded text-white text-md cursor-pointer"
                  onClick={handleCheckedRight}
                >
                  <BsChevronRight />
                </div>
                <div
                  className="remove mt-2 p-2 bg-red-600 shadow-md rounded text-white text-md cursor-pointer"
                  onClick={handleCheckedLeft}
                >
                  <BsChevronLeft />
                </div>
              </div>

              <div className="accepted_vendors border-solid border-yellow-400 shadow-md w-1/3 max-h-64  overflow-y-scroll p-5">
                <div className="relative z-0 mt-2 w-full group">
                  <input
                    type="text"
                    name="right"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    onChange={updateSeatch}
                  />
                  <label
                    for="floating_email"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Search Vendor
                  </label>
                </div>

                <div className="vendor_list">
                  {right
                    .filter((val) => {
                      if (search.right == "") {
                        return val;
                      } else if (
                        val.name
                          .toLowerCase()
                          .includes(search.right.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((vendor) => (
                      <VendorForm
                        key={vendor}
                        checked={checked.indexOf(vendor) !== -1}
                        handleToggle={handleToggle(vendor)}
                        vendor={vendor}
                        setChecked={setChecked}
                      />
                    ))}
                </div>
              </div>
            </div>

            <TicketTable
              FormData={FormData}
              setFormData={setFormData}
              ticketForms={ticketForms}
              deleteTicket={deleteTicket}
              addTicket={addTicket}
            />

            <div className="btn flex justify-end m-10">
              <button
                type="submit"
                className="right-0 text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
