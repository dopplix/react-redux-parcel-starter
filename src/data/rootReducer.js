import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import postReducer from './posts/reducer';
import userReducer from './users/reducer';

export default (history) => combineReducers({
    postReducer,
    userReducer,
    router: connectRouter(history)
});
