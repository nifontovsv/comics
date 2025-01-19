import React, { useEffect, useState } from 'react';
import ComicsElem from './ComicsElem/ComicsElem';
import styles from './ComicsListRedux.module.css';
import MyModal from '../MyModal/MyModal';
import Button from '../common/Button/Button';
import FormComics from '../FormComics/FormComics';
import { useDispatch, useSelector } from 'react-redux';
import {
	addComics,
	deleteComics,
	loadComics,
	setCategoryFilter,
	toggleModal,
} from '../../store/reducers/comicsReducer';

function ComicsListRedux(props) {
	const dispatch = useDispatch();

	const { category } = useSelector((state) => state.comics.filters);
	const handleCategoryChange = (e) => {
		dispatch(setCategoryFilter(e.target.value));
	};
	const { comics, status, error, filters, isModalOpen } = useSelector((state) => state.comics);

	const filteredComics = comics.filter((comic) => {
		if (filters.category === 'all') return true;
		if (filters.category === 'rating' && comic.rating) return comic.rating > 0;
		return true;
	});

	const sortedComics = [...filteredComics].sort((a, b) => {
		if (filters.category === 'rating') return (b.rating || 0) - (a.rating || 0);
		if (filters.category === 'premiered') {
			return new Date(a.premiered) - new Date(b.premiered);
		}
		if (filters.category === 'increase') return a.price - b.price;
		if (filters.category === 'decrease') return b.price - a.price;
		return 0;
	});

	useEffect(() => {
		if (status === 'idle') {
			dispatch(loadComics());
		}
	}, [dispatch, status]);
	if (status === 'loading') return <p>Загрузка...</p>;
	if (status === 'failed') return <p>Ошибка: {error}</p>;

	return (
		<>
			<Button onClick={() => dispatch(toggleModal())} title='Add comics' style='btnAddComics' />
			<select value={category} onChange={handleCategoryChange}>
				<option value='all'>По умолчанию</option>
				<option value='premiered'>По дате</option>
				<option value='rating'>По рейтингу</option>
				<option value='increase'>По возрастанию цены</option>
				<option value='decrease'>По убыванию цены</option>
			</select>
			<div className={styles.CatalogList}>
				{sortedComics.map((e, i) => {
					return (
						<ComicsElem
							// price={price}
							item={{ ...e, category }} // Добавляем цену в объект item
							key={e.id}
							deleteComics={() => dispatch(deleteComics(i))}
						/>
					);
				})}
			</div>
			<MyModal title='Add comics' isModal={isModalOpen} closeModal={() => dispatch(toggleModal())}>
				<FormComics
					addComic={(obj) => dispatch(addComics(obj))}
					closeModal={() => dispatch(toggleModal())}
				/>
			</MyModal>
		</>
	);
}

export default ComicsListRedux;
