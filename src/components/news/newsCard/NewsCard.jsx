import {getDownloadURL,ref,deleteObject} from "firebase/storage";
import {DB,IMAGE_DB} from "../../../firebase";
import {useCallback,useLayoutEffect,useState} from "react";
import fallbackImage from '../../../assets/fallback-news-image.png'
import {doc,deleteDoc} from "firebase/firestore";
import {AllURl} from "../../../services/apiUrls";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {routesConstant} from "../../../routes/routesConstant";
import {FaEdit} from "react-icons/fa";
import {MdDelete} from "react-icons/md";
import {Tooltip} from "react-tooltip";
import {useDispatch} from "react-redux";
import {removeOneUserNews} from "../../../redux/reduxslice/userNewsSlice";
// eslint-disable-next-line react/prop-types
export const NewsCard = ({id,title,description,date,image,uid,userId}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [imageCard,setImage] = useState(fallbackImage);

    const getImage = useCallback(() => {
        console.log("url is ",image)
        const fn = () => {
            getDownloadURL(ref(IMAGE_DB,image)).then(path => {
                let url = path;
                console.log("Now url is ",url);
                setImage(url);
                return url;
            }).catch(err => {
                console.log("error in image is ",err)
            });
        }
        return fn();
    },[image]);

    useLayoutEffect(() => {
        getImage()
    },[getImage]);

    const deletePost = useCallback(() => {
        deleteDoc(doc(DB,AllURl.newsPosts,id)).then(() => {
            const disRef = ref(IMAGE_DB,image);
            deleteObject(disRef).then(() => {
                dispatch(removeOneUserNews(id));
                toast.success("News Deleted Successfully !");
            }).catch(() => {
                toast.error("Something Went Wrong !");
            })
        }).catch(() => {
            toast.error("Something Went Wrong While Deleting Post");
        });
        console.log("Post Deleted")
    },[dispatch,id,image]);

    const editPost = useCallback(() => {
        const editData = {
            id,title,description,uid,image
        };
        console.log("Edit news Data ",editData);
        localStorage.setItem("editNews",JSON.stringify(editData));
        // navigate(routesConstant.editNews.path + "?id=" + id + "&title=" + title + "&description=" + description + "&uid" + uid + "&image=" + image);
        navigate(routesConstant.editNews.path);
    },[description,id,image,navigate,title,uid]);

    return (
        <div className="p-2">
            <div className="min-w-xs  max-w-xs rounded overflow-hidden border shadow-md">
                <div className="flex  justify-center items-center">
                    <img className=" m-1 w-auto h-40" src={imageCard}
                        // src={getImage(image) ?? image ?? "/img/card-top.jpg"} 
                        alt="Sunset in the mountains" />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {description} </p>
                </div>
                <div className="px-6 pt-4 pb-2 flex justify-between">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Date:- {date}</span>
                    {uid && uid == userId ? <div className=" flex justify-between">
                        <span className=" text-green-700 cursor-pointer" onClick={editPost}> <FaEdit id="FaEdit" size={20} /> <Tooltip anchorSelect="#FaEdit" place="top">Edit News</Tooltip></span>
                        <span className=" text-red-700 cursor-pointer" onClick={deletePost}> <MdDelete id="MdDelete" size={20} /> <Tooltip anchorSelect="#MdDelete" place="top">Delete News</Tooltip></span>
                    </div> : null}
                </div>
            </div>
        </div>
    )
}
