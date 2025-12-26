"use client";
import {createSlice} from '@reduxjs/toolkit'

const countSlice = createSlice({
    name : "count", // Ye slice ka internal name hota hai, Redux use karta hai action type banane ke liye.
    initialState:{value:0}, //Ye slice ka starting state define karta hai.

    reducers : { //Ye object hota hai jisme functions likhte hai jo state ko update karte hain.
        increment(state){ //Ye tumhara bana hua function hai. Tum ise koi bhi naam de sakte ho, aur ye state ko update karega.
            state.value += 1;
        }
    }
})


// Export the action(s)
export const { increment } = countSlice.actions;

// ✅ Export the reducer (singular)
export default countSlice.reducer;