import React, { useEffect } from 'react';
import styles from './MyModal.module.css';
import Button from '../common/Button/Button';

function MyModal(props) {
	useEffect(() => {
		if (props.isModal) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	});
	return (
		<div
			className={`${styles.modal_wrapper} ${
				props.isModal ? styles.modal_wrapper_open : styles.modal_wrapper_close
			}`}>
			<div className={styles.modal_body}>
				{props.title && <h2>{props.title}</h2>}
				<Button title='close' onClick={props.closeModal} style='deleteBtn' />
				{props.children}
			</div>
		</div>
	);
}

export default MyModal;
