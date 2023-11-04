import {createStore,combineReducers} from 'redux';

import fetchReducer from './reducer/fetchReducer';
import cartReducer from './reducer/cartReducer';

const rootReducer = combineReducers({

    products:fetchReducer,
    cart:cartReducer
})

 const store = createStore(rootReducer);
 
export default store;