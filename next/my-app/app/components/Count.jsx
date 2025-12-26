"use client"

import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/slices/countSlice"

export default function Count() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.count.value);
    console.log("this is count :", count);

    const data = [
        {
            img : "https://d2ati23fc66y9j.cloudfront.net/2025/homepage/review/profile-dumy.jpg.webp",
            paragraph : "This is red apple",
        },
                {
            img : "https://d2ati23fc66y9j.cloudfront.net/2025/homepage/review/profile-dumy.jpg.webp",
            paragraph : "This is green apple",
        },
                {
            img : "https://d2ati23fc66y9j.cloudfront.net/2025/homepage/review/profile-dumy.jpg.webp",
            paragraph : "This is yellow apple",
        },
                {
            img : "https://d2ati23fc66y9j.cloudfront.net/2025/homepage/review/profile-dumy.jpg.webp",
            paragraph : "This is white apple",
        },
                {
            img : "https://d2ati23fc66y9j.cloudfront.net/2025/homepage/review/profile-dumy.jpg.webp",
            paragraph : "This is indigo apple",
        },
    ]


    return (
        <>
        {data.map((item, index)=>{
            return(
                <div key = {index} className="card">
                    <div className="top-sec">
                        <div className="w-[50px]">
                            <img className="w-[]50px" src={item.img} />
                        </div>
                    </div>
                    <div className="bottom-sec">
                        <p>{item.paragraph}</p>
                        <button onClick={() => dispatch(increment())}>Add to Card : {count}</button>
                    </div>
                </div>
            );
        })}
        </>
    );
}