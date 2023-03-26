import React from 'react';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import './App.css';

import CharactersGallery from './components/CharacterGallery';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<CharactersGallery />
			</div>
		</Provider>
	);
}

export default App;
