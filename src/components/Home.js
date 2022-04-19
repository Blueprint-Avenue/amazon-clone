import React from "react";
import "../styles/Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				{/* Home Image */}
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>
				{/* Product Rows */}
				<div className="home__row">
					{/* product */}
					<Product
						id="79101"
						title="Pokémon Legends: Arceus - Nintendo Switch"
						price={57.99}
						image="https://m.media-amazon.com/images/I/71HYKF4rO9L._SY445_.jpg"
						rating={5}
					/>
					{/* product */}
					<Product
						id="79102"
						title="LEGO Star Wars: The Skywalker Saga - Nintendo Switch"
						price={59.88}
						image="https://m.media-amazon.com/images/I/81nCbom+vjL._SY445_.jpg"
						rating={4}
					/>
					<Product
						id="79103"
						title="Super Smash Bros. Ultimate - Nintendo Switch"
						price={59.99}
						image="https://m.media-amazon.com/images/I/81G1qFsRHDL._SY445_.jpg"
						rating={5}
					/>
					<Product
						id="79104"
						title="Mario Kart 8 Deluxe - Nintendo Switch"
						price={57.99}
						image="https://m.media-amazon.com/images/I/81iJG2js5-S._SY445_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					{/* product */}
					<Product
						id="89101"
						title="Sony 55 Inch 4K Ultra HD TV"
						price={748}
						image="https://m.media-amazon.com/images/I/810bgxzEWHL._AC_SX355_.jpg"
						rating={3}
					/>
					{/* product */}
					<Product
						id="89102"
						title="Sony 83 Inch 4K Ultra HD Smart TV"
						price={5498}
						image="https://m.media-amazon.com/images/I/91HwNoF+fAL._AC_SX355_.jpg"
						rating={4}
					/>
					{/* product */}
					<Product
						id="89103"
						title="LG OLED A1 Series 65” Alexa Built-in 4k Smart TV"
						price={1346.99}
						image="https://m.media-amazon.com/images/I/91yk82k7IZS._AC_SY355_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					{/* product */}
					<Product
						id="99101"
						title="Apple iMac Pro 27in All-in-One Desktop, Space Gray"
						price={2170}
						image="https://m.media-amazon.com/images/I/61NW0wnWF4L._AC_SX355_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					{/* product */}
					<Product
						id="69101"
						title="Ring Stick Up Cam Battery HD security camera "
						price={89.99}
						image="https://m.media-amazon.com/images/I/51M+W1l2ShL._SY355_.jpg"
						rating={4}
					/>
					{/* product */}
					<Product
						id="69102"
						title="Honeywell HFD320 Air Genius 5 Air Purifier, Large Rooms "
						price={204.99}
						image="https://m.media-amazon.com/images/I/71io15xISYL._AC_SX355_.jpg"
						rating={4}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
