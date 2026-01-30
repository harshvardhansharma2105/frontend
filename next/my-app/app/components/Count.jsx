"use client"

import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/slices/countSlice";
import { useEffect, useState } from "react";

export default function Count() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.count.value);
    console.log("this is count :", count);

    const [data, setData] = useState([])

    
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch('../api/home');
                const result = await response.json();

                setData(result);
                console.log("sucess");

            }catch (err){
                console.log("failed", err);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {data.map((item, index)=>{
                return(
                    <div key = {index} className="card">
                        <div className="top-sec">
                            {item.title}
                        </div>
                        <div className="bottom-sec">
                            <p>{item.price}</p>
                            <button onClick={() => dispatch(increment())}>Add to Card : {count}</button>
                        </div>
                    </div>
                );
            })}
        </>
    );
}