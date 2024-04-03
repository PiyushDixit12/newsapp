import {useState} from "react";
import {MdPhotoCamera} from "react-icons/md";
import {Tooltip} from "react-tooltip";

// eslint-disable-next-line react/prop-types
export const UserProfile = ({name,email,photo}) => {
    const [changePhoto,setChangePhoto] = useState(photo);
    return (
        <>
            <div className="antialiased sans-serif bg-gray-200">
                <div >
                    <div className="max-w-3xl mx-auto px-4 py-10">
                        <div >
                            <div className="py-4">
                                <div className="mb-5 text-center">
                                    <div className="mx-auto relative w-32 h-32 mb-2 border rounded-full relative bg-gray-100 mb-4 shadow-inset">
                                        <img id={"image"} src={changePhoto} className="object-cover w-full h-32 rounded-full" />
                                        <label
                                            htmlFor="fileInput"
                                            type="button"
                                            className="cursor-pointer absolute bottom-1 end-1  inline-flex justify-center items-center p-1  focus:outline-none border shadow-sm  text-gray-600 bg-white hover:bg-gray-100 font-medium rounded-full"
                                        >
                                            <MdPhotoCamera id="MdPhotoCamera" size={20} />
                                            <Tooltip anchorSelect="#MdPhotoCamera" place="bottom">Change Photo</Tooltip>
                                        </label>
                                        <input name="photo" id="fileInput" accept="image/*" onClick={() => setChangePhoto} className="hidden" type="file" />
                                    </div>

                                </div>
                                <div className="mx-auto flex flex-col justify-center items-center">
                                    <span className="  text-gray-600 font-medium"> {name}</span>
                                    <span className="  text-gray-600 "> {email} </span>
                                </div>

                            </div >
                        </div >
                    </div >

                </div >

            </div >
        </ >
    )
}
