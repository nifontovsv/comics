import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './store/reducers/state';
import { thunk } from 'redux-thunk';
import { BrowserRouter } from 'react-router';

const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
