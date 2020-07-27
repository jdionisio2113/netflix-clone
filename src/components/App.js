import React from 'react';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import API_KEY from '../config/api_key';

import GenreSliderContainer from '../containers/GenreSliderContainer';
import TvModalContainer from '../containers/TvModalContainer';
import SearchContainer from '../containers/SearchContainer';
import AppNavbarContainer from '../containers/AppNavbarContainer';

class App extends React.Component {
	render() {
		return (
			// <BrowserRouter>
			<div>
				<Router>
					<Route to="/" component={AppNavbarContainer} />
					<Switch>
						<Route exact path="/" component={GenreSliderContainer} />
						<Route exact path="/Tv/:id" component={TvModalContainer} />
						<Route path="/search/q=:search" component={SearchContainer} />
					</Switch>
				</Router>
			</div>
			// </BrowserRouter>
		);
	}
}

export default App;
