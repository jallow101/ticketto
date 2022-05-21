import React from "react";

const InputForm = (props) => {
  const { label,value, onChange, id,type,setFormData,FormData, ...otherProps } = props;
  let toggle = ` right-0 border-green-400;
    right: 0;
    border-color: #68D391
    absolute block w-6 h-6 rounded-full bg-green-400 border-4 appearance-none cursor-pointer
    `;

  let lable = `bg-green-400;
    background-color: #68D391`;

  return (
    <>
      {type == "checkbox" ? (
        <div className="relative z-0 mb-6 w-1/4 group">
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className={
                FormData.publishEvent
                  ? toggle
                  : "toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              }
              value={value}
              onClick={() => {
                setFormData({ ...FormData, publishEvent: !FormData.publishEvent })
              }}
           />
            <label
              for="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
          <label for="toggle" className="text-xs text-gray-700">
            Publish Event
          </label>
        </div>
      ) : (
        <div className={`relative z-0 mb-6 ${type == 'time'? 'w-[100px] mx-3' : 'w-1/4'} group`}>
          <input
            {...otherProps}
            type={type}
            label={label}
            onChange={onChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={value}
            required
          />
          <label
            for="floating_email"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {label}
          </label>
        </div>
      )}
    </>
  );
};

export default InputForm;
