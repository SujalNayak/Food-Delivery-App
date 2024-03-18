import { foodsSchema } from "../../../lib/foodsModel";
import { connectionstr } from "../../../lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        console.log("Connection to MongoDB...");
        await mongoose.connect(connectionstr,{
            newUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB Successfully!");

        const data = await foodsSchema.find();
        console.log("Retrieved data:", data);

        return NextResponse.json({result: data});

    } catch (error) {
        console.log("Error:", error);
        return NextResponse.json({error: error});
    }
}

export const POST = async(req) => {
    try{
        const payload = await req.json();
        await mongoose.connect(connectionstr,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const food = new foodsSchema(payload);
        const result = await food.save();
        return NextResponse.json({result, success: true});
    }
    catch(error){
        return NextResponse.json({error, success: false});
    }
}