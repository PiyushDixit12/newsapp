import {useEffect,useState} from "react";
import {fetchNews} from "../../../services/getNews"
import {NewsCard} from "../newsCard/NewsCard";
import {Loader} from "../../components/loader";
import {useSelector} from "react-redux";

export const ShowNews = () => {
    const user = useSelector(selector => selector.userInfo);
    console.log("user is ",user)
    const [news,setNews] = useState();
    useEffect(() => {
        const fn = async () => {
            const data = await fetchNews(user?.uid);
            console.log("data is ",data)
            setNews(data);
        }
        fn();

    },[user?.uid]);
    return (
        <div className=" mx-auto container w-full flex flex-wrap justify-start  ">
            {news && news.length ?
                news.map((value) => {
                    return <NewsCard key={value?.id} {...value} />
                })
                : <Loader />}
        </div>
    )
}
