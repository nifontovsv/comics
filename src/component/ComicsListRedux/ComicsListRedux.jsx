import React, { useEffect, useState } from 'react';
import ComicsElem from './ComicsElem/ComicsElem';
import styles from './ComicsListRedux.module.css';
import MyModal from '../MyModal/MyModal';
import Button from '../common/Button/Button';
import FormComics from '../FormComics/FormComics';
import { useDispatch, useSelector } from 'react-redux';
import {
	addComicsAction,
	deleteComicsAction,
	loadComics,
} from '../../store/actions/catalogComicsAction';

function ComicsListRedux(props) {
	const [isModal, setIsModal] = useState(false);

	let comics = useSelector((state) => state.catalogComics);

	let dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadComics());
	}, []);

	// Функция для получения или генерации уникальной цены
	const getRandomPrice = (comicId, min, max) => {
		const savedPrices = JSON.parse(localStorage.getItem('comicPrices')) || {}; // Получаем все сохранённые цены
		if (savedPrices[comicId]) {
			return savedPrices[comicId]; // Возвращаем существующую цену для конкретного комикса
		}
		const newPrice = Math.round(Math.random() * (max - min) + min); // Генерируем новую случайную цену
		console.log(typeof newPrice);
		savedPrices[comicId] = newPrice; // Сохраняем цену по уникальному ID
		localStorage.setItem('comicPrices', JSON.stringify(savedPrices)); // Обновляем localStorage
		return newPrice;
	};

	return (
		<>
			<Button onClick={() => setIsModal(true)} title='Add comics' style='btnAddComics' />
			<div className={styles.CatalogList}>
				{comics.map((e, i) => {
					const price = getRandomPrice(e.id, 100, 1000);
					return (
						<ComicsElem
							price={price}
							item={{ ...e, price }} // Добавляем цену в объект item
							key={e.id}
							deleteComics={() => dispatch(deleteComicsAction(i))}
						/>
					);
				})}
			</div>
			<MyModal title='Add comics' isModal={isModal} closeModal={() => setIsModal(false)}>
				<FormComics
					addComic={(obj) => dispatch(addComicsAction(obj))}
					closeModal={() => setIsModal(false)}
				/>
			</MyModal>
		</>
	);
}

export default ComicsListRedux;
