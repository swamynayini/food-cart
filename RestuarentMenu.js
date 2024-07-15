import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestuarentCategory from "./RestuarentCategory";
import { useState } from "react";
const RestuarentMenu = ()=> {
    const {resId} = useParams()
    const resInfo = useRestuarantMenu(resId) 
    const [showIndex,setShowIndex] = useState(1)
   

    if (resInfo === null)return <Shimmer/>
    console.log(resInfo)

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    //console.log(itemCards)    
    const categories =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories)
    return (
        <div data-testid = "foodItems" className="flex-wrap p-4 m-4 text-center">
            <h1 className="text-2xl font-bold my-6">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category,index)=>
            <RestuarentCategory key = {category?.card?.card.title} data={category?.card?.card}
            showItems = {index === showIndex ? true : false}
            setIndex  = {
                ()=>{
                    if(showIndex === index)
                        setShowIndex(-1);
                    else
                    setShowIndex(index)
                }
            }
            />
            )}
        </div>
    )
}
export default RestuarentMenu;