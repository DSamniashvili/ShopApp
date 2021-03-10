import { ADD_PLACE } from '../constants/action-constants';

export const addPlaceAction = (title, image) => {
    return {
        type: ADD_PLACE,
        placeData: {
            title,
            image
        }
    }
}