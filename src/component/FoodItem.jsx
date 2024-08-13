import style from '../css/FoodItem.module.css';
export default function FoodItem({data,setFoodId})
{
    return<div className={style.container}>
       
       <img className={style.img} src={data.image} alt=""/>
       <div className={style.container_body}>
        <p className={style.title}>{data.title}</p>
        <button onClick={()=>{
            console.log(data.id);
            setFoodId(data.id);
            
        }} className={style.btn}>View Reciepe</button>
       </div>
       
       
    </div>
}