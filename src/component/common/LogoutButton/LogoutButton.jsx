import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/reducers/authSlice';

function LogoutButton() {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	return <Button onClick={handleLogout}>Logout</Button>;
}

export default LogoutButton;
