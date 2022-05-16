import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://m.media-amazon.com/images/I/81KVdS+84PL._SX3000_.jpg"
					alt=""
				/>
			</div>

			<div className="home__row">
				<Product
					tittle="iQOO 9 Pro 5G"
					id={163323}
					price="64,990"
					rating={4}
					image="https://m.media-amazon.com/images/I/61lWkGr0RiL._SX679_.jpg"
				/>

				<Product
					tittle="Honor 2 BT Watch 2 with Battery- Charcoal Black"
					price="9,543"
					id={163321}
					rating={4}
					image="https://m.media-amazon.com/images/I/61W4meSdVQL._SX522_.jpg"
				/>
				<Product
					tittle="SteelSeries Apex 5 Hybrid Mechanical Gaming Keyboard"
					price="14,999"
					id={163313}
					rating={5}
					image="https://m.media-amazon.com/images/I/81yd9W+0doL._SX679_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					tittle="Atomic Habits: The life-changing million copy bestseller"
					price="990"
					id={363323}
					rating={5}
					image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F77%2Fe9%2F9c%2F77e99cfeab775d06de54bb3725de36fe.jpg&f=1&nofb=1"
				/>
				<Product
					tittle="Crompton Zelus DAC Desert Air Cooler"
					price="7,480"
					id={313323}
					rating={3}
					image="https://m.media-amazon.com/images/I/419dkVEqR3L._SX679_.jpg"
				/>

				<Product
					tittle="Rich Dad Poor Dad"
					price="841"
					id={166323}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"
				/>

				<Product
					tittle="Percy Jackson and the Olympians"
					price="5,493"
					id={161253}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/41426MMPNeL._SY498_BO1,204,203,200_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					tittle="OnePlus 43 inches Y-Series 4K Ultra HD Smart Android LED TV"
					price="29,999"
					rating={4}
					id={163139}
					image="https://m.media-amazon.com/images/I/81qoKyMES2L._SX679_.jpg"
				/>

				<Product
					tittle="Amazon Brand - Solimo Fame MDF Study Desk"
					price="4,693"
					rating={5}
					id={999999}
					image="https://m.media-amazon.com/images/I/81OO9-uuAsL._SX679_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
