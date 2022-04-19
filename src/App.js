import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
	return (
		<Router>
			<div className="App">
				{/* Header */}
				<Header />
				<Switch>
					<Route exact={true} path="/checkout">
						{/* Checkout */}
						<Checkout />
					</Route>
					<Route exact={true} path="/">
						{/* Home */}
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
