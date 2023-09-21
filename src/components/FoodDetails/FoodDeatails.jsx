import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food'
import CatagoryFood from "../CatagoryFood/CatagoryFood"

const FoodDeatails = () => {
    const  {meals} = useLoaderData()
    return (
        <div className="grid mt-8 grid-cols-3">
            {
                meals.map((item,index) => <CatagoryFood key={index} item={item}></CatagoryFood>)
            }
        </div>
    );
};

export default FoodDeatails;