import { FETCH_TRENDING, FETCHING_TRENDING_SUCCESS, FETCHING_TRENDING_FAILURE } from '../actions/types';

const initialState = {
	isFetching: false,
	error: '',
	genreData: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_TRENDING:
			return {
				...state,
				isFetching: true
			};
		case FETCHING_TRENDING_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: '',
				genreData: action.genreData
			};
		case FETCHING_TRENDING_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
}
