/* eslint-disable no-unused-vars */
import React from 'react';
import Lottie from "lottie-react";
import chef from "../../assets/chef.json"


const Banner = () => {
    return (
        <div className='container'>
            <div className="row g-5 bg-warning-subtle container m-auto">
                <div className="col-lg-6 col-12 d-flex flex-column justify-content-center gap-3">
                    <h1 className='text-warning fw-bold display-3'>Bongo Foods</h1>
                    <p className='text-secondary'>Bangla food is a rich culinary tradition from Bangladesh. It includes dishes like biryani, korma, and fish curry, often accompanied by rice and lentils. The cuisine features a blend of aromatic spices, herbs, and flavors, creating a diverse and delicious dining experience.</p>
                </div>
                <div className="col-lg-6 col-12">
                <Lottie animationData={chef} loop={true} />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;