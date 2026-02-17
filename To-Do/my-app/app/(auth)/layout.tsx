// 1. React ko import karna padta hai components banane ke liye
import React from "react"; 

// 2. "export default" ka matlab hai ki ye is file ka MAIN component hai.
// Next.js isi ko dhoondta hai. Agar ye nahi likhoge toh wahi "Default Export" wala error aayega.
export default function AuthLayout({
  children, // 3. Ye sabse important hai! 
            // Iska matlab hai: "Mere andar jo bhi page (Login/Signup) aayega, use dikhao."
}: {
  children: React.ReactNode; // Ye sirf TypeScript ko batane ke liye hai ki children ek React element hai.
}) {
  return (
    // 4. Ye aapka "Outer Container" hai. 
    // flex, items-center, justify-center se sab kuch screen ke BILKUL BEECH mein aa jata hai.
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      {/* 5. Ye wo white box hai jiske andar aapka form dikhega */}
      <div className="p-8 bg-white shadow-lg rounded-xl">
        
        {children} {/* <--- Yahan par aapka Login.tsx ka "Hello" chipak jayega! */}
        
      </div>
    </div>
  );
}