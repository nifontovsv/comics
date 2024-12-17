import React from 'react';
import styles from './ComicsElem.module.css';

function ComicsElem(props) {
	let { name, link_url, img_src, rating, premiered, desc, id } = props.item;
	return (
		<div className={styles.ComicsItem}>
			<img src={img_src} alt='' />
			<a className={styles.heading} href={link_url}>
				{name}
			</a>
			<p>Premier:{premiered || '--'}</p>
			<p>Rating:{rating || '--'}</p>
			<p className={styles.desc}>{desc.replace(/<\/?[a-z]+>/gi, '')}</p>
			{props.children}
		</div>
	);
}

export default ComicsElem;