import React from 'react';
import styles from './ComicsElem.module.css';
import Button from '../../common/Button/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/actions/cartAction';

function ComicsElem(props) {
	let { name, link_url, img_src, rating, premiered, desc, price } = props.item;

	const dispatch = useDispatch();

	const handleAddComicsInCart = (obj) => {
		const cart = {
			...obj,
			quantity: 1,
		};
		dispatch(addToCart(cart));
	};

	return (
		<div className={styles.ComicsItem}>
			<img src={img_src} alt='' />
			<a className={styles.heading} href={link_url}>
				{name}
			</a>
			<p>Price: {price}$</p>
			<p>Premier:{premiered || '--'}</p>
			<p>Rating:{rating || '--'}</p>
			<p className={styles.desc}>{desc.replace(/<\/?[a-z]+>/gi, '')}</p>
			{<Button title='delete' onClick={props.deleteComics} style='deleteBtn' />}
			<button onClick={() => handleAddComicsInCart(props.item)}>add cart</button>
		</div>
	);
}

export default ComicsElem;
