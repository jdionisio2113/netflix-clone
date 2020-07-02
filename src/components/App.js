import React from 'react';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
import API_KEY from '../config/api_key';

import AppNavbar from './AppNavbar';
import GenreSliderContainer from '../containers/GenreSliderContainer';
import TvModalContainer from '../containers/TvModalContainer';

class App extends React.Component {
	render() {
		return (
			<div>
				<AppNavbar />
				<Router>
					<Switch>
						<Route exact path="/" component={GenreSliderContainer} />
						<Route exact path="/Tv/:id" component={TvModalContainer} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
