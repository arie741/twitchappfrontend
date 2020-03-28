export const FETCH_LINKS = 'FETCH_LINKS';

export const linksFetch = (response) => {
	return {
		type: FETCH_LINKS,
		payload: response
	}
}