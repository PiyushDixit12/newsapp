import {Route,Routes} from "react-router-dom"
import {routesConstant} from "./routesConstant"
import {Layout} from "../components/Layout"
import {GetStarted} from "../components/signup/GetStarted"

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={routesConstant.home.path} element={<Layout> Welcome to Home Page</Layout>} />
                <Route path={routesConstant.getStarted.path} element={<GetStarted />} />
            </Routes>
        </>
    )
}
