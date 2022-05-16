import './Product.css';
import React, { useContext } from 'react';
import StateContext from './StateContext';

function Product({ id, tittle, price, rating, image }) {
	const state = useContext(StateContext);
	const addToCart = (event) => {
		console.log('Hello');
		const id = event.target.value;
		console.log(id);

		state.update(id);

		console.log(state.state.cart.length);
	};
	return (
		<div className="product">
			<div className="product__info">
				<p className="prduct__name">{tittle}</p>
				<p className="prduct__price">
					<small>₹</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => '⭐')}
				</div>
			</div>

			<img src={image} alt="" />

			<button type="button" value={id} onClick={addToCart}>
				Add to Cart
			</button>
		</div>
	);
}

export default Product;
