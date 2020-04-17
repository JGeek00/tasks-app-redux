import React from 'react';
import TextField from './components/textField';
import {Provider} from 'react-redux';
import store from './store';
import Tasks from './components/tasks';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<h1>Tasks app</h1>
				<TextField/>
				<Tasks/>
			</Provider>
		</div>
	);
}

export default App;
