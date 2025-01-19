import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Асинхронное действие для загрузки данных
export const loadComics = createAsyncThunk('comics/loadComics', async (_, { rejectWithValue }) => {
	try {
		const response = await fetch('https://api.tvmaze.com/search/shows?q=batman');
		const data = await response.json();
		return data.map((e) => ({
			name: e.show.name,
			link_url: e.show.url,
			img_src: e.show.image.original,
			rating: e.show.rating.average,
			premiered: e.show.premiered,
			desc: e.show.summary,
			id: e.show.id,
			category: 'all',
			price: Math.round(Math.random() * (1000 - 100) + 100),
		}));
	} catch (error) {
		return rejectWithValue('Ошибка загрузки данных');
	}
});

// Создание слайса
const comicsSlice = createSlice({
	name: 'comics',
	initialState: {
		comics: [],
		status: 'idle', // idle | loading | succeeded | failed
		error: null,
		filters: {
			category: 'all',
		},
		isModalOpen: false,
	},
	reducers: {
		addComics(state, action) {
			state.comics.push(action.payload);
		},
		deleteComics(state, action) {
			state.comics = state.comics.filter((_, i) => i !== action.payload);
		},
		setCategoryFilter(state, action) {
			state.filters.category = action.payload;
		},
		toggleModal(state) {
			state.isModalOpen = !state.isModalOpen;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadComics.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(loadComics.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.comics = action.payload;
			})
			.addCase(loadComics.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			});
	},
});

// Экспорт действий и редьюсера
export const { addComics, deleteComics, setCategoryFilter, toggleModal } = comicsSlice.actions;
export default comicsSlice.reducer;
