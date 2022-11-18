import React from 'react'

import { removeFromCart } from '../../features/fav/fav'
import { useDispatch } from 'react-redux'
import {BiTrash} from 'react-icons/bi'

const Cards = (props) => {

  const dispatch = useDispatch();


  return (
    <div className=" col-lg-4 col-sm-6  gy-3 gx-3  ">
    <div className="card bg1 shadow p-3 mb-5 bg-body rounded">
      <img src={props.image} className="card-img-top" alt={props.PetName} height = '250px' />
      <div className="card-body">
        <h3 className="card-title ">

        {props.PetName}
        </h3>
        <h5 className='primColor'>
          {props.Breed}
        </h5>
        
        
        <button  className="TrashBtn" onClick={()=>{
          dispatch(removeFromCart(props.id))
        }}
         ><i><BiTrash/></i></button>
        
        
      </div>
    </div>
  </div>
  )
}

export default Cards