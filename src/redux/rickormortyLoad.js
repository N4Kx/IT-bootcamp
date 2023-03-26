import { updateLoadState, updateData } from './rickormortySlice';
import * as RickMortyAPI from 'rickmortyapi';

export async function rickormortyLoad(dispatch) {
	try {
		dispatch(updateLoadState({ state: 1, error: null }));
		const response = await RickMortyAPI.getCharacters();
		if (response.status === 200) {
			const data = response.data;
			// console.log(data);
			dispatch(updateLoadState({ state: 2, error: null }));
			dispatch(updateData(data));
		} else {
			dispatch(updateLoadState({ state: 3, error: 'HTTP error' + response.statusMessage }))
		}
	}
	catch (err) {
		dispatch(updateLoadState({ state: 3, error: err.message }))
	}
};