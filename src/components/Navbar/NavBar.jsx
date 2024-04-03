/* eslint-disable react/no-unknown-property */
import {useCallback,useState} from "react"
import userIcon from '../../assets/react.svg'
import {NavLink} from "react-router-dom";
import {routesConstant} from "../../routes/routesConstant";
import {signOut} from "firebase/auth";
import {auth} from "../../firebase";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
export const NavBar = () => {
    // const isLogin = useContext(userContext);
    const isLogin = useSelector(selector => selector.userInfo);
    console.log(isLogin)
    // const isLogin = true;
    const [toggle,setToggle] = useState(false);
    const [toggleSlider,setToggleSlider] = useState(false);

    const changeToggle = useCallback(() => {
        setToggle(!toggle)
    },[toggle]);

    const handleLogout = useCallback(() => {
        signOut(auth).then((user) => {
            if(toggle) {
                changeToggle();
            }
            localStorage.clear()
            console.log("user logout is ",user);
            toast.success("User Logout Successfully !");
        }).catch(err => {
            console.log('error logout is ',err);
            toast.error("Something Went Wrong While Logout ");
        })
    },[changeToggle,toggle]);

    const changeToggleSlider = useCallback(() => {
        setToggleSlider(!toggleSlider)
    },[toggleSlider]);

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
                <div className="max-w-screen-xl relative flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">

                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">News <span className=" text-blue-700">Store</span> </span>
                    </a>

                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0  rtl:space-x-reverse">

                        <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            {
                                isLogin ? <img className="w-8 h-8 rounded-full" src={isLogin.photo ? isLogin.photo : userIcon} alt="user photo" onClick={changeToggle} /> :
                                    <NavLink
                                        type="button"
                                        to={routesConstant.getStarted.path}
                                        className="text-white ring-4 hover:ring-blue-700 ring-blue-600 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 md:px-4 md:py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >Get started</NavLink>
                            }
                        </button>

                        <div className={`z-50 absolute top-14  right-2 ${toggle ? " visible" : 'hidden'}  my-4 text-base  list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">{isLogin?.name}</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{isLogin?.email}</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li> <NavLink to={routesConstant.createNews.path}> <span
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >Create News</span></NavLink></li>
                                <li> <NavLink to={routesConstant.profile.path + "/" + isLogin?.uid}> <span
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >Profile</span></NavLink></li>
                                <li>

                                    <span
                                        onClick={handleLogout}
                                        className="block  cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >Sign out</span>
                                </li>
                            </ul>
                        </div>

                        <button data-collapse-toggle="navbar-user" onClick={changeToggleSlider} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${toggleSlider ? "visible" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to={routesConstant.home.path} defaultChecked className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent  md:text-white md:p-0 md:hover:text-blue-700" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={routesConstant.news.path} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">News</NavLink>
                            </li>
                            <li>
                                <NavLink to={routesConstant.cards.path} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Cards</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
