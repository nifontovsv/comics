import React from 'react';
import styles from './ComicsElem.module.css';
import Button from '../../common/Button/Button';
import AddToCartButton from '../../common/AddToCartButton/AddToCartButton';
import Counter from '../../common/Counter/Counter';
import { useSelector } from 'react-redux';

function ComicsElem(props) {
	let { name, link_url, img_src, rating, premiered, desc, price, id } = props.item;

	const items = useSelector((state) => state.cart.items);
	const isInCart = items[id]?.quantity > 0;

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
			{isInCart ? <Counter id={id} /> : <AddToCartButton product={props.item} />}
		</div>
	);
}

export default ComicsElem;
