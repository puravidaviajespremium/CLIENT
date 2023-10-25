import styles from "./PaypalCheckoutButton.module.css"
import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const PaypalCheckoutButton = (props) => {

    const { isAuthenticated, loginWithRedirect } = useAuth0();

    const handleClicPayment = async () => {

        if(! isAuthenticated ) {
            loginWithRedirect();

        } else {

            const response = await fetch("http://localhost:3001/paypal/create-payment", {
                method: "GET"
            })
            const data = await response.json();
            console.log(data);
            window.location.href = data[1].href;
        }
    }

    return (
        <>
            <button className={`btnPrimary`} onClick={handleClicPayment}>{props.text}</button>
        </>
    )
}

export default PaypalCheckoutButton;