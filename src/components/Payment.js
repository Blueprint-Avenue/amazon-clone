import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../redux/StateProvider";
import "../styles/Payment.css";
import CheckoutProduct from "./CheckoutProduct";

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();
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
					<div className="payment__details">{/* Stripe Methods */}</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
