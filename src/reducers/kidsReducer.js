import { FETCHING_KIDS, FETCHING_KIDS_SUCCESS, FETCHING_KIDS_FAILURE } from '../actions/types';

const initialState = {
	isFetching: false,
	error: '',
	genreData: []
};

function kidsReducer(state = initialState, action) {
	switch (action.type) {
		case FETCHING_KIDS:
			return {
				...state,
				isFetching: true
			};
		case FETCHING_KIDS_SUCCESS:
			return {
				...state,
				isFetching: false,
				genreData: action.genreData
			};
		case FETCHING_KIDS_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
}

export default kidsReducer;
