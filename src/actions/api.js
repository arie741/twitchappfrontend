export const FETCH = 'FETCH';

export const apiFetch = (response) => {
	return {
		type: FETCH,
		payload: response
	}
}