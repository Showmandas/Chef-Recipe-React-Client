/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ChefCards from './ChefCards';

const Chefs = () => {
    const[chefData,setChefData]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/chefData`)
        .then(res=>res.json())
        .then(data=>setChefData(data))
    },[])
    return (
        <div className='container m-auto my-5 py-5'>
            <h1 className='text-secondary'>Our Chefs</h1>
                <hr className='w-25 text-warning border-5' />
            <div className="row">
                {
                    chefData.map(chef=><ChefCards chef={chef} key={chef.id}/>)
                }
            </div>
            
        </div>
    );
};

export default Chefs;