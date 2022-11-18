import React, { useState } from "react";
import NavIcon from "./images/dog.png";
import "./styles/ComponentStyles.css";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const [HamShow, setHamShow] = useState(false);

  const {totalFavItems} = useSelector((store)=>store.fav);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  shadow-lg p-3 mb-5 bg-body rounded">
        <div className="container">
          <a className="navbar-brand">
            <img src={NavIcon} alt="pet paw logo" height="50px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              setHamShow(!HamShow);
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${HamShow ? "show" : ""}   `}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Pets">
                  <a className="nav-link active " aria-current="page">
                    Pets
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active " aria-current="page">
                  Contact us
                </a>
              </li>
            </ul>
            <form className="d-flex ">
              {/* <input
                className="form-control me-2 SearchBar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}

              {/* <button  className="btn LoginBtn" >Login</button>
              <button className="btn SignInBtn" >SignIn </button> */}
            </form>
            <Link to="/Cart">
              <button className=" CartBtn position-relative">
              
                <i>
                  <MdFavorite />
                </i>
                <span class="badge bdSize   ">{totalFavItems}</span>
                
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
