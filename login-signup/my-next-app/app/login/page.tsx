import Login from '../Components/Login';
import ProductCard from '../Components/ProductCard';
export default function login(){
    return(
        <>
            <h1>Login Form</h1>
            <Login/>

            <ProductCard minimal={true} />
        </>
    );
}