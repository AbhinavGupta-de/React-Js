import React from 'react';
import StateContext from './StateContext';
import { useState } from 'react';

const ContextState = (props) => {
	const cartState = {
		cart: [],
	};
	const [state] = useState(cartState);
	const update = (id) => {
		state.cart.push(id);
	};

	return (
		<StateContext.Provider value={{ state, update }}>
			{props.children}
		</StateContext.Provider>
	);
};

export default ContextState;

// export const StateProvider = ({ reducer, intialState, props }) => {
// 	<StateContext.Provider value={useReducer(reducer, intialState)}>
// 		{props.children}
// 	</StateContext.Provider>;
// };

// export const useStateValue = () => useContext(StateContext);
