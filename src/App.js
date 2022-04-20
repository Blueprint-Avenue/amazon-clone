import React, { useEffect } from "react";
import "./App.css";
import Payment from "./components/Payment";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./redux/StateProvider";

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		// listen
		auth.onAuthStateChanged((authUser) => {
			console.log("The User Is >", authUser);
			if (authUser) {
				// means user just logged in or the user was logged in
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="App">
				{/* Header */}
				<Header />
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/payment" element={<Payment />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
