import { CART_ADD, CART_REMOVE,CHECK_OUT } from './actionType' ;


export const addToCart = (product) => {

    return{
        type: CART_ADD,
        payload: product
    }
}
export const removeFromCart = (product_id) => {


    return{
        type: CART_REMOVE,
        payload: product_id
    }

}
export const checkOut = () => {

    return{

        type: CHECK_OUT
    }

}