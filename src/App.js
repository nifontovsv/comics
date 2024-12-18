import './App.css';
// import { AuthContext } from './Contexts';
// import ComicsList from './component/ComicsList/ComicsList';
import LogInLogOut from './component/LogInLogOut/LogInLogOut';
import ComicsListRedux from './component/ComicsListRedux/ComicsListRedux';
// import Counter from './component/Counter/Counter';

function App() {
	// const [user, setUser] = useState('');
	return (
		// <AuthContext.Provider value={{ setUser: (obj) => setUser(obj) }}>
		<div className='App'>
			{/* {user && <p>Hello,{user.login}</p>} */}
			<LogInLogOut />
			{/* <ComicsList /> */}
			<ComicsListRedux />
			{/* <Counter /> */}
		</div>
		// </AuthContext.Provider>
	);
}

export default App;
