import React from 'react';
import { Link } from 'react-router';

function Main() {
	return (
		<ul>
			<li>
				<Link to='/'>Main</Link>
			</li>
			<li>
				<Link to='/login'>Log In</Link>
			</li>
			<li>
				<Link to='/comics'>Comics</Link>
			</li>
			<li>
				<Link to='*'></Link>
			</li>
		</ul>
	);
}

export default Main;
