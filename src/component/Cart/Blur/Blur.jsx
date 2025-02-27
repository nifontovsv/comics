import React from 'react';
import styles from './Blur.module.css';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../../../store/reducers/cartReducer';

function Blur() {
	const dispatch = useDispatch();

	const handleCloseSideBar = () => {
		dispatch(closeSidebar());
	};

	return <div onClick={handleCloseSideBar} className={styles.blurMenu}></div>;
}

export default Blur;
