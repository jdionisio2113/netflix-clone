import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTrending } from '../actions';
import Trending from '../components/Trending';

class TrendingContainer extends Component {
	componentDidMount() {
		this.props.getTrending();
	}

	render() {
		return (
			<div>
				<Trending trending={this.props.trending} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		trending: state.trending
	};
};

export default connect(mapStateToProps, { getTrending })(TrendingContainer);
