/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const RecipeCard = ({recipe}) => {
    const{ingredients,rating,recipeName,cookingMethod}=recipe;
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
        </div>
        </div>
    );
};

export default RecipeCard;