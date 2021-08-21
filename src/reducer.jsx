import { combineReducers } from 'redux';
import productReducer from './components/Product/reducer';

// other reducers needs to import here
const rootReducers = combineReducers({
    productData : productReducer 
});

export default rootReducers;