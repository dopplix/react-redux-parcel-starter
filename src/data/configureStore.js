import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './rootReducer';

export const history = createBrowserHistory();
const rootReducer = createRootReducer(history);
const enhancer = composeWithDevTools(applyMiddleware(routerMiddleware(history)));
export const store = createStore(rootReducer,enhancer);
