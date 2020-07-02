import { FETCHING_SCIFI, FETCHING_SCIFI_SUCCESS, FETCHING_SCIFI_FAILURE } from '../actions/types';

const initialState = {
	isFetching: false,
	error: '',
	genreData: []
};

function scifiReducer(state = initialState, action) {
	switch (action.type) {
		case FETCHING_SCIFI:
			return {
				...state,
				isFetching: true
			};
		case FETCHING_SCIFI_SUCCESS:
			return {
				...state,
				isFetching: false,
				genreData: action.genreData
			};
		case FETCHING_SCIFI_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
}

export default scifiReducer;
