import React, { useState } from "react";

import './Character.css';

const Character = ({ imgUrl, name, id, cbGoToModal }) => {
	const [characterID, setCharacterID] = useState(id);
	// const [selected, setSelected] = useState(false);

	const select = (eo) => {
		// setSelected(true);
		cbGoToModal(characterID);
	}


	return (
		<div className="Character__wrapper" onClick={select}>
			<img className="Character__picture" src={imgUrl} alt="Картинка персонажа" />
			<div className="Character__name">{name}</div>
		</div>
	)
}

export default Character;