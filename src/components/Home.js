import React from "react";
import Pet1 from "./images/pet1.jpg";
import Pet2 from "./images/pet2.jpg";
import Pet3 from "./images/pet3.jpg";
import Pet4 from "./images/pet4.jpg";
import Pet5 from "./images/pet5.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container Home my-2">
        <div className="row m-4">
          <h2 className="SecColor">Petsy </h2>
          <h5 className="SecColor">A pet e-commerce platform</h5>
          <p className="SecColor">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            totam id excepturi, aspernatur doloribus nam placeat est, deserunt,
            dolores cumque beatae ratione facilis dicta consequuntur nemo esse
            minus! Nesciunt rem, repudiandae minima tempora commodi illum ea,
            corrupti, optio eveniet beatae quidem quasi iste magnam quibusdam.
          </p>
        </div>
        <div className="row m-4">
          <div
            id="carouselExampleControls"
            class="carousel slide CaroStyle "
            data-bs-ride="carousel"
          >
            <div class="carousel-inner ">
              <div class="carousel-item active">
                <img src={Pet1} class="d-block w-100 " alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Pet2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Pet3} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Pet4} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Pet5} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev "
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="row">
          <Link to="/Pets"><button className="btn ShopBtn">Shop for a pet</button></Link>
        </div>

      </div>
    </>
  );
};

export default Home;
