import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Header from './Components/Header';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
