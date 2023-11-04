import React from "react";
import { useSelector ,useDispatch } from "react-redux";
import  {removeFromCart,checkOut} from "../redux/actions/cartAction"




const Cart = () => {

    const cartItem = useSelector(state => state.cart);
    const dispatch = useDispatch();
    console.log(cartItem);


    function handleRemoveCart(id){
        dispatch(removeFromCart(id));
    }
    
    return(
        <div className="cart">
              <h1>My Cart</h1>
              <div>
              <div className="cartGrid">
              {
                
                cartItem && cartItem.map(products=>
            
                    <div className="product">
                    <img src={products.thumbnail} alt="product" />  
                    <p> Title : {products.title}</p>
                    <p> Price : {products.price}$</p>
                    <button onClick={()=>handleRemoveCart(products.id)}> Remove from cart</button>
                    </div>
                    
                    )
            }
            
              </div>
              <div className="checkout">
                <h3>Checkout List</h3>
                <div  className='list'>
                {
                     cartItem && cartItem.map(products =>
                        
                        <div >
                            <p>{products.title}</p>
                            <p>{products.price}$</p>
                        </div>
                        
                        )
                }
                </div>

                
                <div>
                    <p>Total Amount</p>
                    <p>{cartItem.reduce((acc,curr)=>acc+curr.price,0)}$</p>
                </div>
                 <button onClick={()=>dispatch(checkOut())}>Checkout</button>
                
              </div>

              </div>
              
            
            
        </div>
        
    )


}

export default Cart;