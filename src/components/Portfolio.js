import Link from "next/link";
import Image from 'next/image';
import img1 from '../../public/images/image1.png';
import img2 from '../../public/images/image2.png';
import img3 from '../../public/images/image3.png';

const Portfolio = () => {
    return (
        <>
            <div className="my-4" id='portfolio'>
                <h2 className="my-2 text-center text-2xl text-green-700 uppercase font-bold">News, Events and Blogs</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-green-700 mb-8'></div>
                </div>

                <div className="px-4 lg:px-40 md:px-40" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-1">
                            <div className="m-2 text-justify text-sm">
                                <Image alt="card img" className="rounded-t group-hover:scale-[1.12] transition duration-1000 ease-in-out w-full" src={img1} />
                                <h4 className="font-semibold my-4 text-lg md:text-xl text-center ">Crown Solar Solutions</h4>
                                <p className="text-base font-medium leading-5 h-auto">
                                    Crown Solar is a leading provider of solar panels in Pakistan. The company is backed by Crown Group of Companies, a leading two and three-wheeler automotive spare parts manufacturer in Pakistan since the last 20 years.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link href="/get-demo" className="text-white bg-green-700 hover:bg-green-900 inline-flex items-center justify-center w-50 px-6 py-3 my-1 text-base shadow-xl rounded-xl">
                                        Read More
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-1">
                            <div className="m-2 text-justify text-sm">
                                <Image alt="card img" className="rounded-t group-hover:scale-[1.12] transition duration-1000 ease-in-out w-full" src={img2} />
                                <h4 className="font-semibold my-4 text-lg md:text-xl text-center">The Importance of Solar Panels in Pakistan</h4>
                                <p className="text-base font-medium leading-5 h-auto ">
                                    Solar panels are a viable solution to Pakistan energy crisis. Solar panels are a renewable source of energy that can be used to generate electricity. They are also a clean source of energy that does not produce pollution.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link href="/get-demo" className="text-white bg-green-700 hover:bg-green-900 inline-flex items-center justify-center w-50 px-6 py-3 my-1 text-base shadow-xl rounded-xl">
                                        Read More
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-1">
                            <div className="m-2 text-justify text-sm">
                                <Image alt="card img" className="rounded-t group-hover:scale-[1.12] transition duration-1000 ease-in-out w-full" src={img3} />
                                <h4 className="font-semibold my-4 text-lg md:text-xl text-center">Monocrystalline Solar Panels</h4>
                                <p className="text-base font-medium leading-5 h-auto">
                                    Third world countries are often faced with a number of challenges, including a lack of access to reliable and affordable energy. This can have a significant impact on the quality of life for people in these countries, as well as their ability to develop economically.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link href="/get-demo" className="text-white bg-green-700 hover:bg-green-900 inline-flex items-center justify-center w-50 px-6 py-3 my-1 text-base shadow-xl rounded-xl">
                                        Read More
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;