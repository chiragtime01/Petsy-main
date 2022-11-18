import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/fav/fav";

const Cards = (pets) => {
  const dispatch = useDispatch();

  return (
    <div className=" col-lg-4 col-sm-6  gy-3 gx-3  ">
      <div className="card bg1 shadow p-3 mb-5 bg-body rounded">
        <img
          src={pets.image}
          className="card-img-top"
          alt={pets.PetName}
          height="250px"
        />

        <div className="card-body ">
          <h3 className="card-title ">{pets.PetName}</h3>
          <p className="card-text">{pets.Detail}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item primColor">{pets.Breed}</li>
            <li className="list-group-item">{pets.Gender}</li>
          </ul>
          <div className="btnBox my-3">
            <button
              className="favBtn mx-3 "
              onClick={(item) => {
                dispatch(addToCart(pets));
              }}
            >
              add to favs
            </button>
            <button className=" contactBtn mx-1 ">contact seller</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
