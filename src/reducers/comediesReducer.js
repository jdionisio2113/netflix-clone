import { FETCHING_COMEDIES, FETCHING_COMEDIES_SUCCESS, FETCHING_COMEDIES_FAILURE } from '../actions/types';

const initialState = {
	isFetching: false,
	error: '',
	genreData: []
};

function comediesReducer(state = initialState, action) {
	switch (action.type) {
		case FETCHING_COMEDIES:
			return {
				...state,
				isFetching: true
			};
		case FETCHING_COMEDIES_SUCCESS:
			return {
				...state,
				isFetching: false,
				genreData: action.genreData
			};
		case FETCHING_COMEDIES_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
}

export default comediesReducer;
