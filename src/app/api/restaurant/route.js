import { NextResponse } from "next/server"

export async function GET(){
    await mongoose.connect(connectionstr, {useNewUrlParser: true, useUnifiedTopology: true});
    return NextResponse.json({result: true})
}