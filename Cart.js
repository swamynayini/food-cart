import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/cartSliceItems";
import ItemList from "./ItemList";

const Cart= ()=>{
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()
    const handleEmptyCart = ()=>{
        dispatch(clearItem());
    }
    return(
        <div className="text-center font-bold text-2xl">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className=" w-6/12 m-auto ">
                <button className=" p-2 m-2 bg-black text-white rounded-lg" onClick={handleEmptyCart}>
                    EmptyCart

                </button>
                {cartItems?.length === 0 && (
          <h1> Cart is empty.Please Add Items In The Cart</h1>
        )}
        <ItemList items= {cartItems}/>
            </div>
        </div>
    )
}
export default Cart;