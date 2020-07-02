import { FETCHING_DRAMAS, FETCHING_DRAMAS_SUCCESS, FETCHING_DRAMAS_FAILURE } from '../actions/types';

const initialState = {
	isFetching: false,
	error: '',
	genreData: []
};

function dramasReducer(state = initialState, action) {
	switch (action.type) {
		case FETCHING_DRAMAS:
			return {
				...state,
				isFetching: true
			};
		case FETCHING_DRAMAS_SUCCESS:
			return {
				...state,
				isFetching: false,
				genreData: action.genreData
			};
		case FETCHING_DRAMAS_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
}

export default dramasReducer;
