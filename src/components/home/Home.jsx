
import {Subscription} from "../subcription/Subscription"
import Sync from '../../assets/sync.svg'
import report from '../../assets/report.svg'
import health from '../../assets/health.svg'
import {NavLink} from "react-router-dom"
import {routesConstant} from "../../routes/routesConstant"

export const Home = () => {

    return (
        <div className=" m-0 p-0 overflow-hidden overflow-x-hidden" style={{overflowX: "hidden",minWidth: "100%",maxWidth: "100%"}}>

            <div className=" min-h-lvh flex justify-center items-center bg-gradient-to-b from-violet-600/[.15] via-transparent ">
                {/* <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent"> */}
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">


                    <div className="max-w-3xl text-center mx-auto">
                        <h1 className="block font-medium text-slate-600 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                            Empowering Minds, Every Morning.
                        </h1>
                    </div>


                    <div className="max-w-3xl text-center mx-auto">
                        <p className="text-lg text-gray-400"> latest news on Every day.</p>
                    </div>


                    <div className="text-center">
                        <NavLink to={routesConstant.news.path} className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-400 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800" >
                            Get started
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </NavLink>
                    </div>

                </div>
                {/* </div> */}
            </div>


            {/* <div className="my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <article className="overflow-hidden rounded-lg shadow-lg"><a href="#"><img className="block h-auto w-full hover:opacity-75" alt="Placeholder" src="https://picsum.photos/id/1033/600/400" /></a>
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg"><a className="no-underline text-purple-900 hover:opacity-75" href="#">News title 1</a></h1>
                                <p className="text-purple-800 text-sm">10/12/19</p>
                            </header>
                            <div className="flex items-center justify-between leading-none px-4 py-2"><a className="flex items-center no-underline text-black hover:underline" href="#"><img className="block rounded-full" alt="Placeholder" src="https://picsum.photos/32/32/?random" /><p className="ml-2 text-sm">Author name</p></a><a className="no-underline text-gray-500 hover:text-red-600"
                                href="#"><i className="fa fa-heart"></i></a></div>
                            <footer className="p-2 md:px-4">
                                <p className="pb-3 text-gray-700 leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                                <div className="pb-4"><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#photography</span><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span
                                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mb-2">#winter</span>
                                </div>
                            </footer>
                        </article>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <article className="overflow-hidden rounded-lg shadow-lg"><a href="#"><img className="block h-auto w-full hover:opacity-75" alt="Placeholder" src="https://picsum.photos/id/1033/600/400" /></a>
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg"><a className="no-underline text-purple-900 hover:opacity-75" href="#">News title 2</a></h1>
                                <p className="text-purple-800 text-sm">10/12/19</p>
                            </header>
                            <div className="flex items-center justify-between leading-none px-4 py-2"><a className="flex items-center no-underline text-black hover:underline" href="#"><img className="block rounded-full" alt="Placeholder" src="https://picsum.photos/32/32/?random" /><p className="ml-2 text-sm">Author name</p></a><a className="no-underline text-gray-500 hover:text-red-600"
                                href="#"><i className="fa fa-heart"></i></a></div>
                            <footer className="p-2 md:px-4">
                                <p className="pb-3 text-gray-700 leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                                <div className="pb-4"><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#photography</span><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span
                                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mb-2">#winter</span>
                                </div>
                            </footer>
                        </article>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <article className="overflow-hidden rounded-lg shadow-lg"><a href="#"><img className="block h-auto w-full hover:opacity-75" alt="Placeholder" src="https://picsum.photos/id/1033/600/400" /></a>
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg"><a className="no-underline text-purple-900 hover:opacity-75" href="#">News title 3</a></h1>
                                <p className="text-purple-800 text-sm">10/12/19</p>
                            </header>
                            <div className="flex items-center justify-between leading-none px-4 py-2"><a className="flex items-center no-underline text-black hover:underline" href="#"><img className="block rounded-full" alt="Placeholder" src="https://picsum.photos/32/32/?random" /><p className="ml-2 text-sm">Author name</p></a><a className="no-underline text-gray-500 hover:text-red-600"
                                href="#"><i className="fa fa-heart"></i></a></div>
                            <footer className="p-2 md:px-4">
                                <p className="pb-3 text-gray-700 leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                                <div className="pb-4"><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#photography</span><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span
                                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mb-2">#winter</span>
                                </div>
                            </footer>
                        </article>
                    </div>
                </div>
            </div> */}

            <section className="container mx-auto py-10 p-6 ">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Features</h2>
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-fit md:w-1/2">
                        <h4 className="text-3xl text-gray-800 font-bold mb-3">Human Interest Stories</h4>
                        <p className="text-gray-600 mb-8 leading-normal">Discover the human side of the news with our compelling human interest stories. Through personal narratives and intimate interviews, we shed light on the experiences, struggles, and triumphs of individuals from diverse backgrounds</p>
                    </div>
                    <div className="w-fit md:w-1/2"><img src={health} alt="Monitoring" /></div>
                </div>
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2"><img src={report} alt="Reporting" /></div>
                    <div className="w-full pl-10 md:w-1/2">
                        <h4 className="text-3xl text-gray-800 font-bold mb-3">In-depth Analysis</h4>
                        <p className="text-gray-600 mb-8 leading-normal">Our team of seasoned journalists provides comprehensive analysis on a wide range of topics, from politics and economics to science and technology. Dive into our articles to gain a deeper understanding of complex issues and their implications on society.</p>
                    </div>
                </div>
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2">
                        <h4 className="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
                        <p className="text-gray-600 mb-8 leading-normal">Our Smart Health Monitoring Wristwatch allows you to sync data across all your mobile devices whether iOS, Android or Windows OS and also to your laptop whether MacOS, GNU/LInux or Windows OS.</p>
                    </div>
                    <div className="w-full md:w-1/2"><img src={Sync} alt="Syncing" /></div>
                </div>
            </section>
            <Subscription />

        </div>
    )
}
