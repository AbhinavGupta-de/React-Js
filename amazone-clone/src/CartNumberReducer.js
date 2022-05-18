import { configureStore } from 'redux';
import { useContext } from 'react';
import StateContext from './StateContext';

const reducer = (state, action) => {
	if (action.type === 'ADD_TO_CART') {
		return state + action.id;
	} else {
		return state;
	}
};

const state = useContext(StateContext);

export const store = configureStore(reducer);
