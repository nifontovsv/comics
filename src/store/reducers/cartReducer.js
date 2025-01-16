export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const initialState = {
	items: [], // Массив для хранения добавленных товаров
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			// Проверяем, есть ли товар уже в корзине
			const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
			if (existingItemIndex !== -1) {
				// Если товар уже есть, увеличиваем количество
				const updatedItems = [...state.items];
				updatedItems[existingItemIndex].quantity += action.payload.quantity;
				return { ...state, items: updatedItems };
			}
			// Если товара нет, добавляем его в корзину
			return {
				...state,
				items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }],
			};

		case REMOVE_FROM_CART:
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload),
			};

		default:
			return state;
	}
};
