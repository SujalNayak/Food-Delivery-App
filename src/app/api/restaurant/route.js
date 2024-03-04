import { restoSchema } from "../../lib/restoModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionstr } from "../../lib/db";

const connect = async () => {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(connectionstr, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export async function GET() {
    try {
        console.log("Connecting to MongoDB...");
        // connect();
        await mongoose.connect(connectionstr, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully!");

        const data = await restoSchema.find();
        console.log("Retrieved data:", data);

        // Close the connection after fetching data
        mongoose.connection.close();

        return NextResponse.json({ result: data });
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
        mongoose.connection.close(); // Close the connection in case of error

        // Return an error response
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        let payload = await request.json();
        // connect();
        await mongoose.connect(connectionstr, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        let restaurant = new restoSchema(payload);
        const result = await restaurant.save();
        return NextResponse.json({ result, success : true });
    } catch (error) {
        // Handle errors
        console.error("Error inserting data:", error);
        mongoose.connection.close(); // Close the connection in case of error

        // Return an error response
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
};
