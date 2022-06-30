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

export default Main;
