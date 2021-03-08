import {
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    CREATE_PRODUCT
} from '../constants/action-constants.js';

export const deleteProductAction = (itemId) => {
    return {
        type: DELETE_PRODUCT,
        payload: {
            itemId,
        },
    }
}

export const updateProductAction = (id, title, price, imageUrl, description) => {
    return {
        type: UPDATE_PRODUCT,
        payload: {
            id,
            title,
            price,
            imageUrl,
            description,
        },
    }
}

export const createProductAction = (title, price, imageUrl, description) => {
    return {
        type: CREATE_PRODUCT,
        payload: {
            title,
            price,
            imageUrl,
            description,
        },
    }
}




