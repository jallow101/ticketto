import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from "./StateProvider";
import reducer, {initialState} from "./reducer"
import { PayPalScriptProvider} from "@paypal/react-paypal-js";

ReactDOM.render(
  <React.StrictMode>
    <PayPalScriptProvider >
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
    </PayPalScriptProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
