/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner';
import Chefs from './ChefSection/Chefs';
import Carousel from './ChefCarousel/Carousel';
import FoodCategory from './FoodCategory/FoodCategory';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Chefs/>
            <Carousel/>
            <FoodCategory/>
        </div>
    );
};

export default Home;