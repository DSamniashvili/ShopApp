import { combineReducers } from 'redux'
import albums from './album-reducer';
import user from './user-reducer';
import products from './product-reducer';

export default combineReducers({
    albums,
    user,
    products,
});