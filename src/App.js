import './App.css';
import ComicsListRedux from './component/ComicsListRedux/ComicsListRedux';
import { Route, Routes } from 'react-router';
import Navbar from './component/Navbar/Navbar';
import FormLogIn from './component/FormLogIn/FormLogIn';
import Sidebar from './component/Cart/Sidebar/Sidebar';
import Container from './component/common/Container/Container';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Sidebar />
			<Container>
				<Routes>
					<Route path='/' element={<ComicsListRedux />} />
					<Route path='/login' element={<FormLogIn />} />
					<Route path='*' element={<p>Error</p>} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
