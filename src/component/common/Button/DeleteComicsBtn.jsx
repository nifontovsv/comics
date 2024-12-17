import React from 'react';
import styles from './Button.module.css';

function DeleteComicsBtn(props) {
	return (
		<button className={styles.deleteBtn} onClick={props.onClick}>
			delete
		</button>
	);
}

export default DeleteComicsBtn;
