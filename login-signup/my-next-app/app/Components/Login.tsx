/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useRouter } from 'next/navigation'

export default function Login(){
    const router = useRouter();

    const handleclick = (e:any)=>{
        e.preventDefault();
        router.push("/submitted")
    }
    return(
        <>
            <form onClick={handleclick}>
                <div>
                    <label className="mr-[5px]">Email</label>
                    <input type="email" placeholder ="Enter your email" className="border-2"/>
                </div>
                <div className="mt-[10px]">
                    <label className="mr-[5px]">Password</label>
                    <input type="password" placeholder ="Enter your password" className="border-2" />
                </div>
                <button>Submit</button>
            </form>

        </>
    );
}