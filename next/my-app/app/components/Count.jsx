"use client"

import { useDispatch, useSelector } from "react-redux";
import {increment} from "../redux/slices/countSlice"

export default function Count(){
    const dispatch = useDispatch()
    const count = useSelector((state)=>{state.count.value});

    console.log("this is count :", count)

    return(
        <>
            <button onClick={() => dispatch(increment())}>Click me</button>

            <div>{count}</div>
        </>
    );
}