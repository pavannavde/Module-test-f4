import axios from "axios";
import React ,{ useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { postFetching,postFetchSuccess,postFetchError } from "../redux/actions/fetchProducts";
import { addToCart } from "../redux/actions/cartAction";

const Home = () => {

    // const [products,setProducts]=useState([]);

    const {loading,data,error}=useSelector(state=>state.products);
    console.log(data)
    console.log(loading)
    console.log(error)

    const dispatch = useDispatch();

    
  async function getData() {
    try{
         dispatch(postFetching())
        const response = await axios.get("https://dummyjson.com/products");
        const data = await response.data.products;
        // setProducts(data);
        dispatch(postFetchSuccess(data))
     }
    catch(Error){
        dispatch(postFetchError(Error))
        
    }
   
  }
   useEffect(() => { 

           getData();
           // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])

   function handleAddToCart(product){
    dispatch(addToCart(product))
    alert("Added to cart")
   }
 

  return (
    <div className="home">
       {
        data && data.map(product=>
            
            <div key={product.id} className="product">
            <img src={product.thumbnail} alt="product" />  
            <p> Title : {product.title}</p>
            <p> Price : {product.price}$</p>
            <button onClick={()=>{handleAddToCart(product)}}>Add to cart</button>
            </div>
            
            ) 
        
        }
    </div>
   
  
  )
}

export default Home;
