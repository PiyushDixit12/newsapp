import {useCallback,useState} from "react"
import {GithubAuthProvider,GoogleAuthProvider,getRedirectResult,signInWithEmailAndPassword,signInWithRedirect} from 'firebase/auth'
import {auth} from "../../firebase";
import {NavLink,useNavigate} from "react-router-dom";
import {routesConstant} from "../../routes/routesConstant";


export const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value);
    },[]);

    getRedirectResult(auth).then(result => {
        if(result) {
            const credentials = GoogleAuthProvider.credentialFromResult(result);
            console.log("Access Token ",credentials);
            console.log("user after redirect is ",result.user);
            navigate(routesConstant.home.path);
        }
    });

    getRedirectResult(auth).then(result => {
        if(result) {
            const gitHubCredentials = GithubAuthProvider.credentialFromResult(result);
            console.log("Facebook credential ",gitHubCredentials);
            console.log("user after redirect is ",result.user);
            navigate(routesConstant.home.path);
        }
    });

    const handlePasswordChange = useCallback((e) => {
        setPassword(e.target.value);
    },[]);

    const handleLoginWithGoogle = useCallback(async () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider).then(() => {
            console.log("redirect success !");
            navigate(routesConstant.home.path);
        });
    },[navigate]);

    const handleLoginWithGithub = useCallback(() => {
        const provider = new GithubAuthProvider();
        signInWithRedirect(auth,provider).then(() => {
            console.log("redirect success !");
            navigate(routesConstant.home.path);
        }).catch(err => {
            console.log("Error in login with github ",err);
        });
    },[navigate]);

    const handleLoginAccount = useCallback(() => {
        signInWithEmailAndPassword(auth,email,password).then(user => {
            console.log("User is ",user);
            alert("User Login Successfully !");
            navigate(routesConstant.home.path);
        }).catch(err => {
            console.log("Error While creating User ",err)
        })
    },[email,navigate,password]);

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" /> */}
                    Book <span className=" text-primary-400 inline-block ms-2"> Store</span>
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" >
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-400"
                                    placeholder="Your Email"
                                    required
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Your Password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            {/* <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div> */}
                            {/* <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div> */}

                            <button
                                // type="submit"
                                type="button"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                onClick={handleLoginAccount}
                            >Login</button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don&apos;t have an account? <NavLink to={routesConstant.getStarted.path} className="font-medium text-primary-600 hover:underline dark:text-primary-500">sign up here</NavLink>
                            </p>
                            <div className=" w-full">
                                <div className=" mb-6 w-full relative"> <div className=" w-full border-dashed border-gray-700 border-b-2 h-3"></div>
                                    <div className=" absolute items-center justify-center top-0 left-1/2 -translate-x-1/2"><span className=" rounded-full w-full text-white  text-xs bg-gray-700 p-2">OR</span> </div>
                                </div>
                                <div
                                    className=" w-full text-white  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
                                    onClick={handleLoginWithGithub}
                                >
                                    Login With Github
                                </div>
                                <div
                                    className=" w-full my-3 text-white  bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
                                    onClick={handleLoginWithGoogle}
                                >
                                    Login With Google
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
