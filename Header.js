import { CDN_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {

  const [btnButotn,setBtnButton] = useState("login")
  const onlineStatus = useOnlineStatus()
  const cartItems = useSelector((store)=>store.cart.cartItems)
  return (
    <div className="flex justify-between bg-pink-300 shadow-2xl">
      <div className="logo-container">
        <img className=" w-50" src={CDN_LOGO} />
      </div>  
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="p-4 text-xl">
            onlineStatus:{onlineStatus?"✅":"🛑"}
          </li>
          <li className="p-4 text-xl">
            <Link to = "/">Home</Link>
            </li>
          <li className="p-4 text-xl">
            <Link to = "/about">About Us</Link>
            </li>
            <li className="p-4 text-xl">
            <Link to = "/grocery">Grocery</Link>
            </li>
          <li className="p-4 text-xl">
            <Link to = "/contact">Contact Us</Link>

          </li>
          <li className="p-4 text-xl ">
          <Link to = "/cart">Cart-{cartItems}itmes</Link>
          </li>
          <button className=" login-btn text-xl border border-black"
          onClick={()=> {
            btnButotn === "login"
            ?setBtnButton("logout")
            :setBtnButton("login")

          }}
          >
             {btnButotn}
             </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;


