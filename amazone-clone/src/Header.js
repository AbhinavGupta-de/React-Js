// ! Always make the component with capital letters
// * Use the rfce snippet from es7 snippets to make a simple component
// * When you have space between two class name that means the tag has two classes.

import React, { useContext } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import StateContext from './StateContext';

function Header() {
	const state = useContext(StateContext);
	return (
		<div className="header">
			<Link target="/cart" to="/">
				<img
					className="header__logo"
					src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
				/>
			</Link>

			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>

			<div className="header__nav">
				<div className="header__option">
					<span className="header__optionLineOne">Hello Guest</span>
					<span className="header__optionLineTwo">Sign in</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Request</span>
					<span className="header__optionLineTwo">& Order</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>

				<Link target="/" to="/cart">
					<div className="header__optionBasket">
						<ShoppingCartIcon />
						<span className="header__optionLineTwo header__basketCount">
							{state.state.cart.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
