import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route path="/home">
						<Home />
					</Route>

					<Route exact path="/">
						<Login />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
