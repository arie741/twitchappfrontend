import apiReducer from './apiReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
	apiResponse: apiReducer
});

export default reducers;