import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filterdResturants,setfilteredRestuarants] = useState([])

  const [searchText,setSearchText] = useState("")
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)
useEffect(()=>{
  fetchData();
},[]) 
 
const fetchData = async ()=>{
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
  const json  = await data.json() 
  //console.log(json)
  setListOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setfilteredRestuarants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  const onlineStatus = useOnlineStatus()
  if(onlineStatus === false)return <h1>Looks Like your are offline plaese check the your internet connection </h1>
  return listOfRestaurants.length===0? <Shimmer/>: (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4 ">
          <input type="text" data-testid="searchInput" className="border border-solid border-black" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value) 
          }} />
          <button className="px-4 py-2 bg-blue-400 m-4" onClick={()=>{
            const filteredRestaurent = listOfRestaurants.filter((res)=> res.info.name.toLowerCase()
            .includes(searchText.toLowerCase())
            )
            setfilteredRestuarants(filteredRestaurent)
          }}>
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button className="px-4 py-2 bg-red-300 m-4"
       onClick={()=>{
        const filteredList = listOfRestaurants.filter(
          (res)=>res.info.avgRating >3
        )
        setListOfRestraunt(filteredList)
       }}
       
       >Top Rate Cards</button>
  
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterdResturants .map((restaurant) => (
          <Link key={restaurant.info.id}to = {"/restaurants/" + restaurant.info.id}>
            {
              restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant}/>
              ) : (<RestaurantCard  resData={restaurant} />
            )}
            </Link>
        ))}
      </div>    
    </div>
  );
};

export default Body;