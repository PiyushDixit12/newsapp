import {Formik} from "formik"
import {CreateNewsSchema} from "../../../schema/news/CreateNewsSchema";
import {useContext,useEffect,useState} from "react";
import {DB,IMAGE_DB} from "../../../firebase";
import {v4} from "uuid";
import {deleteObject,ref,uploadBytes} from "firebase/storage";
import {doc,updateDoc} from "firebase/firestore";
import {AllURl} from "../../../services/apiUrls";
import {toast} from "react-toastify";
import {userContext} from "../../../context/UserContext";
import {useNavigate} from "react-router-dom";
import {routesConstant} from "../../../routes/routesConstant";


// eslint-disable-next-line react/prop-types
export const EditNews = () => {
    const navigate = useNavigate();
    const isLogin = useContext(userContext);

    let editData = localStorage.getItem("editNews");
    useEffect(() => {
        return () => {
            localStorage.removeItem("editNews");
        }
    },[]);
    if(editData != null && editData != undefined) {
        editData = JSON.parse(editData);
    } else {
        navigate(routesConstant.home.path);
    }
    console.log("edit DAta news is ",editData)
    const [file,setFile] = useState();
    const initialValues = {
        newsTitle: editData ? editData?.title : "",
        newsImage: "",
        newsDescription: editData ? editData?.description : "",
    };
    return (
        <div className="  w-auto flex justify-items-center items-center  ">
            <div className=" mx-auto  mt-20 w-1/2 ">
                <Formik initialValues={initialValues} validationSchema={CreateNewsSchema} onSubmit={async (values,{resetForm}) => {
                    console.log(values);
                    console.log(values.newsImage);
                    const url = `${AllURl.newsImages}/${v4()}`
                    const img = ref(IMAGE_DB,url);
                    // const basefile = getBase64(file);
                    const imgRef = ref(IMAGE_DB,editData?.image);
                    await deleteObject(imgRef);   
                    await uploadBytes(img,file).then(data => {
                        console.log("Data is ",data);
                    });
                    const newsRef = doc(DB,AllURl.newsPosts,editData?.id);
                    const date = new Date();
                    await updateDoc(newsRef,{
                        title: values.newsTitle,
                        description: values.newsDescription,
                        image: url,
                        uid: isLogin?.uid,
                        date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
                    }).then(() => {
                        toast.success("News Updated Successfully !");
                        resetForm();
                    }).catch(() => {
                        toast.error("News Not Created !");
                    })
                }}>
                    {({handleBlur,handleChange,handleSubmit,values,errors,touched}) => {
                        return (<form onSubmit={handleSubmit}>
                            <div className="bg-white  p-4 py-8" >
                                <div className="heading text-center font-bold text-2xl m-5 text-gray-800 bg-white">Edit Post</div>
                                <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                                    <input className="title bg-gray-100 border border-gray-300 p-2 mb-3 outline-none"
                                        name="newsTitle"
                                        onChange={handleChange}
                                        value={values.newsTitle}
                                        onBlur={handleBlur}
                                        placeholder="Title" type="text" />
                                    {errors.newsTitle && touched.newsTitle ? <div className=" text-red-600 mb-3">{errors.newsTitle}</div> : null}
                                    <textarea
                                        value={values.newsDescription}
                                        name="newsDescription" onChange={handleChange} onBlur={handleBlur}
                                        className="description bg-gray-100 sec mb-3 p-3 h-60 border border-gray-300 outline-none" placeholder="Describe everything about this post here"></textarea>
                                    {errors.newsDescription && touched.newsDescription ? <div className=" text-red-600 mb-3">{errors.newsDescription}</div> : null}

                                    <div className="mb-3">
                                        <label
                                            htmlFor="formFile"
                                            className="mb-2 inline-block text-neutral-500 dark:text-neutral-400"
                                        >Image</label
                                        >
                                        <img src={values.newsImage} />
                                        <input

                                            value={values.newsImage}
                                            name="newsImage" onChange={(e) => {
                                                setFile(e.target.files[0])
                                                handleChange(e)
                                            }} onBlur={handleBlur}
                                            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-black/70 dark:text-black  file:dark:text-black mb-3"
                                            type="file"
                                            id="formFile" />
                                        {errors.newsImage && touched.newsImage ? <div className=" text-red-600 mb-3">{errors.newsImage}</div> : null}

                                    </div>

                                    <div className="buttons flex justify-end">
                                        <button type="submit" className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer rounded-md text-gray-200 ml-2 bg-primary-700">Post</button>
                                    </div>
                                </div >
                            </div >

                        </form>)
                    }}
                </Formik>
            </div>

        </div>
    )
}



