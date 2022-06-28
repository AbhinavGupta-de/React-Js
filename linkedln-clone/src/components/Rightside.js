import styled from 'styled-components';

const Rightside = (props) => {
	return (
		<Container>
			<h1>Hello, I am rightside.</h1>
		</Container>
	);
};

const Container = styled.div`
	grid-area: rightside;
`;

export default Rightside;
