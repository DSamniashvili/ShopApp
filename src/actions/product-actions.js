import {
    DELETE_PRODUCT,
} from '../constants/action-constants.js';

export const deleteProductAction = (itemId) => {
    return {
        type: DELETE_PRODUCT,
        payload: {
            itemId,
        },
    }
}




