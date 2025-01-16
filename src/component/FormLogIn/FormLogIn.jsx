import React, { useEffect } from 'react';
import useInput from '../../Hooks/useInput';
// import useAuth from '../../Hooks/useAuth';
import { Link, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/reducers/authSlice';

function FormLogIn({ closeModal, setIsLoginTrue }) {
	let email = useInput('');
	let password = useInput('');
	const dispatch = useDispatch();
	const { isLoading, error } = useSelector((state) => state.auth);

	const user = useSelector((state) => state.auth.user);
	if (!user) return <p>Пожалуйста, войдите в систему.</p>;

	// let { res, error, auth } = useAuth();
	// const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login({ email, password }));
		// auth(login.value, password.value);
		// navigate('/login');
	};

	// useEffect(() => {
	// 	if (res) {
	// 		closeModal();
	// 		setIsLoginTrue();
	// 	}
	// }, [res]);

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<input type='email' placeholder='Email' value={email} {...email} />
				<input type='password' placeholder='Password' value={password} {...password} />
				<button type='submit' disabled={isLoading}>
					{isLoading ? 'Loading...' : 'Login'}
				</button>
			</form>
			{error && <p style={{ color: 'red' }}>{error}</p>}
		</div>
		// <div>
		// 	<div>
		// 		<label>
		// 			Login:
		// 			<br />
		// 			<input type='email' placeholder='Enter your email' value={email} {...email} />
		// 		</label>
		// 	</div>
		// 	<div>
		// 		<label>
		// 			Password:
		// 			<br />
		// 			<input type='password' placeholder='Enter your password' value={password} {...password} />
		// 		</label>
		// 	</div>
		// 	<br />
		// 	<Link onClick={handlerLogin}>Log In</Link>
		// 	{res && <p>{JSON.stringify(res)}</p>}
		// 	{error && <p style={{ color: 'red' }}>{error}</p>}
		// </div>
	);
}

export default FormLogIn;
