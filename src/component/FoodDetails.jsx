import { useEffect, useState } from "react";
import style from '../css/FoodDetails.module.css';

export default function FoodDetails({foodId})
{
    const[food,setFood]=useState({});
    const[loading,setLoading]=useState(true);
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`;
    const Api_Key="8afb793fd1fc4e46a5f39747ca5d7fe3";
    useEffect(()=>{
      async function fetchDetails(){
        const data= await fetch(`${URL}?apiKey=${Api_Key}`)
        const res= await data.json();
        console.log(res);
        setFood(res);
        setLoading(false);
            
        }
        fetchDetails();
    },[foodId])
    console.log(food);
    
    return<div>
        <div className={style.container}>
            <h1 className={style.heading}>{food.title}</h1>
            <img src={food.image} alt="" />
            <div className={style.description}>
                <div>
                <span>
                    ⏰<strong>{food.readyInMinutes} Minutes</strong>
                </span>
                <span>
                   <strong>
                   {food.vegetarian?"🥕 Vegetarian":"🍗 Non-Vegetarian "}
                   {food.vegan?"🐮 Vegan":" "}
                    </strong> 
                </span>
                <span>
                    <strong>👨‍👩‍👧‍👦 {food.servings} </strong> 
                </span>
                </div>

                <div>
                <span> 
                    <strong>💲{food.pricePerServing} Per Serving </strong></span>

                </div>
            </div>
            <div>
               
                <h2>Ingredients:</h2>
                <div className={style.ingredients}>
                {loading?"loading":(
                    food.extendedIngredients.map((item)=>
                    <div className={style.ingredientsDetails}>
                      <img src={`https://spoonacular.com/cdn/ingredients_100x100/`+item.image} alt=""/>
                      <h2>{item.name}</h2>
                      <h2>{item.amount}</h2>
                        </div>
                    )
                )}
              </div>
               
                <h2>Instructions:</h2>
    
                <ol className={style.list}>
                {loading ?" Loading...":(
                    food.analyzedInstructions[0].steps.map((step)=>
                    <li>{step.step}</li>)

                )}
                </ol>
                

            </div>
        </div>
    </div>
}