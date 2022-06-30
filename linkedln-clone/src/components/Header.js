import styled from 'styled-components';

const Header = (props) => {
	return (
		<Container>
			<Content>
				<Logo>
					<a href="/home">
						<img src="/images/home-logo.svg" alt="" />
					</a>
				</Logo>
				<Search>
					<div>
						<input type="text" placeholder="Search" />
					</div>
					<SearchIcon>
						<img src="/images/search-icon.svg" alt="" />
					</SearchIcon>
				</Search>
				<Nav>
					<NavListWrap>
						<Navlist className="active">
							<a>
								<img src="/images/nav-home.svg" alt="" />
								<span>Home</span>
							</a>
						</Navlist>
						<Navlist>
							<a>
								<img src="/images/nav-network.svg" alt="" />
								<span>Network</span>
							</a>
						</Navlist>
						<Navlist>
							<a>
								<img src="/images/nav-jobs.svg" alt="" />
								<span>Jobs</span>
							</a>
						</Navlist>
						<Navlist>
							<a>
								<img src="/images/nav-messaging.svg" alt="" />
								<span>Messaging</span>
							</a>
						</Navlist>
						<Navlist>
							<a>
								<img src="/images/nav-notifications.svg" alt="" />
								<span>Notifcation</span>
							</a>
						</Navlist>
						<User>
							<a>
								<img src="/images/up-arrow-list.svg" id="user-upList" alt="" />

								<img src="/images/user.svg" alt="" />
								<span>
									Me{' '}
									<img src="/images/down-icon.svg" id="user-dropDown" alt="" />
								</span>
							</a>

							<SignOut>
								<a>Sign Out</a>
							</SignOut>
						</User>
						<Work>
							<a>
								<img src="/images/nav-work.svg" alt="" />
								<span>
									Work
									<img src="/images/down-icon.svg" alt="" />
								</span>
							</a>
						</Work>
					</NavListWrap>
				</Nav>
			</Content>
		</Container>
	);
};

const Container = styled.div`
	background-color: white;
	border-bottom: 1px solid rgba(0, 0, 0, 0.08);
	left: 0;

	padding: 0 24px;
	position: fixed;
	top: 0;
	width: 100vw;
	z-index: 100;
`;
const Content = styled.div`
	display: flex;
	align-items: center;
	margin: 0 auto;
	min-height: 100%;
	max-width: 1128px;
`;

const Logo = styled.span`
	margin-right: 8px;
	font-size: 0px;
`;

const Search = styled.div`
	opacity: 1;
	flex-grow: 1;
	position: relative;
	& > div {
		max-width: 280px;
	}
	input {
		border: none;
		box-shadow: none;
		background-color: #eef3f8;
		border-radius: 2px;
		color: rgba(0, 0, 0, 0.9);
		width: 218px;
		padding: 0 8px 0 40px;
		line-height: 1.75;
		font-weight: 500;
		font-size: 14px;
		height: 34px;
		border-color: #dce6f1;
		vertical-align: text-top;
	}
`;

const SearchIcon = styled.div`
	width: 40px;
	z-index: 1;
	position: absolute;
	top: 8px;
	left: 1px;
	border-radius: 0 2px 2px 0;
	pointer-events: none;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Nav = styled.nav`
	margin-left: auto;
	display: block;

	@media (max-width: 1160px) {
		position: fixed;
		left: 0;
		bottom: 0;
		background: white;
		width: 100%;
	}
`;

const NavListWrap = styled.ul`
	display: flex;
	flex-wrap: nowrap;
	list-style-type: none;

	.active {
		span:after {
			content: '';
			transform: scaleX(1);
			border-bottom: 2px solid var(--white, #fff);
			bottom: 0;
			left: 0;
			position: absolute;
			transition: transform 0.2s ease-in-out;
			width: 100%;
			border-color: rgba(0, 0, 0, 0.9);
		}
	}
`;

const Navlist = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;

	a {
		align-items: center;
		background: transparent;
		display: flex;
		flex-direction: column;
		justify-content: center;
		line-height: 1.5;
		min-height: 40px;
		min-width: 90px;
		position: relative;
		text-decoration: none;
		font-size: 14px;
		color: black;
		font-weight: 900;

		@media (max-width: 1160px) {
			min-width: 0;
			font-size: 10px;
			width: 100%;
			max-height: 50px;
		}
	}

	span {
		color: rgba(0, 0, 0, 0.6);
		display: flex;
		align-items: center;
	}

	&:hover,
	&:active {
		a {
			span {
				color: rgba(0, 0, 0, 0.9);
			}
		}
	}

	#user-upList {
		width: 10px;
		display: none;
	}
	@media (max-width: 1160px) {
		width: 100%;
		font-weight: 700;
		#user-dropDown {
			display: none;
		}
		#user-upList {
			display: block;
		}
	}
`;

const SignOut = styled.div`
	position: absolute;
	top: 45px;
	background: white;
	border-radius: 0 0 5px 5px;
	font-size: 16px;
	height: 40px;
	text-align: center;
	display: none;
	transition-duration: 167ms;

	@media (max-width: 1160px) {
		font-size: 14px;
		top: -20px;
		height: 20px;
	}
`;

const User = styled(Navlist)`
	a > img {
		width: 24px;
		height: 25px;
		border-radius: 50%;
	}

	span {
		display: flex;
		align-items: center;
	}

	&:hover {
		${SignOut} {
			align-items: center;
			display: flex;
			justify-content: center;
		}
	}
`;
const Work = styled(User)`
	border-left: 1px solid rgba(0, 0, 0, 0.2);
`;

export default Header;
