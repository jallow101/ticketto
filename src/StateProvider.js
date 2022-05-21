import React, {createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

//setup data layer
//needed to track cart items

// This is the Data Layer
export const StateContext = createContext();

//Build Provider
export const StateProvider = (props) => {

    return (
    
        <StateContext.Provider value={useReducer(reducer, initialState, ()=> {
            let localData = localStorage.getItem("localCart")
            return localData ? JSON.parse(localData) : {
                authUser:[],
              };
        })}>
            
            {props.children}
        </StateContext.Provider>
    ) 
}

//How to use it in a component
export const useStateValue = () => useContext(StateContext);