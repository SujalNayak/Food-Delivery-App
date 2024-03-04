"use client";
import React, { useState } from "react";
import ResHeader from "../_components/restaurentHeader";
import ResFooter from "../_components/restaurantFooter";
import ResLogin from "../_components/restaurantLogin";
import ResSignup from "../_components/restaurantSignup";
import './style.css';

const restaurant = () => { 
    const [login, setLogin] = useState(true);
    return (
        <div className="container">
            <ResHeader />
            {/* <h1>Restaurant</h1> */}
            {login ? <ResLogin /> : <ResSignup />}
            <button
                 onClick={() => setLogin(!login)}
                className="mt-20 ml-10 no-underline hover:underline relative inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
                {login ? "Not a User? SignUp here" : "Already User? Login here"}
            </button>
            <ResFooter/>
        </div>
    );
};

export default restaurant;
