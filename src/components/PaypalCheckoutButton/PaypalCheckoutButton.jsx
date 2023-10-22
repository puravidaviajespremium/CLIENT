import styles from "./PaypalCheckoutButton.module.css"

const PaypalCheckoutButton = (props) => {

    const handleClicPayment = async () => {
        const response = await fetch("http://localhost:3001/paypal/create-payment", {
            method: "GET"
        })
        const data = await response.json();
        console.log(data);
        window.location.href = data[1].href;
    }

    return (
        <>
            <button className={`btnPrimary`} onClick={handleClicPayment}>{props.text}</button>
        </>
    )
}

export default PaypalCheckoutButton;