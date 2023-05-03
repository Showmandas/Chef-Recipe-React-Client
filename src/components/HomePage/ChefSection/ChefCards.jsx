/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';

const ChefCards = ({chef}) => {
    const{id,name,picture,experience,likes,recipes}=chef;
  return (
    <div className="col-lg-4 col-12">
      <div class="card shadow m-2 mb-5">
        <LazyLoad>
        <img src={picture} class="img-fluid w-100" id="chefPicture" alt="chefs images" />
        </LazyLoad>
        <div class="card-body">
          <h5 class="card-title fs-4 text-secondary fw-bold">{name}</h5>
          <p class="card-text">Years of Experience: {experience}</p>
          <p class="card-text">Number of recipes: {recipes}</p>
          <p class="card-text"><i className="fa-solid fa-thumbs-up"></i> : {likes}</p>
          <Link to={`/chefrecipe/${id}`} class="btn bg-warning-subtle fw-bold d-flex justify-content-center align-items-center mb-3">
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCards;
