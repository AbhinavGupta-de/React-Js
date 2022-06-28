import styled from 'styled-components';

const Leftside = (props) => {
	return (
		<Container>
			<h1>Hello, I am leftside.</h1>
		</Container>
	);
};

const Container = styled.div`
	grid-area: leftside;
`;

export default Leftside;
