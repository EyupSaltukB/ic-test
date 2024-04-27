import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from "./../Card"

const Scoops = () => {

  const [scoopData, setScoopData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3050/scoops")
    .then((res) => setScoopData(res.data))
  },[])
  
  console.log("state kontrol", scoopData)

  return (
    <div className='container'>
      <h1>Dondurma Çeşitleri</h1>
      <p>Tane: 20 ₺</p>
      <h2>Çeşitler Toplamı : {basket.length * 20}₺ </h2>
      <div className='row gap-5 justify-content-between'>
      {
        scoopData.map((scoop, i) => (<Card 
          key={i}
          scoop={scoop}
          setBasket={setBasket}
          basket={basket}
          />))
      }
    </div>
    </div>
  )
}

export default Scoops;