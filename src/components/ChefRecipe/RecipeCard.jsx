/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({recipe}) => {
    const{ingredients,rating,recipeName,cookingMethod}=recipe;
    const handleFav=()=>{
        toast("Added to Favourite!");

    }
    return (
        <div className='col-lg-4'>
        
        <div className='card shadow p-5' id='recipeCard'>
            <h5><span className='fw-bold fs-4'> Recipe Name : </span> {recipeName}</h5>
            <p className='fs-5'>
            <span className='fw-bold fs-4'>Ingradients : </span>
            {ingredients}
            </p>
            <p className='fs-5'><span className='fw-bold fs-4'>Cooking Method :</span> {cookingMethod}</p>
            <p><span className='fw-bold fs-4'>Rating : </span>{rating}/5</p>
            <button className='btn bg-warning-subtle' onClick={handleFav}>Add to favourite</button>
            <ToastContainer />

        </div>
        </div>
    );
};

export default RecipeCard;