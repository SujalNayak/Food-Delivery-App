import { restoSchema } from "@/app/lib/restoModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server"
import { connectionstr } from "../../lib/db";

export async function GET(){
    console.log(connectionstr);
    await mongoose.connect(connectionstr, {useNewUrlParser: true});
    const data = await restoSchema.find();
    console.log(data);
    return NextResponse.json({result: data})
}