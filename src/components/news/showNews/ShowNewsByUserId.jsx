import {useEffect} from "react";
import {fetchNewsByUserId} from "../../../services/getNews"
import {NewsCard} from "../newsCard/NewsCard";
import {Loader} from "../../components/Loader";
import {useNavigate,useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {setUserNews} from "../../../redux/reduxslice/userNewsSlice";
import {UserProfile} from "../../components/userProfile/UserProfile";
import {NoDataAvailable} from "../../components/noDataAvailable/NoDataAvailable";
import {routesConstant} from "../../../routes/routesConstant";
import {SomethingWentWrong} from "../../components/somethingWentWrong/SomethingWentWrong";

export const ShowNewsByUserId = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selector => selector.userInfo);
    const news = useSelector((selector) => selector.userNews.news);
    const params = useParams();
    console.log(params);
    useEffect(() => {
        const fn = async () => {
            console.log("Search params ",params)
            const data = await fetchNewsByUserId(params?.id);
            console.log("data is ",data);
            // setNews(data);
            dispatch(setUserNews(data));
        }
        fn();

    },[dispatch,params]);

    return (
        <>
            <UserProfile {...user} />
        <div className=" mx-auto container w-full flex flex-wrap justify-start  ">
            {news == "isLoading" ? <Loader /> :
                    news == 'error' ? <><SomethingWentWrong /></> :
                    news != "isLoading" && news && news.length ?
                        news.map((value) => {
                            return <NewsCard key={value?.id} {...value} userId={user?.uid} />
                        })
                        :
                            <div className=" container">

                                <NoDataAvailable />
                                <div className="flex flex-col justify-center items-center ">
                                    <h1 className=" text-gray-500 text-xl font-medium mb-4">You don&apos;t have any post</h1>
                                    <button className=" bg-primary-700 font-medium text-white rounded px-5 py-1" onClick={() => navigate(routesConstant.createNews.path)} >Create Now </button>
                                </div>
                            </div>}
            </div>
        </>
    )
}
