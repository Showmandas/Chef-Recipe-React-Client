/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner';
import Chefs from './ChefSection/Chefs';
import Carousel from './ChefCarousel/Carousel';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Chefs/>
            <Carousel/>
        </div>
    );
};

export default Home;