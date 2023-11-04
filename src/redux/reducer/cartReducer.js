
import { CART_ADD,CART_REMOVE,CHECK_OUT } from "../actions/actionType";

 let initialState = [];


 const cartReducer = (state = initialState, action) => {


   switch(action.type){

      case CART_ADD: const product = action.payload;
      if (!state.find((item) => item.id === product.id)) {
        state.push(product);
      }
      return state;
      case CART_REMOVE: return state.filter(item => item.id !== action.payload);

      case CHECK_OUT: return [];

      default: return state;
   }
 }

 export  default cartReducer;