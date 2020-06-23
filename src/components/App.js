import React from 'react';
import axios from 'axios';
import { get, all } from 'axios';
import API_KEY from '../config/api_key';

import TrendingContainer from '../containers/TrendingContainer';

class App extends React.Component {
	render() {
		return (
			<div>
				<TrendingContainer />
			</div>
		);
	}
}

export default App;