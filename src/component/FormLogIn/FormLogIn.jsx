import React, { useEffect } from 'react';
import useInput from '../../Hooks/useInput';
import useAuth from '../../Hooks/useAuth';
import { Link, useNavigate } from 'react-router';

function FormLogIn({ closeModal, setIsLoginTrue }) {
	let login = useInput('');
	let password = useInput('');

	let { res, error, auth } = useAuth();
	const navigate = useNavigate();

	const handlerLogin = (e) => {
		e.preventDefault();
		auth(login.value, password.value);
		navigate('/admin');
	};

	useEffect(() => {
		if (res) {
			closeModal();
			setIsLoginTrue();
		}
	}, [res]);

	return (
		<div>
			<div>
				<label>
					Login:
					<br />
					<input type='text' placeholder='Enter your login' {...login} />
				</label>
			</div>
			<div>
				<label>
					Password:
					<br />
					<input type='password' placeholder='Enter your password' {...password} />
				</label>
			</div>
			<br />
			<Link onClick={handlerLogin}>Log In</Link>
			{res && <p>{JSON.stringify(res)}</p>}
			{error && <p style={{ color: 'red' }}>{error}</p>}
		</div>
	);
}

export default FormLogIn;
