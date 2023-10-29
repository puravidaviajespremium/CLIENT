import styles from "./PaypalCheckoutButton.module.css";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const apiUrl = import.meta.env.VITE_BASE_URL;
import axios from "axios";
import { modalError } from "../../utils/modalResults";

const PaypalCheckoutButton = (props) => {
  const { isAuthenticated, loginWithPopup } = useAuth0();

  const handleClicPayment = async () => {
    try {
      if (!isAuthenticated) loginWithPopup();
      else {
        const response = await axios(`${apiUrl}/paypal/create-payment`);
        if (!response) throw new Error("Paypal No disponible por el momento.");
        window.location.href = response.data[1].href;
      }
    } catch (error) {
      modalError(error.response.data.error || error.message);
    }
  };

  return (
    <>
      <button className={`btnPrimary`} onClick={handleClicPayment}>
        {props.text}
      </button>
    </>
  );
};

export default PaypalCheckoutButton;
