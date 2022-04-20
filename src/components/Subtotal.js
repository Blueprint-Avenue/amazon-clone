import React from "react";
import "../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../redux/StateProvider";
import { calculateTotal } from "../redux/reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
	const navigate = useNavigate();
	// Pull the basket from useStateValue
	const [{ basket }] = useStateValue();

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket.length} items):
							<strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={calculateTotal(basket)}
				displayType={"text"}
				thousandSeperator={true}
				prefix={"$"}
			/>
			<button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
