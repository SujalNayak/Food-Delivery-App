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
};

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
        let result = false;
        let success = false;
        await mongoose.connect(connectionstr, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        if (payload.login) {
            result = await restoSchema.findOne({
                email: payload.email,
                password: payload.password,
            });
            if (result) {
                success = true;
                // delete result.password;
            }
        } else {
            let restaurant = new restoSchema(payload);
            const result = await restaurant.save();
            if (result) {
                success = true;
            }   
        }
        return NextResponse.json({ result, success});
    } catch (error) {
        // Handle errors
        console.error(error);
        mongoose.connection.close(); // Close the connection in case of error

        // Return an error response
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
