"use client";
import React, { useState } from "react";
import ResHeader from "../../_components/restaurentHeader";
import ResFooter from "../../_components/restaurantFooter";
import "../style.css";
import AddFoodItem from "@/app/_components/AddFoodItem";

const Dashboard = () => {
    const [additem, setAddItem] = useState(false);
    return (
        <div>
            <ResHeader />
            <button className="ml-5 hover:border-0 hover:bg-green-500 hover:text-white" onClick={()=>setAddItem(true)}>Add Food Item</button>
            <button className="ml-5 hover:border-0 hover:bg-green-500 hover:text-white" onClick={()=>setAddItem(false)}>Dashboard</button>
            {additem ? (
                <AddFoodItem />
            ) : (
                <h1 className="font-bold">Welcome to Dashboard</h1>
            )}
            <ResFooter />
        </div>
    );
};

export default Dashboard;
