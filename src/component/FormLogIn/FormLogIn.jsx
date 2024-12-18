import React, { useContext, useEffect } from 'react';
import useInput from '../../Hooks/useInput';
import useAuth from '../../Hooks/useAuth';
// import { AuthContext } from '../../Contexts';

function FormLogIn({ closeModal, setIsLoginTrue }) {
	let login = useInput('');
	let password = useInput('');

	let { res, error, auth } = useAuth();
	// let { setUser } = useContext(AuthContext);

	const handlerLogin = (e) => {
		e.preventDefault();
		auth(login.value, password.value);
	};

	useEffect(() => {
		// setUser(res);
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
			<button onClick={handlerLogin}>Log In</button>
			{res && <p>{JSON.stringify(res)}</p>}
			{error && <p style={{ color: 'red' }}>{error}</p>}
		</div>
	);
}

export default FormLogIn;
