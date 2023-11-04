
import { NavLink } from "react-router-dom";
const Navbar = () =>{

   return(
       <div className="navbar">
        <h1>Shopping Cart</h1>
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart">Cart</NavLink>
        {/* </div>
            <a href="/">Home Page</a>
            <a href="/cart">Cart Page</a> */}
        </div>

       </div>
   )


}


export default Navbar;