import {CDN_LINK} from "../utils/constants"
import { addItem } from "../utils/cartSliceItems"
import { useDispatch } from "react-redux"
const ItemList  = (items)=>{
    const dispatch = useDispatch()
    // console.log(items)
    const handleClickBtn = (item)=>{
        dispatch(addItem(item))
    }
    return(
        <div>
            {items.items.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                    <div className="w-9/12">
                    <div className="py-2">
                        <span className="font-bold">{item.card.info.name}</span>
                        <span className="font-bold">  ₹ {item.card.info.price ? item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12">
                        <button className="p-2 bg-red-300 rounded-lg absolute shadow-lg mx-1 " onClick={()=>handleClickBtn(item)}>Add +</button>
                        <img src={CDN_LINK + item.card.info.imageId} className="w-full"/>
                    </div>
                </div> 
                
            ))}

        </div>
    )
}
export default ItemList;