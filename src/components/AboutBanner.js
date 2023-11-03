import Link from 'next/link'

function AboutBanner() {
    return (
        <div className="w-full flex items-center justify-center text-white aboutBanner">
            <div className="mx-8 w-full text-center lg:text-left py-40 px-8 flex lg:justify-between items-center">
                <div className="w-full flex flex-col lg:flex-row lg:justify-around">
                    <div className=" text-center">
                        <h1 className='text-3xl md:text-4xl lg:text-4xl font-bold mb-4 md:mb-8 lg:mb-8'>Producing Solar Panels for Tier 1 Grade Material</h1>

                            <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-5">

                                <div className="rounded-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                        <h2 className="font-semibold my-4 text-2xl text-center">12 Years</h2>
                                        <p className="text-md font-medium text-center">
                                            Product Warranty
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                        <h2 className="font-semibold my-4 text-2xl text-center">25 Years</h2>
                                        <p className="text-md font-medium text-center">
                                            Life Guarantee
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                        <h2 className="font-semibold my-4 text-2xl text-center ">22.5%</h2>
                                        <p className="text-md font-medium text-center">
                                            Efficiency Quotient
                                        </p>
                                    </div>
                                </div>
                            </div>
                        {/* <div className='flex justify-center relative top-3'>
                            <Link href="/energy-calculator" className=" bg-transparent border hover:bg-green-700 hover:border-green-600 text-white justify-center text-center rounded-lg px-10 py-3 flex items-center group">Energy calculator
                                <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBanner
