"use client"

import {  useSelector } from "react-redux";

export default function Cart(){
    const count = useSelector((state)=>{state.count.value});

    return(
        <>
            <img src="hello"/>
            <div>items : {count}</div>
        </>
    );
}