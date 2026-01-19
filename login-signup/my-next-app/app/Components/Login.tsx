// /* eslint-disable @typescript-eslint/no-explicit-any */
// 'use client'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react';

// export default function Login(){
//     const router = useRouter();
//     const [email, setemail] = useState("")
//     const [error, seterror] = useState("")

//     const handleclick = (e:any)=>{
//         e.preventDefault();
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if(!emailPattern.test(email)){
//             seterror("This email is invalid");
//         }else{
//             router.push("/submitted")
//         }
//     }
//     return(
//         <>
//             <form>
//                 <div>
//                     <label className="mr-[5px]">Email</label>
//                     <input onChange={(e)=>setemail(e.target.value)} value={email} type="email" placeholder ="Enter your email" className="border-2"/>
//                     {error && <p className='text-[red]'>{error}</p>}
//                 </div>
//                 <div className="mt-[10px]">
//                     <label className="mr-[5px]">Password</label>
//                     <input type="password" placeholder ="Enter your password" className="border-2" />
//                 </div>
//                 <button onClick={handleclick}>Submit</button>
//             </form>
//         </>
//     );
// }

'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export default function Login(){
    const router = useRouter();
    const [email, setemail] = useState("")
    const [error, seterror] = useState("")
    const [loading, setLoading] = useState(false)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleclick = async (e:any)=>{ 
        e.preventDefault();
        
        console.log("Checking Email:", email);
        const cleanEmail = email.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(!emailPattern.test(cleanEmail)){
            console.log("Regex Fail ho gaya!");
            seterror("This email is invalid");
            return; 
        }

        setLoading(true); 
        seterror(""); 

        try {
            console.log("Sending to API...");
            const response = await fetch('/api/save-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: cleanEmail }) 
            });

            console.log("API Response Status:", response.status);

            if(response.ok){
                router.push("/submitted")
            } else {
                const errorData = await response.json();
                console.log("Server Error Details:", errorData);
                seterror("Server error: Email save nahi hua bro!");
            }
        } catch (err) {
            console.log("Network Error:", err);
            seterror("Network error: Internet check kar bhai.");
        } finally {
            setLoading(false); 
        }
    }

    return(
        <>
            <form className="p-5">
                <div>
                    <label className="mr-[5px]">Email</label>
                    <input 
                        onChange={(e)=>setemail(e.target.value)} 
                        value={email} 
                        type="email" 
                        placeholder ="Enter your email" 
                        className="border-2 p-1"
                    />
                    {error && <p className='text-[red] font-bold mt-2'>{error}</p>}
                </div>
                <div className="mt-[10px]">
                    <label className="mr-[5px]">Password</label>
                    <input type="password" placeholder ="Enter your password" className="border-2 p-1" />
                </div>
                
                <button 
                    onClick={handleclick} 
                    disabled={loading} 
                    className={`mt-4 p-2 text-white rounded ${loading ? 'bg-gray-400' : 'bg-blue-500'}`}
                >
                    {loading ? "Saving..." : "Submit"}
                </button>
            </form>
        </>
    );
}