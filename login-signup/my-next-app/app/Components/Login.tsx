export default function login(){
    return(
        <>
            <div>
                <label className="mr-[5px]">Email</label>
                <input type="email" placeholder ="Enter your email" className="border-2"/>
            </div>
            <div className="mt-[10px]">
                <label className="mr-[5px]">Password</label>
                <input type="password" placeholder ="Enter your password" className="border-2" />
            </div>
        </>
    );
}