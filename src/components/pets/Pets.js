import React from 'react'
import Cards from './cards'

import { useSelector } from 'react-redux'



const Pets = () => {
  const {pets} = useSelector((state)=>state.fav);
  
  return (
    <div>
      <div className="container">
      <div className='row'>
       
        {
          pets.map((item)=>{
            return <Cards key={item.id} {...item}/>
          })
        }
    </div>
      </div>
    </div>
  )
}




export default (Pets)