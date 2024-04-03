import {Route,Routes} from "react-router-dom"
import {routesConstant} from "./routesConstant"
import {Layout} from "../components/Layout"
import {GetStarted} from "../components/signup/GetStarted"
import {Login} from "../components/signin/Login"
import {Home} from "../components/home/Home"
import {CreateNews} from "../components/news/createNews/CreateNews"
import {PageNotFound} from "../components/ErrorPage404/PageNotFound"
import {ShowNews} from "../components/news/showNews/ShowNews"
import {ShowNewsByUserId} from "../components/news/showNews/ShowNewsByUserId"
import {Private} from "../components/Private"
import {EditNews} from "../components/news/editNews/EditNews"

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={routesConstant.home.path} element={<Layout><Home /></Layout>} />
                <Route path={routesConstant.news.path} element={<Layout><ShowNews /></Layout>} />
                <Route path={routesConstant.getStarted.path} element={<GetStarted />} />
                <Route path={routesConstant.signIn.path} element={<Login />} />
                <Route path="" element={<Private />}>
                    <Route path={routesConstant.createNews.path} element={<Layout><CreateNews /></Layout>} />
                    <Route path={routesConstant.editNews.path} element={<Layout><EditNews /></Layout>} />
                    <Route path={routesConstant.profile.path + "/:id"} element={<Layout><ShowNewsByUserId /></Layout>} />
                    <Route path={routesConstant.cards.path} element={<Layout>< > cards will come</></Layout>} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}
