import { FETCHING_FAMILY, FETCHING_FAMILY_SUCCESS, FETCHING_FAMILY_FAILURE } from '../actions/types';

const initialState = {
	isFetching: false,
	error: '',
	genreData: []
};

function familyReducer(state = initialState, action) {
	switch (action.type) {
		case FETCHING_FAMILY:
			return {
				...state,
				isFetching: true
			};
		case FETCHING_FAMILY_SUCCESS:
			return {
				...state,
				isFetching: false,
				genreData: action.genreData
			};
		case FETCHING_FAMILY_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
}

export default familyReducer;
