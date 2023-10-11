import { Route,Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { Login } from "../pages/login/Login"
import { Carrito } from "../components/carrito/Carrito"
export const AppRouter=()=>{
    return(
        <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/login" element ={<Login/>}/>
            <Route path="/carrito" element ={<Carrito/>}/>
        </Routes>
    )
}