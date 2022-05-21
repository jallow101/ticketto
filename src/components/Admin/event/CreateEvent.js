import React, { useState } from "react";
import InputForm from "../components/InputForm";
import { doc, setDoc,collection } from "firebase/firestore";
import db from "../../../firebase";

const CreateEvent = ({closeModal}) => {
  const [event, setEvent] = useState({
    name: "",
    venue: "",
    date: 22/22/2022,
    category: "",
    age_group: 18,
    start_time: "",
    end_time: "",
  });

  const onChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const createEvent = (e) => {
    e.preventDefault();
    console.log("even data = ", event);

    // Add a new document with a generated id
    const newEvent = doc(collection(db, "events"));

    // later...
    setDoc(newEvent, event).then((data) => {
      console.log("Data Sent ",data)
      closeModal()
    });

    // addDoc(doc(db, "event"), event);
  };

  const eventForm = [
    {
      id: "11",
      name: "name",
      placeholder: "",
      type: "text",
      label: "Event Name",
    },
    {
      id: "12",
      name: "venue",
      placeholder: "",
      type: "text",
      label: "Event Venue",
    },
    {
      id: "13",
      name: "date",
      placeholder: "",
      type: "date",
      label: "Event Data",
    },
    {
      id: "14",
      name: "category",
      placeholder: "",
      type: "text",
      label: "Event Category",
    },
    {
      id: "21",
      name: "age_group",
      placeholder: "",
      type: "number",
      label: "Event Age Group",
    },
    {
      id: "15",
      name: "start_time",
      placeholder: "",
      type: "time",
      label: "Event Starts",
    },
    {
      id: "16",
      name: "end_time",
      placeholder: "",
      type: "time",
      label: "Event Ends",
    },
    ,
    {
      id: "14",
      name: "flyer",
      placeholder: "",
      type: "text",
      label: "Upload Event Flyer",
    },
  ];
  return (
    <div className="flex justify-center mt-10">
      <div className="mx-8 pr-14 pt-5 w-2/3 min-h-full bg-white  drop-shadow-xl rounded border-solid border-0 border-gray-500">
        <form onSubmit={createEvent}>
          <div className="row flex justify-evenly items-center ">
            <div className="1">1</div>
            <div className="dash border-dashed border-b-2 w-1/6 border-yellow-500"></div>
            <div className="2">2</div>
            <div className="dash border-dashed border-b-2 w-1/6 border-yellow-500"></div>
            <div className="3">3</div>
          </div>
          <div className="row flex justify-evenly ">
            {eventForm.slice(0, 3).map((input) => (
              <InputForm label={input.label} {...input} onChange={onChange} />
            ))}
          </div>

          <div className="row flex justify-evenly ">
            {/* <div className="relative z-0 mb-6 w-1/4 group">
              <select
                type="email"
                name="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              >
                <option
                  className="text-blue-300 font-semibold "
                  value="Concert"
                >
                  Concert
                </option>
                <option value="Concert">Fun Day</option>
                <option value="Concert">Sport</option>
                <option value="Concert">Transport</option>
              </select>
              <label
                for="floating_email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Event Category
              </label>
            </div> */}

            {eventForm.slice(3, 5).map((input) => (
              <InputForm label={input.label} {...input} onChange={onChange} />
            ))}

            <div className="Time  flex w-1/4  ">
              {eventForm.slice(5, 7).map((input) => (
                <InputForm label={input.label} {...input} onChange={onChange} />
              ))}
            </div>
          </div>

          <div className="upload flex justify-center ">
            <div className="relative z-0 mb-6 w-1/4 group">
              <input
                type="file"
                name="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Upload Flyer
              </label>
            </div>
          </div>

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
  );
};

export default CreateEvent;
