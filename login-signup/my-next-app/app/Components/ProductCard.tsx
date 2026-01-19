'use client'
export default function ProductCard({minimal = false}){
    return(
        <>
            <div className="name">Name</div>
            <div className="email">Email</div>

            {!minimal && (
                <>
                    <div className="password">Password</div>
                    <div className="school">School</div>
                    <div className="roll-number">Roll number</div>
                </>
            )}
        </>
    );
}