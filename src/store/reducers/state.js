import { combineReducers } from 'redux';
import { catalogComicsReducer } from './catalogComicsReducer';
import authReducer from './authSlice';
import { cartReducer } from './cartReducer';

export const reducers = combineReducers({
	catalogComics: catalogComicsReducer,
	auth: authReducer,
	cart: cartReducer,
});
