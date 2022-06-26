import styled from 'styled-components';

const Login = (props) => {
	return (
		<Container>
			<Nav>
				<a href="/">
					<img src="/images/login-logo.svg" alt="" />
				</a>
				<div>
					<Join>Join Now</Join>
					<SignIn>Sign in</SignIn>
				</div>
			</Nav>
			<Section>
				<Hero>
					<h1>Welcome to your profession community!</h1>
					<img src="/images/login-hero.svg" alt="" />
				</Hero>
				<Form>
					<Google>
						<img src="/images/google.svg" alt="" />
						Sign in with Google
					</Google>
				</Form>
			</Section>
		</Container>
	);
};

const Container = styled.div`
	padding: 0px;
`;

const Nav = styled.nav`
	max-width: 1123px;
	margin: auto;
	padding: 12px 0 16px;
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	position: relative;
	justify-content: space-between;

	& > a {
		width: 135px;
		height: 34px;
		@media (max-width: 786px) {
			padding: 0 5px;
		}
	}
`;

const Join = styled.a`
	font-size: 16px;
	letter-spacing: 0.2mm;
	padding: 10px 12px;
	margin: 2px;
	text-decoration: none;
	color: rgba(0, 0, 0, 0.7);
	&:hover {
		background-color: #0a66c2;
		color: white;
		border-radius: 4px;
	}
`;

const SignIn = styled.a`
	color: #0a66c2;
	box-shadow: inset 0 0 0 1px #0a66c2;
	border-radius: 24px;
	transition-duration: 167ms;
	font-size: 16px;
	font-weight: 600;
	padding: 10px 24px;
	line-height: 40px;
	text-align: center;
	background-color: rgba(0, 0, 0, 0);
	&:hover {
		background-color: rgba(112, 181, 249, 0.15);
		text-decoration: none;
	}
`;

const Section = styled.section`
	display: flex;
	text-align: start;
	min-height: 700px;
	padding-bottom: 138px;
	padding-top: 40px;
	padding: 60px 0;
	position: relative;
	flex-wrap: wrap;
	width: 100%;
	max-width: 1128px;
	align-items: center;
	margin: auto;
	@media (max-width: 768px) {
		margin: auto;
		min-height: 0px;
	}
`;

const Hero = styled.div`
	width: 100%;
	h1 {
		padding-bottom: 0;
		width: 55%;
		font-size: 56px;
		color: #2977c9;
		font-weight: 200px;
		line-height: 70px;
		@media (max-width: 786px) {
			text-align: center;
			font-size: 18px;
			line-height: normal;
			width: 100%;
		}
	}

	img {
		width: 700px;
		height: 670px;
		position: absolute;
		bottom: -2px;
		right: -250px;
		@media (max-width: 786px) {
			top: 230px;
			width: initial;
			height: initial;
			position: initial;
		}
	}
`;

const Form = styled.div`
	margin-top: 100px;
	width: 408px;
	@media (max-width: 786px) {
		margin-top: 20px;
	}
`;

const Google = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	height: 56px;
	width: 100%;
	border-radius: 28px;
	box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
		inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
	vertical-align: middle;
	z-index: 0;
	transition-duration: 167ms;
	font-size: 20px;
	color: rgba(0, 0, 0, 0.6);
	&:hover {
		background-color: rgba(207, 207, 207, 0.35);
		color: rgba(0, 0, 0, 0.75);
	}
`;

export default Login;
