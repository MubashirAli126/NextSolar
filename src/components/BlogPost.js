import Link from 'next/link';
import img1 from '../../public/images/image1.png';
import img2 from '../../public/images/image2.png';
import img3 from '../../public/images/image3.png';
import Image from 'next/image';

function BlogPost() {
    return (
        <div className="w-full flex items-center justify-center text-white blog">
            <div className="w-full text-center lg:text-left py-56 px-4 md:px-8 lg:px-8 flex lg:justify-between items-center">
                <div className="w-full flex flex-col lg:flex-row lg:justify-around">
                    <div className=" text-center">

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            <div className="rounded-2xl border-white-800 border-2 p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <Image alt="card img" className="rounded-t  transition duration-1000 ease-in-out w-full" src={img1} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">The Importance of Solar Panels in Pakistan</h2>
                                    <p className="text-base font-medium">
                                        Solar panels are a viable solution to Pakistan energy crisis. Solar panels are a renewable source of energy that can be used to generate electricity. They are also a clean source of energy that does not produce pollution.
                                    </p>
                                </div>
                                <div className="flex justify-center my-4">
                                    <Link href="/post-one" className="text-white bg-green-700 hover:bg-green-900 inline-flex items-center justify-center w-50 px-6 py-3 my-4 text-base shadow-xl rounded-xl">
                                        Read More
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>

                            <div className="rounded-2xl border-white-800 border-2 p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <Image alt="card img" className="rounded-t transition duration-1000 ease-in-out w-full" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Crown Solar Solutions: Monocrystalline Solar Panels</h2>
                                    <p className="text-base font-medium">
                                        Crown Solar is a leading provider of solar panels in Pakistan. The company is backed by Crown Group of Companies, a leading two and three-wheeler automotive spare parts manufacturer in Pakistan since the last 20 years.
                                    </p>
                                </div>
                                <div className="flex justify-center my-4">
                                    <Link href="/post-two" className="text-white bg-green-700 hover:bg-green-900 inline-flex items-center justify-center w-50 px-6 py-3 my-4 text-base shadow-xl rounded-xl">
                                        Read More
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>

                            <div className="rounded-2xl border-white-800 border-2 p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <Image alt="card img" className="rounded-t transition duration-1000 ease-in-out w-full" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Crown Solar Solutions: Monocrystalline Solar Panels</h2>
                                    <p className="text-base font-medium ">
                                        Third world countries are often faced with a number of challenges, including a lack of access to reliable and affordable energy. This can have a significant impact on the quality of life for people in these countries, as well as their ability to develop economically.
                                    </p>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <Link href="/post-three" className="text-white bg-green-700 hover:bg-green-900 inline-flex items-center justify-center w-50 px-6 py-3 my-4 text-base shadow-xl rounded-xl">
                                        Read More
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost
