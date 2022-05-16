import './App.css';
import Footer from './Footer';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './Cart';

// ! Switch is the depricated method for Routes in the new react-router-dom; learn it for new things.
// * Switch is found in react-router-dom@5

function App() {
	return (
		<Router>
			<div className="App">
				{/* Since we need Header regardless of the page so we can add it into our div directly as it it's not based on the swtich thing.*/}

				<Switch>
					<Route path="/cart">
						<Header />
						<Cart />
					</Route>

					{/* Always place your home page at the bottom of the router.*/}
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
