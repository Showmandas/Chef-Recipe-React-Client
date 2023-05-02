/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const RecipeCard = ({recipe}) => {
    const{ingradients,rating,recipeName,cookingMethod}=recipe;
    return (
        <div className='col-lg-4'>

        <div className='card shadow'>
            <h5>Recipe Name:{recipeName}</h5>
            <ul>
                ingradients
                {
                    // ingradients?.map((ingradient,index)=>{
                    //     <li key={index}>{ingradient}</li>
                    //     // console.log(ingradient)
                    // })
                    ingradients?.forEach(ingradient=>{
                        <li>{ingradient}</li>
                    })
                }
            </ul>
            <p>Cooking Method:{cookingMethod}</p>
            <p>Rating:{rating}</p>
        </div>
        </div>
    );
};

export default RecipeCard;