import './App.css';
// import { AuthContext } from './Contexts';
// import ComicsList from './component/ComicsList/ComicsList';
import LogInLogOut from './component/LogInLogOut/LogInLogOut';
import ComicsListRedux from './component/ComicsListRedux/ComicsListRedux';
import { Route, Routes } from 'react-router';
import Main from './component/Main/Main';
// import Counter from './component/Counter/Counter';

function App() {
	// const [user, setUser] = useState('');
	return (
		// <AuthContext.Provider value={{ setUser: (obj) => setUser(obj) }}>
		<div className='App'>
			<Main />
			{/* {user && <p>Hello,{user.login}</p>} */}
			{/* <LogInLogOut /> */}
			{/* <ComicsList /> */}
			{/* <ComicsListRedux /> */}
			{/* <Counter /> */}
			<Routes>
				<Route path='/' element={<p>ky-ky</p>} />
				<Route path='/login' element={<LogInLogOut />} />
				<Route path='/comics' element={<ComicsListRedux />} />
				<Route path='*' element={<p>Error</p>} />
			</Routes>
		</div>
		// </AuthContext.Provider>
	);
}

export default App;
