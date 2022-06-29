import styled from 'styled-components';

const Rightside = (props) => {
	return (
		<Container>
			<FollowCard>
				<Title>
					<h2>Add to your feed.</h2>
					<img src="/images/feed-icon.svg" alt="" />
				</Title>

				<FeedList>
					<li>
						<a>
							<Avatar />
						</a>
						<div>
							<span>#Linkedin</span>
							<button>Follow</button>
						</div>
					</li>
					<li>
						<a>
							<Avatar />
						</a>
						<div>
							<span>#Video</span>
							<button>Follow</button>
						</div>
					</li>
				</FeedList>
			</FollowCard>
		</Container>
	);
};

const Container = styled.div`
	grid-area: rightside;
`;

const FollowCard = styled.div`
	text-align: center;
	overflow: hidden;
	margin-bottom: 8px;
	background-color: #fff;
	border-radius: 5px;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
	padding: 12px;
`;

const Title = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	font-size: 16px;
	width: 100%;
	color: rgba(0, 0, 0, 0.6);
`;

export default Rightside;
