import {Navigate,Outlet} from "react-router-dom"
import {routesConstant} from "../routes/routesConstant"

export const Private = () => {
    const user = localStorage.getItem("user")
    return (
        <>
            {user ? <Outlet /> : <Navigate to={routesConstant.signIn.path} />}

        </>
    )
}
