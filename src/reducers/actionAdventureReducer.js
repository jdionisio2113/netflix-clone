import {
	FETCHING_ACTION_ADVENTURE,
	FETCHING_ACTION_ADVENTURE_SUCCESS,
	FETCHING_ACTION_ADVENTURE_FAILURE
} from '../actions/types';

const initialState = {
	isFetching: false,
	error: '',
	// shows: []
	genreData: []
};

function actionAdventureReducer(state = initialState, action) {
	switch (action.type) {
		case FETCHING_ACTION_ADVENTURE:
			return {
				...state,
				isFetching: true
			};
		case FETCHING_ACTION_ADVENTURE_SUCCESS:
			return {
				...state,
				isFetching: false,
				genreData: action.genreData
			};
		case FETCHING_ACTION_ADVENTURE_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
}

export default actionAdventureReducer;
