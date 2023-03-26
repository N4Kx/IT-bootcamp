import React, { useEffect, useState, useRef, useLayoutEffect, Fragment, useCallback } from 'react';
import Character from './Character';

import { rickormortyLoad } from '../redux/rickormortyLoad'

import './CharactersGallery.css';
import { useDispatch, useSelector } from 'react-redux';

import Modal from './Modal';

import { getCharacter } from 'rickmortyapi'


const CharactersGallery = props => {
	const [modalActive, setModalActive] = useState(false);
	const [data, setData] = useState(null);



	const galleryRef = useRef(null);

	const dispatch = useDispatch();

	function loadData() {
		dispatch(rickormortyLoad);
	}

	useEffect(() => {
		loadData();
	}, []
	)

	const state = useSelector(state => state.rickormorty);

	const goToModal = async (id) => {
		const response = await getCharacter(id);
		setData(response.data);
		setModalActive(true);
	}

	const memoizedGoToModal = useCallback(goToModal, []);


	const getCharactersList = () => {
		if (state.dataLoadState === 2) {
			return state.data.results;
		}
	}

	let charactersCode = null;

	if (state.dataLoadState === 1) {
		charactersCode = <div className='loadingData'>{'Please wait a little, we are loading data...'}</div>
	}

	if (state.dataLoadState === 2) {
		charactersCode = getCharactersList().map(v => <Character key={v.id} name={v.name} imgUrl={v.image} id={v.id} cbGoToModal={memoizedGoToModal} />)
		// console.log(state);

		// let scrollTop = galleryRef.current.scrollTop;
		// let height = galleryRef.current.clientHeight;
		// let scrollHeight = galleryRef.current.scrollHeight;

		// console.log(1);
		// console.log(`scrollTop=${scrollTop}`);
		// console.log(`height=${height}`);
		// console.log(`scrollHeight=${scrollHeight}`);
	}


	return (
		<>
			<div ref={galleryRef} className='CharactersGallery'>
				{charactersCode}
			</div>
			<Modal active={modalActive} setActive={setModalActive} data={data}></Modal>
		</>
	)
}

export default CharactersGallery;