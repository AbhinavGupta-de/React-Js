export const intialState = {
	cart: [],
	user: null,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				cart: [...state.cart, action.item],
			};
		default:
			return state;
	}
};

export default reducer;
