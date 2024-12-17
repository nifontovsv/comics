import React from 'react';
import styles from './MyModal.module.css';
import DeleteComicsBtn from '../common/Button/DeleteComicsBtn';

function MyModal(props) {
	return (
		<div
			className={`${styles.modal_wrapper} ${
				props.isModal ? styles.modal_wrapper_open : styles.modal_wrapper_close
			}`}>
			<div className={styles.modal_body}>
				{props.title && <h2>{props.title}</h2>}
				<DeleteComicsBtn onClick={props.closeModal} />
			</div>
		</div>
	);
}

export default MyModal;
