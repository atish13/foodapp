import FoodItem from './FoodItem';
export default function FoodList({data,setFoodId})
{
    // console.log(data);
    
    return <div>
        {data.map((data)=>
       <FoodItem setFoodId={setFoodId} data={data}/>
        )}
    </div>
}