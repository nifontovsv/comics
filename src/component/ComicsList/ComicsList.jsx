import React, { useEffect, useState } from 'react';
import ComicsElem from './ComicsElem/ComicsElem';
import styles from './ComicsList.module.css';

function ComicsList(props) {
	const [comics, setComics] = useState([]);

	useEffect(() => {
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
				setComics(arr);
			});
	}, []);

	const deleteComicsItem = (index) => {
		comics.splice(index, 1);
		setComics([...comics]);
	};

	return (
		<div className={styles.CatalogList}>
			{comics.map((e, i) => {
				return (
					<ComicsElem item={e} key={e.id}>
						<button className={styles.deleteBtn} onClick={() => deleteComicsItem(i)}>
							delete
						</button>
					</ComicsElem>
				);
			})}
		</div>
	);
}

export default ComicsList;
