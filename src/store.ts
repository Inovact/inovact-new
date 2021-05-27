import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
	// Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
	reducers,
	/* preloadedState, */
	composeEnhancers(
		applyMiddleware(thunk)
		// other store enhancers if any
	)
);

export default store;
