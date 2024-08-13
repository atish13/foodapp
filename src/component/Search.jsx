import { useEffect, useState } from "react"
import style from '../css/Search.module.css';
const URL="https://api.spoonacular.com/recipes/complexSearch";
const Api_Key="8afb793fd1fc4e46a5f39747ca5d7fe3";
export default function Search({data,setdata})
{
    const[value,setValue]=useState("");
    function ChangeHandler(e)
    {
     setValue(e.target.value);
    }
    useEffect(()=>{
        async function fetchFood()
       {
            
        const data=await fetch(`${URL}?query=${value}&apiKey=${Api_Key}`)
        const res=await data.json();
        // console.log(res.results);
        setdata(res.results);   
       }
       fetchFood();
    },[value])
    return<div 
    className={style.search}>
        <input
        className={style.input}
         type="text" 
         onChange={(e)=>ChangeHandler(e)} value={value}/>
    </div>
}