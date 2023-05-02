/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import RecipeCard from './RecipeCard';

const ChefDetails = ({detail}) => {
    const{name,picture,id,bio,likes,recipes,recipeItem,experience}=detail
    return (
        <div className='container my-5'>
            
            <div className="row">
                
                <div className="col-lg-12 col-12">
                    
                    <div className="row">
                        
                    <div className="col-lg-6 col-12">
                        <img src={picture} alt="chef picture" className='img-fluid w-100' />
                    </div>
                    <div className="col-lg-6 col-12 mt-5">
                        
<h1 className='text-secondary mt-5'>Chef's Details</h1>
                <hr className='w-25 text-warning border-5' />
                        <h4>Chef Name: {name}</h4>
                        <h5 className='fw-semibold'>Bio: <span className='text-secondary'>{bio}</span></h5>
                        <h5 className='fw-semibold'>Number of recipes: <span className='text-secondary'>{recipes}</span></h5>
                        <h5 className='fw-semibold'>Years of experience: <span className='text-secondary'>{experience}</span></h5>
                        <p className="fw-bold"><i className="fa-solid fa-thumbs-up"></i> : {likes}</p>
                    </div>
                    </div>
                    
                </div>
                
<h1 className='text-secondary mt-5'>Chef's Recipes</h1>
                <hr className='w-25 text-warning border-5' />
                <div className='row my-5'>
                    
                    {
                    // console.log(detail)
                    recipeItem?.map((recipe,index)=><RecipeCard recipe={recipe} key={index}/>)
                    
                    }
                </div>
            </div>
            
        </div>
    );
};

export default ChefDetails;