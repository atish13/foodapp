
import { useState } from "react"
import Search from "./component/Search"
import FoodList from "./component/FoodList";
import Nav from "./component/Nav";
import './App.css';
import Container from "./component/Container";
import InnerContainer from "./component/InnerContainer";
import FoodDetails from "./component/FoodDetails";

function App() {
const[data,setdata]=useState([]);
const[foodId,setFoodId]=useState("715415");
  return (
    <>
       <Nav/>
    <Search data={data} setdata={setdata}/>
    <Container>
      <InnerContainer>
      <FoodList setFoodId={setFoodId} data={data}/>
      </InnerContainer>
      <InnerContainer>
        <FoodDetails foodId={foodId}/>
      </InnerContainer>
    </Container>

 
    </>
  )
}

export default App
