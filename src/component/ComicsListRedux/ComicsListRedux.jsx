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

	return (
		<>
			<Button onClick={() => setIsModal(true)} title='Add comics' style='btnAddComics' />
			<div className={styles.CatalogList}>
				{comics.map((e, i) => {
					return (
						<ComicsElem item={e} key={e.id} deleteComics={() => dispatch(deleteComicsAction(i))} />
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
