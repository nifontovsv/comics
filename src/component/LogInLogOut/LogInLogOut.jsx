import React, { useState } from 'react';
import MyModal from '../MyModal/MyModal';
import FormLogIn from '../FormLogIn/FormLogIn';
import { Link, useNavigate } from 'react-router';
import styles from './LogInLogOut.module.css';

function LogInLogOut() {
	const [isLogin, setIsLogin] = useState(false);
	const [isModal, setIsModal] = useState(false);

	const navigate = useNavigate();

	const logIn = () => {
		setIsModal(true);
		navigate('/admin');
	};
	const logOut = () => {
		setIsLogin(false);
	};
	return (
		<>
			{isLogin ? (
				<Link onClick={logOut} to='/' className={styles.personalAccountExit}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='#fff'
						width={20}
						height={20}
						viewBox='0 0 512 512'>
						<path d='M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z' />
					</svg>
				</Link>
			) : (
				<Link onClick={logIn} className={styles.personalAccount}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='#fff'
						width={20}
						height={20}
						viewBox='0 0 448 512'>
						<path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z' />
					</svg>
				</Link>
			)}
			<MyModal title='User authorization' isModal={isModal} closeModal={() => setIsModal(false)}>
				<FormLogIn setIsLoginTrue={() => setIsLogin(true)} closeModal={() => setIsModal(false)} />
			</MyModal>
		</>
	);
}

export default LogInLogOut;
