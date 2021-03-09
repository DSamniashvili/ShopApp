import { combineReducers } from 'redux'
import albums from './album-reducer';
import user from './user-reducer';
import products from './product-reducer';
import cart from './cart-reducer';
import orders from './orders-reducer';
import places from './place-reducer';

export default combineReducers({
    albums,
    user,
    products,
    cart,
    orders,
    places,
});