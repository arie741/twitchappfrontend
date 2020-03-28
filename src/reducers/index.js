import apiReducer from './apiReducer';
import linkListReducer from './linkListReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
	apiResponse: apiReducer,
	linkList: linkListReducer
});

export default reducers;