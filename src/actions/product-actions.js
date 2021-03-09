import {
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    CREATE_PRODUCT,
    SET_PRODUCTS
} from '../constants/action-constants.js';
import Product from '../models/product-model.js';

export const deleteProductAction = (itemId) => {
    return {
        type: DELETE_PRODUCT,
        payload: {
            itemId,
        },
    }
}

export const updateProductAction = (id, title, imageUrl, description, price) => {
    return async dispatch => {
        await fetch(`https://auth-albums-dcc75-default-rtdb.firebaseio.com/products/${id}.json`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                title,
                imageUrl,
                description,
                price
            })
        });

        dispatch({
            type: UPDATE_PRODUCT,
            payload: {
                id,
                title,
                imageUrl,
                description,
                price,
            },
        })
    }
}

export const createProductAction = (title, imageUrl, description, price) => {
    return async dispatch => {

        // with adding 'products.json' firebase will automatically create a db named products
        const response = await fetch('https://auth-albums-dcc75-default-rtdb.firebaseio.com/products.json', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                title,
                imageUrl,
                description,
                price
            })
        });

        const responseData = await response.json();

        dispatch({
            type: CREATE_PRODUCT,
            payload: {
                id: responseData.name,
                title,
                price,
                imageUrl,
                description,
            },
        })
    }
}

export const fetchProducts = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://auth-albums-dcc75-default-rtdb.firebaseio.com/products.json');

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            const responseData = await response.json();
            const loadedProducts = [];

            for (key in responseData) {
                loadedProducts.push(new Product(
                    key,
                    'u1',
                    responseData[key].title,
                    responseData[key].imageUrl,
                    responseData[key].description,
                    responseData[key].price,
                ))
            }

            dispatch({
                type: SET_PRODUCTS,
                payload: {
                    loadedProducts,
                }
            })

        } catch (error) {
            throw error;
        }
    }
}




