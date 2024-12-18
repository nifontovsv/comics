import React from 'react';
import styles from './Button.module.css';

function Button({ onClick, title, style }) {
	const buttonClass = style === 'btnAddComics' ? styles.btnAddComics : styles.deleteBtn;
	return (
		<button className={`${buttonClass}`} onClick={onClick}>
			{title}
		</button>
	);
}

export default Button;
