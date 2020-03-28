const initialState = {
	fetching: false,
	fetched: false, 
	payload: {},
	error: null
}

const linkListReducer = (state = initialState, action) => {
	switch(action.type){
		case 'FETCH_LINKS_PENDING':
			return Object.assign({...state}, {fetching: true});
		    break;
		case 'FETCH_LINKS_FULFILLED':
			return Object.assign({...state}, {fetching: false}, {fetched: true}, {payload: action.payload});
			break;
		case 'FETCH_LINKS_REJECTED':
			return  Object.assign({...state}, {fetching: false}, {payload: action.payload}, {error:true})
			break;
		default:
			return state;
			break;
	}
}

export default linkListReducer;