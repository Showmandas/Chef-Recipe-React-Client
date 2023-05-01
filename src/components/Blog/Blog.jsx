/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-lg-12">
                    <div className="card bg-warning-subtle d-flex flex-column gap-3 p-5">
                        <h2>Q1. Tell us the differences between uncontrolled and controlled components.</h2>
                        <h5>--Controlled components which controlled by their parents and manage state by the props wchis passes by the parent component.On the other hand,Uncontrolled components manage their state own using ref  to access the dom and manage their state.</h5>
                        <h2>Q2. How to validate React props using PropTypes?</h2>
                        <h5>--App.propTypes is used for props validation.And here are some props validators:</h5>
                        <ul>
                            <li>PropTypes.any</li>
                            <li>PropTypes.array</li>
                            <li>PropTypes.bool</li>
                            <li>PropTypes.func</li>
                            <li>PropTypes.number</li>
                            <li>PropTypes.object</li>
                        </ul>
                        <h2>Q3. Tell us the difference between nodejs and express js</h2>
                        <h5>--Node js has fewer features than express js.Express build on node js.Express js written in javascript whether node js written in c,c++,js.Express provides routing on the other hand,node js is not provided routing.
                        </h5>
                        <h2>Q4. What is a custom hook, and why will you create a custom hook?</h2>
                        <h5>--Custom hook is a special function of javascript. It used to call other hooks.One of it's advantage is it's reusability.It always start with the name 'use'. When a custom hook created it makes code cleaner and reduces the time and it incresed render speed of the code.</h5>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;