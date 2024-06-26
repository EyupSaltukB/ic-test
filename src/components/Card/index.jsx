import React from 'react'

const Card = ({scoop, basket, setBasket}) => {
  
  const {imagePath, name} = scoop;
  const found = basket.filter((item) => item.name === name)
  const amount = found.length

  const handleReset = () => {
    const clearBasket = basket.filter((item) => item.name !==name)
    setBasket(clearBasket)
  }
  return (
    <div className='d-flex flex-column align-items-center' style={{width: "150px"}} >
      <img src={imagePath} className='img-fluid' />
      <label htmlFor="" className='lead'>{name}</label>

      <div className='d-flex gap-2 align-items-center'>
        <button className='btn btn-danger' onClick={() => handleReset()}>Sıfırla</button>
        <span className='fs-2'>{amount}</span>
        <button onClick={() => setBasket([...basket, scoop])} className='btn btn-success'>Ekle</button>
      </div>
    </div>
  )
}

export default Card;