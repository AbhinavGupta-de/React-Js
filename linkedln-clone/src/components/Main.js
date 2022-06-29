import styled from 'styled-components';

const Main = (props) => {
	return (
		<Container>
			<h1>Hello, I am main.</h1>
		</Container>
	);
};

const Container = styled.div`
	grid-area: main;
`;

const CommonCard = styled.div`
	text-align: center;
`;

export default Main;
