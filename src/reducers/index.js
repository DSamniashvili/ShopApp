import { combineReducers } from 'redux'
import albums from './album-reducer';
import user from './user-reducer';

export default combineReducers({
    albums,
    user,
});