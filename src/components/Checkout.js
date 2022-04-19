import React from "react";
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../redux/StateProvider";

function Checkout() {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className="checkout">
			{/* Checkout Left */}
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt="banner ad"
				/>
				<div>
					<h2 className="checkout__title">Your shopping Basket</h2>
					{/* Checkout Product */}
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
			{/* Checkout Right */}
			<div className="checkout__right">
				{/* subtotal */}
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
