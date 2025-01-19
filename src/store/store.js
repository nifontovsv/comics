import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
// import { catalogComicsReducer } from './reducers/catalogComicsReducer';
import { thunk } from 'redux-thunk';
import cartReducer from './reducers/cartReducer';
import authReducer from './reducers/authSlice';
import comicsReducer from './reducers/comicsReducer';

export const store = configureStore(
	{
		reducer: {
			cart: cartReducer,
			// catalogComics: catalogComicsReducer,
			auth: authReducer,
			comics: comicsReducer,
		},
	},
	applyMiddleware(thunk)
);
window.store = store;
