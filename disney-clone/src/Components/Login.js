import React from 'react';
import './CSS/Login.css';

function Login() {
	return (
		<div className="login__Contianer">
			<div className="login__Content">
				<div className="login__cta">
					<img
						className="login__ctaLogoOne"
						src="/images/cta-logo-one.svg"
						alt=""
					/>
					<button type="button" className="login__ctaLink">
						GET ALL THERE
					</button>
					<p className="login__ctaDiscription">
						Get the Disney + subsricption to watch IPL, latest movies, TV shows
						and much more. Hurry up because the prices are going to increase
						from 31/5/2022.
					</p>
					<img
						className="login__ctaLogoTwo"
						src="/images/cta-logo-two.png"
						alt=""
					/>
				</div>

				<div>
					<img
						className="login__BgImage"
						src="/images/login-background.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default Login;
