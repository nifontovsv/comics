import { useState } from 'react';

function useAuth() {
	const [res, setRes] = useState(null);
	const [error, setError] = useState('');

	return {
		res,
		error,
		auth: (login, password) => {
			if (login === 'admin' && password === '123') {
				setRes({ login, date: new Date() });

				setError('');
			} else {
				setError('Incorrect data entered');
				setRes(null);
			}
		},
	};
}

export default useAuth;
