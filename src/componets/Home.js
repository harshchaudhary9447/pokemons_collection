import React, {useState } from 'react'
import useFetchData from '../hooks/useFetchData'
import Card from './Card';
import { useSelector } from 'react-redux';
import '../Css/Home.css'
const Home = () => {

  const data = useSelector((store) => store?.cards);
  const [currApi,setCurrApi]=useState("https://pokeapi.co/api/v2/pokemon")

  useFetchData(currApi);
 
  const nextButton = ()=>{
    setCurrApi(data?.NextApi); 
  }

  const prevButton = ()=>{
    setCurrApi(data?.PrevApi)
  }

  return (
    <div>
      <div className='button-container'>
        <button className='button' onClick={prevButton}>Previous</button>
        <button className='button' onClick={nextButton}>Next</button>
      </div>
      <Card/>
     <h5 style={{
      textAlign:"center",
      fontSize:"22px",
      color:"brown"
     }}>Made by Harsh Chaudhary</h5>
    </div>
   
  )
}

export default Home