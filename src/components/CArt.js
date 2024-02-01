import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";
import { useGetIconQuery } from "../../utils/rtkApi";

const Cart=()=>{

    const  cartItems=useSelector((store)=>store.cart.items)
    const{data,error,isLoading}=useGetIconQuery();
    // console.log(cartItems)
    const dispatch=useDispatch();
    const handleCLick=()=>{
        dispatch(clearCart());
        // console.log("Clear Cart")
        // console.log(cartItems.length)
    }
    
    return(
        <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto p-4">
            <button className="button m-2 p-2 bg-black text-white rounded-lg" onClick={handleCLick}>Clear Cart</button>
            {cartItems.length===0 &&<h1>Cart is Empty.Add items to the cart!</h1>}
            <ItemList items={cartItems}></ItemList>
        </div>
        </div>
    )
}

export default Cart;