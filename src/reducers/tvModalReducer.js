import {
	FETCH_TRAILER,
	FETCH_TRAILER_SUCCESS,
	FETCH_TRAILER_FAILURE,
	FETCH_SINGLE_TVSHOW,
	FETCH_SINGLE_TVSHOW_SUCCESS,
	FETCH_SINGLE_TVSHOW_FAILURE
} from '../actions/types';

const trailersInitialState = {
	isFetching: true,
	error: '',
	trailersArr: []
};

function trailersReducer(state = trailersInitialState, action) {
	switch (action.type) {
		case FETCH_TRAILER:
			return {
				...state,
				isFetching: true
			};

		case FETCH_TRAILER_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: '',
				trailersArr: action.trailers
			};

		case FETCH_TRAILER_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
}

const tvModalInitialState = {
	isFetching: true,
	error: '',
	tvSeries: {},
	trailers: trailersInitialState
};

function tvModalReducer(state = tvModalInitialState, action) {
	switch (action.type) {
		case FETCH_SINGLE_TVSHOW:
			return { ...state, isFetching: true };

		case FETCH_SINGLE_TVSHOW_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: '',
				tvSeries: action.tvSeries
			};

		case FETCH_SINGLE_TVSHOW_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};

		case FETCH_TRAILER:
		case FETCH_TRAILER_SUCCESS:
			return {
				...state,
				trailers: trailersReducer(state.trailers, action)
			};

		default:
			return state;
	}
}

export default tvModalReducer;
