import { ADD_PLACE } from '../constants/action-constants';
import Place from '../models/place-model';

const initialState = {
    places: [],
}

const places = function (state = initialState, action) {
    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(new Date().toString(), action.placeData.title)
            const newPlaces = state.places.concat(newPlace);

            return {
                ...state,
                places: newPlaces,
            };
        default:
            return state;
    }
}


export default places;
