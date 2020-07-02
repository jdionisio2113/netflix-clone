import {
	FETCHING_DOCUMENTARIES,
	FETCHING_DOCUMENTARIES_SUCCESS,
	FETCHING_DOCUMENTARIES_FAILURE
} from '../actions/types';

const initialState = {
	isFetching: false,
	error: '',
	genreData: []
};

function documentariesReducer(state = initialState, action) {
	switch (action.type) {
		case FETCHING_DOCUMENTARIES:
			return {
				...state,
				isFetching: true
			};
		case FETCHING_DOCUMENTARIES_SUCCESS:
			return {
				...state,
				isFetching: false,
				genreData: action.genreData
			};
		case FETCHING_DOCUMENTARIES_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
}

export default documentariesReducer;
