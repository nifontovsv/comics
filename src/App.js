import './App.css';
import ComicsListRedux from './component/ComicsListRedux/ComicsListRedux';
import { Route, Routes } from 'react-router';
import Navbar from './component/Navbar/Navbar';
import Cart from './component/Cart/Cart';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<ComicsListRedux />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='*' element={<p>Error</p>} />
			</Routes>
		</div>
	);
}

export default App;
