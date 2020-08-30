import { SEARCHING, SEARCHING_SUCCESS, SEARCHING_FAILURE } from '../actions/types';

const initialState = {
	isFetching: false,
	query: '',
	tvShows: [],
	error: ''
};

function searchReducer(state = initialState, action) {
	switch (action.type) {
		case SEARCHING:
			return {
				...state,
				isFetching: true,
				query: action.query
			};
		case SEARCHING_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: '',
				tvShows: action.tvShows,
				query: action.query
			};
		case SEARCHING_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error,
				query: action.query
			};
		default:
			return state;
	}
}

export default searchReducer;
