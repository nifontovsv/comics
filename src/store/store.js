import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { catalogComicsReducer } from './reducers/catalogComicsReducer';
import { thunk } from 'redux-thunk';
import cartReducer from './reducers/cartReducer';
import authReducer from './reducers/authSlice';

export const store = configureStore(
	{
		reducer: {
			cart: cartReducer,
			catalogComics: catalogComicsReducer,
			auth: authReducer,
		},
	},
	applyMiddleware(thunk)
);
window.store = store;
