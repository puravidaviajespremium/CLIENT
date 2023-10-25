import styles from "./PaypalCheckoutButton.module.css"
import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const PaypalCheckoutButton = (props) => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
  
    const handleClicPayment = async () => {
      if (!isAuthenticated) {
        // Guarda la URL actual en el localStorage
        localStorage.setItem("redirectUrl", window.location.pathname);
  
        
        loginWithRedirect();
      } else {
        
        const paypalUrl = localStorage.getItem("paypalUrl");
  
        if (paypalUrl) {
          
          window.location.href = paypalUrl;
        } else {
          
          handleDefaultPaymentRedirect();
        }
      }
    };
  
    
    const handleDefaultPaymentRedirect = async () => {
      try {
        const response = await fetch("http://localhost:3001/paypal/create-payment", {
          method: "GET",
        });
        const data = await response.json();
        console.log(data);
  
        // Almacena la URL de PayPal en el localStorage
        localStorage.setItem("paypalUrl", data[1].href);
  
       
        window.location.href = data[1].href;

      } catch (error) {
        console.error("Error al obtener la URL de PayPal:", error);
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