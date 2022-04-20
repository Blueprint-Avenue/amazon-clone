import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../redux/StateProvider";
import "../styles/Payment.css";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import { calculateTotal } from "../redux/reducer";

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();

	const navigate = useNavigate();

	const stripe = useStripe();
	const elements = useElements();

	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(null);
	const [clientSecret, setClientSecret] = useState(true);

	useEffect(() => {
		// generates the special stripe secret that allows us to charge a customer
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				// stripe expects the total in a currencies subunits
				url: `/payments/create?total=${calculateTotal(basket) * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};
		getClientSecret();
	}, [basket]);

	const handleSubmit = async (e) => {
		// Does the Stripe features
		e.preventDefault();
		setProcessing = true;

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				// paymentIntent = payment confirmation
				setSucceeded(true);
				setError(null);
				setProcessing(false);

				navigate.replace("/orders");
			});
	};

	const handleChange = (e) => {
		// listen to changes in the card element
		// also displays any errors as the customer types their card details
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link to="/checkout">{basket?.length} items</Link>)
				</h1>
				{/* payment section - delivery address */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>456 Max Wayze</p>
						<p>Honolulu, HI</p>
					</div>
				</div>
				{/* payment section - review items */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				{/* payment section - payment methods*/}
				<div className="payment__section">
					<div className="payment__method">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						{/* Stripe Methods */}
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => <h3>Order Total: {value}</h3>}
									decimalScale={2}
									value={calculateTotal(basket)}
									displayType={"text"}
									thousandSeperator={true}
									prefix={"$"}
								/>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
							</div>
							{/* error */}
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
