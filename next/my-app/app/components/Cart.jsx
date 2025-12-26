"use client"

import {  useSelector } from "react-redux";
import Link from "next/link";

export default function Cart(){
    const count = useSelector((state)=>state.count.value);

    return(
        <>
            <Link href='/go-to-cart'>
                <span><img src="https://d2ati23fc66y9j.cloudfront.net/ubuy/header-img/cart.svg"/>{count}</span>
            </Link>
        </>
    );
}