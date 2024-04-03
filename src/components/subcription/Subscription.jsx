// import './Subscription.css'
export const Subscription = () => {
    return (
        <>
            <div className=' w-full  bg-gray-900   text-slate-50 '>
                <section className="news-letter justify-center" id="News-letter">
                    {/* <div className="news pl-[0] pr-[0] py-[4.8px] text-center ">
                        <div className=" mx-auto container">
                            <h1 className=" news-heading text-white text-[44px] leading-[1.4]">Subscribe To Get The Latest <br /> News About Us</h1>
                            <p className="des how-de text-[18px] mb-[16px] mt-[12px] leading-[1.8]">Get the Latest news about digital Marketing to Your Pocket, drop your <br /> email below to
                                get daily update about us</p>

                            <form action="">
                                <input type="email" className='subscription-email inline-block w-3/5 px-[36px] py-[18px] mx-[0] my-[8px] border-[1px] border-[solid] border-[#ccc] box-border h-[70px] mt-[18px] rounded-[20px] border-[none] [box-shadow:0_20px_30px_0_rgba(0,_0,_0,_0.06)] text-[16px] leading-[3]' maxLength="50" required placeholder="Enter your email address" />
                                <button className="bt -ml-[160px] text-[16px] inline-block font-semibold px-[32px] py-[16px] rounded-[20px] cursor-pointer bg-[#2563eb] text-[#fff]">Subscribe</button>

                            </form>
                        </div>
                    </div> */}
                    <div className=" flex justify-around items-center py-4"> <h1 className=" text-2xl">Subscribe here to get notification</h1>  <button className="bt  text-[16px] px-10 py-2 inline-block font-semibold  rounded-[20px] cursor-pointer bg-[#2563eb] text-[#fff]">Subscribe</button> </div>

                    <div className=" w-full mt-4 py-6 text-gray-600 border-t border-gray-800 text-center"> © 2019 All rights reserved.</div>
                </section >

            </div>
        </>
    )
}
