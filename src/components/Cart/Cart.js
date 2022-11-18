import React, { useEffect } from "react";
import Card from "./cards";
import { useSelector } from "react-redux";

const Cart = () => {
  const { favItems } = useSelector((store) => store.fav);

  
  

  if (favItems.length < 1) {
    
    return (
      <>
        <div className="container vh-100" >
        <h3>you have no favourite pets yet!!!!!<br/>¯\_(ツ)_/¯  </h3>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {favItems.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
