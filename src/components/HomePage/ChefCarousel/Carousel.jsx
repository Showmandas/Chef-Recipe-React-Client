/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import img_1 from '../../../assets/images/slideimg-1.avif'
import img_2 from '../../../assets/images/slideimg-2.avif'
import img_3 from '../../../assets/images/slideimg-3.avif'

const Carousel = () => {
    return (
        <div className='container'>
            <div className="row">
                <h1 className='text-secondary'>See Foods</h1>
                <hr className='w-25 text-warning border-5' />
                <div className="col-lg-12 mb-5 mt-5">
                <div id="carouselExampleIndicators" className="carousel slide  w-100">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img_1} className="d-block w-100 img-fluid" id='slideimg' alt="slideimage-1"/>
    </div>
    <div className="carousel-item">
      <img src={img_2} className="d-block w-100 img-fluid" id='slideimg' alt="slideimage-2"/>
    </div>
    <div className="carousel-item">
      <img src={img_3} className="d-block w-100 img-fluid" id='slideimg' alt="slideimage-3"/>
    </div>
  </div>
  <button className="carousel-control-prev bg-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next bg-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                </div>
            </div>
            
        </div>
    );
};

export default Carousel;