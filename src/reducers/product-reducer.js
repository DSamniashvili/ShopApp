import { DELETE_PRODUCT, UPDATE_PRODUCT, CREATE_PRODUCT, SET_PRODUCTS } from '../constants/action-constants';

import PRODUCTS from '../data/dummy-data';
import Product from '../models/product-model';

const initialState = {
    availableProducts: PRODUCTS,
    myProducts: PRODUCTS.filter(product => product.ownerId === 'u1'),
}

const products = function (state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            // replace dummy data from an actual result from the server
            const { loadedProducts } = action.payload;
            return {
                ...state,
                availableProducts: loadedProducts,
                myProducts: loadedProducts,
            }
        case CREATE_PRODUCT:
            let { id, title, imageUrl, description, price } = action.payload;

            let newProduct = new Product(
                id,
                'u1',
                title,
                imageUrl,
                description,
                price);

            return {
                ...state,
                availableProducts: state.availableProducts.concat(newProduct),
                myProducts: state.myProducts.concat(newProduct),
            };

        case UPDATE_PRODUCT:

            const myProductIndex = state.myProducts.findIndex(product => {
                return product.id === action.payload.id;
            });
            const availableProductIndex = state.availableProducts.findIndex(product => product.id === action.payload.id);

            const myUpdatedProduct = new Product(
                action.payload.id,
                state.myProducts[myProductIndex].ownerId,
                action.payload.title,
                action.payload.imageUrl,
                action.payload.description,
                action.payload.price);

            const availableUpdatedProduct = new Product(
                action.payload.id,
                state.availableProducts[availableProductIndex].ownerId,
                action.payload.title,
                action.payload.imageUrl,
                action.payload.description,
                action.payload.price);


            const myUpdatedProducts = [...state.myProducts];
            myUpdatedProducts[myProductIndex] = myUpdatedProduct;

            const availableUpdatedProducts = [...state.availableProducts];
            availableUpdatedProducts[availableProductIndex] = availableUpdatedProduct;


            return {
                ...state,
                availableProducts: availableUpdatedProducts,
                myProducts: myUpdatedProducts,
            }


        case DELETE_PRODUCT:
            return {
                ...state,
                availableProducts: state.availableProducts.filter(product => product.id !== action.payload.itemId),
                myProducts: state.myProducts.filter(product => product.id !== action.payload.itemId),
            }
    }

    return state;

};

export default products;