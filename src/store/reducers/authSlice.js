import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронный thunk для входа
export const login = createAsyncThunk(
	'auth/login', // Уникальный идентификатор thunk'а
	async (credentials, { rejectWithValue }) => {
		try {
			// Отправляем запрос на сервер
			const response = await axios.post('/api/login', credentials);
			return response.data; // Предполагается, что сервер вернёт { token, user }
		} catch (error) {
			// Если ошибка, передаём её в `rejected` состояние
			return rejectWithValue(error.response.data.messagea);
		}
	}
);

export const register = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
	try {
		const response = await axios.post('/api/register', userData);
		return response.data; // Предполагается, что сервер вернёт { token, user }
	} catch (error) {
		return rejectWithValue(error.response.data.message);
	}
});

const authSlice = createSlice({
	name: 'auth', // Уникальное имя
	initialState: {
		user: null, // Информация о пользователе
		token: null, // Токен аутентификации
		isLoading: false, // Состояние загрузки
		error: null, // Сообщение об ошибке
	},
	reducers: {
		// logout: Сбрасывает состояние (выход пользователя)
		logout(state) {
			state.user = null;
			state.token = null;
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			// login.pending: Устанавливает состояние загрузки (isLoading = true) и сбрасывает ошибку.
			.addCase(login.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			// login.fulfilled: Сохраняет данные пользователя и токен, убирает состояние загрузки.
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = action.payload.user; // Берём данные пользователя из payload
				state.token = action.payload.token; // Сохраняем токен
			})
			// login.rejected: Сохраняет ошибку и завершает загрузку.
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload; // Сохраняем текст ошибки
			})
			.addCase(register.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = action.payload.user;
				state.token = action.payload.token;
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
