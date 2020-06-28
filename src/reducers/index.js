import { combineReducers } from 'redux';
import trendingReducer from './trendingReducer';
import tvModalReducer from './tvModalReducer';

export default combineReducers({
	trending: trendingReducer,
	tvShow: tvModalReducer
});
