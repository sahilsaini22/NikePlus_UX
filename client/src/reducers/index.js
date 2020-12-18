import { combineReducers }  from 'redux';
import productReducer from './productReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
 product: productReducer,
 auth: authReducer,
 error: errorReducer
}); 