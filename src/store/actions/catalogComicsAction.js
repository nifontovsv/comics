import { ADD_COMICS, DELETE_COMICS, LOAD_COMICS } from '../reducers/catalogComicsReducer';

export const deleteComicsAction = (index) => ({
	type: DELETE_COMICS,
	payload: index,
});

export const addComicsAction = (obj) => ({
	type: ADD_COMICS,
	payload: obj,
});

export const loadComics = () => {
	return (dispatch) => {
		fetch('https://api.tvmaze.com/search/shows?q=batman')
			.then((response) => response.json())
			.then((data) => {
				let arr = data.map((e) => ({
					name: e.show.name,
					link_url: e.show.url,
					img_src: e.show.image.original,
					rating: e.show.rating.average,
					premiered: e.show.premiered,
					desc: e.show.summary,
					id: e.show.id,
				}));
				dispatch({
					type: LOAD_COMICS,
					payload: arr,
				});
			});
	};
};
