import React from 'react';
import axios from 'axios';
import { get, all } from 'axios';
import API_KEY from '../config/api_key';

import AppNavbar from './AppNavbar';
import TrendingContainer from '../containers/TrendingContainer';

class App extends React.Component {
	render() {
		return (
			<div>
				<AppNavbar />
				<TrendingContainer />
			</div>
		);
	}
}

export default App;
