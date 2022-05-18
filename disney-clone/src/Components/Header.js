import { navigate } from '@reach/router';
import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import store from '../app/Store';
import { auth, provider } from '../firebase';
import './CSS/Header.css';

function Header() {
	let state = store.getState();
	let userName = state[0].name;
	let userPhoto = state[0].photo;
	var loginButton = userName.length > 0;

	if (loginButton) {
		navigate('/home');
	}

	const handleAuth = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				setUser(result.user);
				updateUser();
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	const setUser = (user) => {
		store.dispatch({
			type: 'login',
			payload: {
				name: user.displayName,
				email: user.email,
				photo: user.photoURL,
			},
		});
	};

	const updateUser = () => {
		state = store.getState();
		userName = state[0].name;
		userPhoto = state[0].photo;
	};

	return (
		<div className="header">
			<nav className="header__nav">
				<img
					className="header__navLogo"
					src="/images/logo.svg"
					alt="Disney +"
				/>

				{!loginButton ? (
					<>
						<Link to="/" onClick={handleAuth}>
							<div className="header__navLogin">Login</div>
						</Link>
					</>
				) : (
					<>
						<div className="header__navMenu">
							<Link to="/home">
								<img
									className="header__navMenuIcons"
									src="/images/home-icon.svg"
									alt=""
								/>
							</Link>

							<span className="header__navMenuHomeSpan">Home</span>
							<div className="header__navMenuHomeIconLine"></div>

							<Link to="/search">
								<img
									className="header__navMenuIcons"
									src="/images/search-icon.svg"
									alt=""
								></img>
							</Link>
							<span className="header__navMenuSearchSpan">Search</span>
							<div className="header__navMenuSearchIconLine"></div>
							<Link to="/wathlist">
								<img
									className="header__navMenuIcons"
									src="/images/watchlist-icon.svg"
									alt="WATCHLIST"
								/>
							</Link>
							<span className="header__navMenuWatchlistSpan">Watchlist</span>
							<div className="header__navMenuWatchlistIconLine"></div>
							<Link to="/originals">
								<img
									className="header__navMenuIcons"
									src="/images/original-icon.svg"
									alt="ORIGINALS"
								/>
							</Link>
							<span className="header__navMenuOriginalsSpan">Originals</span>
							<div className="header__navMenuOriginalsIconLine"></div>
							<Link to="/movies">
								<img
									className="header__navMenuIcons"
									src="/images/movie-icon.svg"
									alt="MOVIES"
								/>
							</Link>
							<span className="header__navMenuMoviesSpan">Movies</span>
							<div className="header__navMenuMoviesIconLine"></div>
							<Link to="/series">
								<img
									className="header__navMenuIcons"
									src="/images/series-icon.svg"
									alt="SERIES"
								/>
							</Link>
							<span className="header__navMenuSeriesSpan">Series</span>
							<div className="header__navMenuSeriesIconLine"></div>
						</div>
						<img
							className="header__navMenu__userImage"
							src={userPhoto}
							alt={userName}
						/>
					</>
				)}
			</nav>
		</div>
	);
}

export default Header;
