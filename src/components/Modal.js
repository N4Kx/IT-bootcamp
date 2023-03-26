import React from "react";

import './Modal.css';

const Modal = ({ active, setActive, data, children }) => {
	const arr = ['name', 'status', 'species', 'oringin', 'location', 'gender'];

	return (
		<div className={active ? "modalWindow active" : "modalWindow"} onClick={() => setActive(false)}>
			<div className={active ? "modalWindow__content active" : "modalWindow__content"} onClick={(eo) => eo.stopPropagation()}>
				<img className="modalWindow_image" src={(data) && data.image} />
				<div className="modalWindow__charInfo">
					<div className="charInfo__subtitle charInfo__name">Name:</div>
					<div className="charInfo__text charInfo__nameData">{(data) && data.name}</div>

					<div className="charInfo__subtitle charInfo__origin">Origin:</div>
					<div className="charInfo__text charInfo__originData">{(data) && data.origin.name}</div>

					<div className="charInfo__subtitle charInfo__status">Status:</div>
					<div className="charInfo__text charInfo__statusData">{(data) && data.status}</div>

					<div className="charInfo__subtitle charInfo__location">Location:</div>
					<div className="charInfo__text charInfo__locationData">{(data) && data.location.name}</div>

					<div className="charInfo__subtitle charInfo__species">Species:</div>
					<div className="charInfo__text charInfo__speciesData">{(data) && data.species}</div>

					<div className="charInfo__subtitle charInfo__gender">Gender:</div>
					<div className="charInfo__text charInfo__genderData">{(data) && data.gender}</div>
				</div>
			</div>
		</div >
	)
}

export default Modal;