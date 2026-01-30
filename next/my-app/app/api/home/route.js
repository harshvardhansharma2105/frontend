import { NextResponse } from "next/server";

export async function GET(){
    const data = [
        {
            title : "This is title 1",
            price : 20,
        },
        {
            title : "This is title 2",
            price : 30,
        },
        {
            title : "This is title 3",
            price : 40,
        },
        {
            title : "This is title 4",
            price : 50,
        },
        {
            title : "This is title 5",
            price : 60,
        },        
        {
            title : "This is title 6",
            price : 70,
        }
    ]
    return NextResponse.json(data);
}