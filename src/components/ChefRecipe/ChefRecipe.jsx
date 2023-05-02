/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefDetails from './ChefDetails';

const ChefRecipe = () => {
    const[chefDetails,setChefDetails]=useState([]);
    const {id}=useParams();
    // const chefdata=useLoaderData()
    // console.log(chefdata);
    useEffect(()=>{
        fetch(`http://localhost:5000/chefData/${id}`)
        .then(res=>res.json())
        .then(data=>setChefDetails(data))
    },[])
    return (
        <div>
            <ChefDetails detail={chefDetails} key={chefDetails.id}/>
        </div>
    );
};

export default ChefRecipe;