import ItemList from "./ItemList";

const RestuarentCategory=({data,showItems,setIndex})=> {
    const handleClick = ()=>{
        setIndex();
    }
    return (
        <div>
            <div className="w-6/12 bg-gray-50 mx-auto my-4 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">
                        {data?.title} ({data?.itemCards?.length})
                    </span>
                    <span>⌄</span>
                </div>
                {showItems && <ItemList items ={data.itemCards}/>}
            </div>
        </div>
    
    )
    
}   

export default RestuarentCategory;