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
   })

   function handleAddToCart(product){
    dispatch(addToCart(product))
    alert("added to cart")
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

// brand: "Apple";
// category: "smartphones";
// description: "An apple mobile which is nothing like apple";
// discountPercentage: 12.96;
// id: 1;
// images: (5)[
//   ("https://i.dummyjson.com/data/products/1/1.jpg",
//   "https://i.dummyjson.com/data/products/1/2.jpg",
//   "https://i.dummyjson.com/data/products/1/3.jpg",
//   "https://i.dummyjson.com/data/products/1/4.jpg",
//   "https://i.dummyjson.com/data/products/1/thumbnail.jpg")
// ];
// price: 549;
// rating: 4.69;
// stock: 94;
// thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg";
// title: "iPhone 9";
