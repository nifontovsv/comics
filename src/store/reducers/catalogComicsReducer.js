export const ADD_COMICS = 'ADD_COMICS';
export const DELETE_COMICS = 'DELETE_COMICS';
export const LOAD_COMICS = 'LOAD_COMICS';

export const catalogComicsReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_COMICS:
			return [...state, action.payload];
		case DELETE_COMICS:
			return state.filter((el, i) => i !== action.payload);
		case LOAD_COMICS:
			return action.payload;
		default:
			return state;
	}
};
