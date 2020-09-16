import React from 'react';
import '../public/style.scss';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { render } from 'react-dom';

const initialState = {};

const middleware = [ thunk ];

const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware)
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
