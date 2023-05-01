/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const FoodCategory = () => {
    return (
        <div className='container mb-5'>
            <h1 className='text-secondary'>Food Category</h1>
                <hr className='w-25 text-warning border-5' />
                
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="card bg-warning-subtle mt-4">
                      <div className="row p-5">
                        <div className="col-lg-3 d-flex gap-3 flex-column justify-content-center align-items-center">
                        <i className="fa-solid fa-bowl-rice fa-3x"></i>
                        <h4>Rice</h4>
                        <p className='text-secondary'>Bangladeshi cuisine offers a diverse range of rice-based dishes. From aromatic biryanis to comforting khichuri, rice plays a central role. Rice is often cooked with flavorful spices, accompanied by delicious sides like curries, lentils, and fish. It's a staple that embodies the essence of Bangladeshi culinary traditions.</p>
                        </div>
                        <div className="col-lg-3 d-flex gap-3  flex-column justify-content-center align-items-center">
                        <i className="fa-solid fa-drumstick-bite fa-3x"></i>
                        <h4>Meat</h4>
                        <p className='text-secondary'>Bangladeshi cuisine offers a variety of meat dishes that are loved by food enthusiasts. Some popular meat items include kacchi biryani, beef bhuna, mutton korma, chicken rezala, kebabs, and beef tehari. These dishes showcase the rich flavors of spices and tender meat, creating a delightful culinary experience.</p>
                        </div>
                        <div className="col-lg-3 d-flex  gap-3 flex-column justify-content-center align-items-center">
                        <i className="fa-solid fa-carrot fa-3x"></i>
                        <h4>Vegetable</h4>
                        <p className='text-secondary'>Vegetable items are essential components of Bangladeshi cuisine. Popular dishes include shorshe begun (mustard-infused eggplant), alu vorta (mashed potatoes), shobji diye dal (lentils with mixed vegetables), and pui shak bhaji (stir-fried Malabar spinach). These flavorful and nutritious vegetable dishes complement the diverse flavors of Bangladeshi food.</p>
                        </div>
                        <div className="col-lg-3 d-flex  gap-3 flex-column justify-content-center align-items-center">
                        <i className="fa-solid fa-fish fa-3x"></i>
                        <h4>Fish</h4>
                        <p className='text-secondary'>Fish is a staple ingredient in Bangladeshi cuisine. Popular fish items include Hilsa, Rui, Katla, and Pabda. They are cooked in various ways like fish curry, fish fry, and fish bhuna. Fish dishes are known for their unique flavors and are often enjoyed with rice or roti.</p>
                        </div>
                        </div>  
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FoodCategory;