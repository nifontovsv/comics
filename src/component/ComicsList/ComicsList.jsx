import React, { useEffect, useState } from 'react';
import ComicsElem from './ComicsElem/ComicsElem';
import styles from './ComicsList.module.css';
import MyModal from '../MyModal/MyModal';
import Button from '../common/Button/Button';
import FormComics from '../FormComics/FormComics';

function ComicsList(props) {
	const [comics, setComics] = useState([]);
	const [isModal, setIsModal] = useState(false);

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
				console.log(arr);
			});
	}, []);

	const deleteComicsItem = (index) => {
		comics.splice(index, 1);
		setComics([...comics]);
	};

	const addComic = (obj) => {
		// 1 вариант:
		// comics.push(obj);
		// setComics([...comics]);
		// 2 вариант:
		// comics.splice(comics.length, 0, obj);
		// setComics([...comics]);
		// 3 вариант:
		setComics([...comics, obj]);
	};

	return (
		<>
			{/* <button onClick={() => setIsModal(true)} className={styles.btnAddComics}>
				Add comics
			</button> */}
			<Button onClick={() => setIsModal(true)} title='Add comics' style='btnAddComics' />
			<div className={styles.CatalogList}>
				{comics.map((e, i) => {
					return <ComicsElem item={e} key={e.id} deleteComics={() => deleteComicsItem(i)} />;
				})}
			</div>
			<MyModal title='Add comics' isModal={isModal} closeModal={() => setIsModal(false)}>
				<FormComics addComic={addComic} closeModal={() => setIsModal(false)} />
			</MyModal>
		</>
	);
}

export default ComicsList;
