export default function reducer(
	initialState = [{ name: '', email: '', photo: '' }],
	action
) {
	let finalState = initialState;
	switch (action.type) {
		case 'login':
			return [
				(finalState = {
					...initialState,
					name: action.payload.name,
					email: action.payload.email,
					photo: action.payload.photo,
				}),
			];
		case 'signOut':
			return [
				(finalState = {
					...initialState,
					name: null,
					email: null,
					photo: null,
				}),
			];
		default:
			return finalState;
	}
}
