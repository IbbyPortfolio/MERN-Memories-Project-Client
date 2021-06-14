import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

// const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

// The store now has the ability to accept thunk functions in `dispatch`

const store = createStore(rootReducer, composedEnhancer);
export default store;
