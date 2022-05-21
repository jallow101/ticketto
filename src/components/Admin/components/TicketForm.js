import React from "react";

const TicketForm = (props) => {

  const { label,value, onChange, id, setFormData,FormData, ...otherProps } = props;
  return (

      <div className="ticket_name relative z-0 mb-6 w-1/4 group">
        <input
         {...otherProps }
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          onChange={onChange}
          required={ FormData.tickets?.length == 0 }
        />
        <label
          for="floating_email"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>
      </div>
      
    //   {/* <div className="add_ticket">
    //     <button
          
    //       className=" text-white bg-cyan-800 hover:bg-cyan-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    //     >
    //       add
    //     </button>
    //   </div> */}
  
  );
};

export default TicketForm;
