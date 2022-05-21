import React from 'react';

const SelfForm = () => {
  
    return(
        <div className=" md:w-1/2 h-3/4 bg-white shadow-md p-5   m-5">
        <div className="billing_info">
          <h2 className="text-lg font-bold from-neutral-900 mb-5">
            Billing Information
          </h2>
          <div className="form grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Credit Card Number
              </label>
              <div className="flex w-full mt-1 py-2 text-slate-700 font-medium border border-gray-300 bg-white rounded-md shadow-sm">
                <input
                  type="number"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="flex-1 ml-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
                />
                <div class="card-icons flex ">
                  <div class="mr-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="3"
                        width="24"
                        height="18"
                        rx="3"
                        fill="#0057A0"
                      ></rect>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.0683 14.1508L9.94023 9.08801H11.3348L10.4623 14.1508H9.0683Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.5204 9.21264C15.244 9.11007 14.8111 9 14.2704 9C12.8924 9 11.9217 9.68666 11.9135 10.6708C11.9057 11.3983 12.6064 11.8041 13.1354 12.0463C13.6783 12.2944 13.8608 12.4527 13.8582 12.6743C13.8547 13.0136 13.4247 13.1687 13.0238 13.1687C12.4656 13.1687 12.1691 13.0919 11.7111 12.9029L11.5314 12.8224L11.3357 13.9558C11.6614 14.0971 12.2637 14.2196 12.8892 14.2259C14.3551 14.2259 15.3068 13.5471 15.3176 12.4962C15.3229 11.9203 14.9513 11.482 14.1467 11.1207C13.6593 10.8865 13.3607 10.7302 13.3639 10.493C13.3639 10.2826 13.6166 10.0576 14.1625 10.0576C14.6186 10.0505 14.9489 10.1489 15.2063 10.2515L15.3313 10.3099L15.5204 9.21264Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.0189 9.09283H19.0965L20.2253 14.1524H18.9312C18.9312 14.1524 18.8033 13.571 18.7616 13.3938C18.6538 13.3938 18.2036 13.3932 17.7804 13.3926C17.4049 13.3921 17.0507 13.3916 16.9755 13.3916C16.9213 13.5286 16.6819 14.1524 16.6819 14.1524H15.2174L17.2886 9.51268C17.4352 9.18299 17.6851 9.09283 18.0189 9.09283ZM17.3768 12.356C17.3768 12.356 17.3768 12.3561 17.3768 12.3561V12.356H17.3768ZM17.3768 12.356H18.5345C18.4787 12.1026 18.2116 10.8941 18.2116 10.8941L18.1174 10.4576C18.0805 10.5571 18.0293 10.6887 17.99 10.7894C17.9543 10.881 17.9285 10.9472 17.9325 10.9408C17.9325 10.9408 17.4922 12.0643 17.3768 12.356Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.89862 9.09167L6.53326 12.5441L6.38778 11.8425C6.1336 11.0337 5.34167 10.1575 4.45633 9.71875L5.70478 14.1464L7.18031 14.1447L9.37587 9.09167H7.89862Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.2666 9.08856H3.0178L3 9.1939C4.74954 9.61297 5.9072 10.6257 6.38774 11.8425L5.89876 9.51598C5.81434 9.1954 5.56949 9.09973 5.2666 9.08856Z"
                        fill="#FAA61A"
                      ></path>
                    </svg>
                  </div>
                  <div class="mr-1">
                    <div class="Card__LogoWrapper-melq8q-1 gfkbw">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="3"
                          width="24"
                          height="18"
                          rx="3"
                          fill="#161717"
                        ></rect>
                        <g opacity="0.01">
                          <rect
                            x="4.5"
                            y="6.75"
                            width="15.6772"
                            height="10.4879"
                            fill="white"
                          ></rect>
                        </g>
                        <rect
                          x="10.2714"
                          y="8.57727"
                          width="4.13557"
                          height="6.83224"
                          fill="#FF5F00"
                        ></rect>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.6974 11.994C10.6964 10.6609 11.3013 9.40146 12.338 8.57843C10.5769 7.17844 8.04776 7.38236 6.52811 9.04689C5.00845 10.7114 5.00845 13.2777 6.52811 14.9422C8.04776 16.6067 10.5769 16.8107 12.338 15.4107C11.301 14.5874 10.696 13.3274 10.6974 11.994Z"
                          fill="#EB001B"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.9464 14.5755V14.8555H18.8983V14.5755H18.7955V14.5176H19.0558V14.5755H18.9464ZM19.4518 14.5176V14.8555H19.3971V14.5996L19.3118 14.8193H19.2527L19.1674 14.5996V14.8555H19.1105V14.5176H19.1893L19.2811 14.759L19.373 14.5176H19.4518Z"
                          fill="#F79E1B"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.2883 11.994C19.2883 13.6575 18.3492 15.175 16.8699 15.9019C15.3907 16.6288 13.6309 16.4376 12.338 15.4095C13.3742 14.5858 13.9793 13.3265 13.9793 11.9934C13.9793 10.6603 13.3742 9.40098 12.338 8.57726C13.6309 7.54911 15.3907 7.35791 16.8699 8.08485C18.3492 8.8118 19.2883 10.3293 19.2883 11.9928V11.994Z"
                          fill="#F79E1B"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 ">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Exp. Month
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className=" w-full mt-1 py-2 text-slate-700 font-medium border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
              />
            </div>

            <div className="col-span-2 ">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Exp. Year
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className=" w-full mt-1 py-2 text-slate-700 font-medium border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
              />
            </div>
            <div className="col-span-2 ">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                CCV
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className=" w-full mt-1 py-2 text-slate-700 font-medium border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
              />
            </div>
            <div className="col-span-3 sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className=" w-full mt-1 py-2 text-slate-700 font-medium border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
              />
            </div>
            <div className="col-span-3 sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className=" w-full mt-1 py-2 text-slate-700 font-medium border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
              />
            </div>
            <div className="col-span-3 sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className=" w-full mt-1 py-2 text-slate-700 font-medium border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
              />
            </div>
            <div className="col-span-3 sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className=" w-full mt-1 py-2 text-slate-700 font-medium border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    ) 
  
};

export default SelfForm;
