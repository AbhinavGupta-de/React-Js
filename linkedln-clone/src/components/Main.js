/*  

Hello, I am Abhinav Gupta. Thanks for visiting the project made up me, hope you like and if you find that you tell me to imporove this do tell me. How to reach me? Mail me at abhinavgupta4505@gmail.com

*/

import styled from 'styled-components';

const Main = (props) => {
	return (
		<Container>
			<ShareBox>
				Share
				<div>
					<img src="/images/user.svg" alt="" />
					<button>Start a post</button>
				</div>
				<div>
					<button>
						<img src="/images/photo-icon.svg" alt="" />
						<span>Photo</span>
					</button>

					<button>
						<img src="/images/video-icon.svg" alt="" />
						<span>Video</span>
					</button>

					<button>
						<img src="/images/event-icon.svg" alt="" />
						<span>Event</span>
					</button>

					<button>
						<img src="/images/article-icon.svg" alt="" />
						<span>Write Article</span>
					</button>
				</div>
			</ShareBox>
			<div>
				<Article>
					<SharedActor>
						<a>
							<img src="/images/user.svg" alt="" />
							<div>
								<span>Tittle</span>
								<span>Info</span>
								<span>Date</span>
							</div>
						</a>
						<button>
							<img src="/images/ellipsis-icon.svg" alt="" />
						</button>
					</SharedActor>
					<Discription>Discription</Discription>
					<SharedImg>
						<a>
							<img src="/images/shared-image.webp" alt="" />
						</a>
					</SharedImg>
					<SocialCount>
						<li>
							<button>
								<img src="/images/like-emoji.png" alt="" />
								<img src="/images/celebrate-icon.png" alt="" />
								<span>75</span>
							</button>
						</li>
						<li>
							<a>2 comments</a>
						</li>
					</SocialCount>
					<SocialAction>
						<button>
							<img src="/images/like-icon.svg" alt="" />
							<span>Like</span>
						</button>
						<button>
							<img src="/images/comment-icon.svg" alt="" />
							<span>Comment</span>
						</button>
						<button>
							<img src="/images/share-icon.svg" alt="" />
							<span>Share</span>
						</button>
						<button>
							<img src="/images/send-icon.svg" alt="" />
							<span>Send</span>
						</button>
					</SocialAction>
				</Article>
			</div>
		</Container>
	);
};

const Container = styled.div`
	grid-area: main;
`;

const CommonCard = styled.div`
	text-align: center;
	overflow: hidden;
	margin-bottom: 8px;
	background-color: #fff;
	border-radius: 5px;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
	display: flex;
	flex-direction: column;
	color: #958b7b;
	margin: 0 0 8px;
	background: white;

	div {
		button {
			outline: none;
			font-size: 14px;
			line-height: 1.5;
			min-height: 48px;
			background: white;
			border: none;
			font-weight: 600;
			font-family: cursive;
			align-items: center;
			display: flex;
		}

		span {
			color: #0a66c2;
		}

		&:first-child {
			display: flex;
			align-items: center;
			padding: 8px 16px 0px 16px;

			img {
				width: 48px;
				border-radius: 50px;
				margin-right: 8px;
			}

			button {
				color: rgba(0, 0, 0, 0.7);
				margin: 4px 0;
				flex-grow: 1;
				border-radius: 35px;
				padding-left: 16px;
				border: 1px solid rgba(0, 0, 0, 0.15);
				text-align: left;
			}
		}

		&:nth-child(2) {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding-bottom: 4px;

			button {
				img {
					margin: 0 4px 0 -2px;
					width: 22px;
				}
			}
		}
	}
`;

const Article = styled(CommonCard)`
	padding: 0px;
	margin: 0 0 8px;
	overflow: visible;
`;

const SharedActor = styled.div`
	padding-right: 40px;
	flex-wrap: nowrap;
	padding: 12px 16px 0;
	margin-bottom: 8px;
	align-items: center;

	display: flex;

	a {
		margin-right: 12px;
		flex-grow: 1;
		overflow: hidden;
		display: flex;

		img {
			width: 48px;
			height: 48px;
		}

		& > div {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			flex-basis: 0;
			overflow: hidden;
			margin-left: 8px;

			span {
				text-align: left;
				&:first-child {
					font-size: 14px;
					font-weight: 700;
					color: rgba(0, 0, 0, 1);
				}

				&:nth-child(n + 1) {
					font-size: 12px;
					color: black;
				}
			}
		}
	}

	button {
		background: white;
		outline: none;
		border: none;
		position: absolute;
		right: 12px;
		top: 0;
	}
`;

const Discription = styled.div`
	padding: 0 16px;
	overflow: hidden;
	color: rgba(0, 0, 0, 0.9);
	font-size: 14px;
	text-align: left;
`;

const SharedImg = styled.div`
	margin-top: 8px;
	display: block;
	width: 100%;
	position: relative;
	background-color: #f9fafb;

	img {
		width: 98%;
		height: 100%;
	}
`;

const SocialCount = styled.ul`
	line-height: 1.5;
	display: flex;
	align-items: flex-start;
	overflow: auto;
	border-bottom: 1px solid #e9e5df;
	list-style: none;
	justify-content: space-between;

	li {
		margin-right: 5px;
		font-size: 10px;
		button {
			display: flex;
			align-items: center;
			border: none;
			background-color: white;

			img {
				height: 10px;
				width: 10px;
				margin-right: 2px;
			}

			span {
				font-size: 10px;
				color: black;
				margin-left: 2px;
			}
		}
		a {
			color: black;
		}
	}
`;

const SocialAction = styled.div`
	align-items: center;
	display: flex;
	/* justify-content: flex-start; */
	justify-content: space-around;
	margin: 0;
	max-height: 40px;
	padding: 4px 8px;
	width: 95%;
	overflow: hidden;

	button {
		display: inline-flex;
		align-items: center;
		color: #0a66c2;
		font-weight: 700;
		font-family: cursive;
		background-color: white;
		border: none;

		span {
			margin-left: 4px;
		}
	}
`;

export default Main;
