import {useCallback} from "react"
import {GoogleAuthProvider,createUserWithEmailAndPassword,getRedirectResult,signInWithRedirect} from 'firebase/auth'
import {DB,auth} from "../../firebase";
import {doc,setDoc,getDoc} from 'firebase/firestore'
import {NavLink,useNavigate} from "react-router-dom";
import {routesConstant} from "../../routes/routesConstant";
import {validationSchema} from "../../schema/AuthSchema";
import {useFormik} from "formik";
import {toast} from "react-toastify";

export const GetStarted = () => {
    const navigate = useNavigate();
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values) => {
            // Your existing login logic goes here
            handleCreateAccount(values.email,values.password);
        },
    });
    // const handleEmailChange = useCallback((e) => {
    //     setEmail(e.target.value);
    // },[]);

    // const handlePasswordChange = useCallback((e) => {
    //     setPassword(e.target.value);
    // },[]);

    const handleCreateAccount = useCallback((email,password) => {
        createUserWithEmailAndPassword(auth,email,password).then(async user => {
            console.log("User is ",user);
            toast.success("User Created Successfully !");
            console.log("user is ",user);
            await setDoc(doc(DB,'users',user.user.uid),{
                uid: user.user.uid,
                name: user.user.displayName ?? "User",
                email: user.user.email
            });
            localStorage.setItem("user",JSON.stringify({uid:user.user.uid,name:user.user.displayName,email:user.user.email,photo:user.user.photoURL}))
            navigate(routesConstant.home.path)
        }).catch(err => {
            console.log("Error While creating User ",err);
            toast.error("User Already Present ! ");
        })
    },[navigate]);

    getRedirectResult(auth).then(async result => {
        if(result) {
            const credentials = GoogleAuthProvider.credentialFromResult(result);
            console.log("Access Token ",credentials);
            const docRef = doc(DB,"users",result.user.uid);
            const document = await getDoc(docRef)
            if (!document.exists()) {
                const docRef = doc(DB,"users",result.user.uid);
                await setDoc(docRef,{
                    uid: result.user.uid,
                    name: result.user.displayName ?? "User",
                    email: result.user.email
                })
            }
            localStorage.setItem("user",JSON.stringify({uid: result.user.uid,name: result.user.displayName,email: result.user.email,photo: result.user.photoURL}))

            console.log("user after redirect is ",result.user);
            navigate(routesConstant.home.path);
        }
    });

    // getRedirectResult(auth).then(result => {
    //     if(result) {
    //         const gitHubCredentials = GithubAuthProvider.credentialFromResult(result);
    //         console.log("Facebook credential ",gitHubCredentials);
    //         console.log("user after redirect is ",result.user);
    //         navigate(routesConstant.home.path);
    //     }
    // });

    const handleLoginWithGoogle = useCallback(async () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider).then(async(user) => {
            console.log("User google auth ",user)
            console.log("redirect success !");
            toast.success("User Login Successfully !");
            await setDoc(doc(DB,'users',user.user.uid),{
                uid: user.user.uid,
                name: user.user.displayName ?? "User",
                email: user.user.email
            });
            localStorage.setItem("user",JSON.stringify({uid: user.uid,name: user.displayName,email: user.email,photo: user.photoURL}))

            navigate(routesConstant.home.path);
        }).catch(err => {
            console.log("Error While creating User ",err);
            toast.error("Something went Wrong !");
        });
    },[navigate]);

    // const handleLoginWithGithub = useCallback(() => {
    //     const provider = new GithubAuthProvider();
    //     signInWithRedirect(auth,provider).then(() => {
    //         console.log("redirect success !");
    //         toast.success("User Login Successfully !");
    //         navigate(routesConstant.home.path);
    //     }).catch(err => {
    //         console.log("Error in login with github ",err);
    //         toast.error("Something went Wrong !"); 
    //     });
    // },[navigate]);

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" /> */}
                    News <span className=" text-primary-400 inline-block ms-2"> Store</span>
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
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
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className="text-red-500 text-sm">{formik.errors.email}</div>
                                )}
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
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                {formik.touched.password && formik.errors.password && (
                                    <div className="text-red-500 text-sm">{formik.errors.password}</div>
                                )}
                            </div>
                            {/* <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div> */}

                            {/* terms and Conditions */}
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
                                onClick={formik.handleSubmit}
                            >Create an account</button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <NavLink to={routesConstant.signIn.path} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</NavLink>
                            </p>
                            <div className=" w-full">
                                <div className=" mb-6 w-full relative"> <div className=" w-full border-dashed border-gray-700 border-b-2 h-3"></div>
                                    <div className=" absolute items-center justify-center top-0 left-1/2 -translate-x-1/2"><span className=" rounded-full w-full text-white  text-xs bg-gray-700 p-2">OR</span> </div>
                                </div>
                                {/* <div
                                    onClick={handleLoginWithGithub}
                                    className=" w-full text-white  cursor-pointer bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
                                >
                                    Login With Github
                                </div> */}
                                <div
                                    onClick={handleLoginWithGoogle}
                                    className=" w-full my-3 text-white cursor-pointer  bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
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
