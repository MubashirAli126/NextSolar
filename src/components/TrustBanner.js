import Image from 'next/image';
import image2 from '../../public/images/certificates-logos.png';

function TrustBanner() {
    return (
        <>
            <section>
                <div className="m-auto p-8 md:px-40 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row justify-between lg:text-left" data-aos="zoom-out">
                        <div className=" flex flex-col justify-center">
                            <video src='videos/solaranimated.mp4' autoPlay loop muted> </video>
                        </div>
                        <div className="lg:w-4/5 flex flex-col justify-center">
                            {/* <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div> */}
                            <h3 className="text-2xl mt-4 ml-4 text-green-700 
                            font-normal">Long life performance certified  <br /> <span className='font-black'>Certified with quality checks and international standards</span></h3>
                            <div>
                                <p className='my-3 text-base ml-4 text-gray-600 font-medium'>
                                    Crown your roof with Crown Solar Monocrystalline Panels with state of the art Tier 1 Grade Technology superior to all being offered currently in Pakistan. No longer you would have to worry on faulty parameters, malfunctioning panels, inadequate discharge.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className="bg-gray-100 text-center" >
                <section data-aos="zoom-in-down">
                    <div className="my-4 py-4" style={{ textAlign: '-webkit-center' }}>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <video src='videos/solaranimated.mp4' autoPlay loop muted> </video>
                        </div>
                        <h6 className="my-2 text-center text-lg text-green-700 uppercase font-bold">Long life performance certified</h6>

                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-green-700'></div>
                        </div>
                        <h2 className="mt-3 mx-12 text-center text-xl lg:text-2xl font-semibold text-green-700">Certified with quality checks and international standards</h2>
                    </div>

                    <div className="px-40" data-aos="fade-down" data-aos-delay="600">
                        <p className='my-3 text-base text-gray-600 font-semibold'>
                            Crown your roof with Crown Solar Monocrystalline Panels with state of the art Tier 1 Grade Technology superior to all being offered currently in Pakistan. No longer you would have to worry on faulty parameters, malfunctioning panels, inadequate discharge.
                        </p>
                        {/* <div className=" flex flex-col my-3 lg:mx-4 justify-center items-center">
                            <Image alt="card img" className="lg:w-1/5 justify-center" src={image2} />
                        </div> */}
            {/* </div>
                </section>
            </div> */}
        </>
    )
}

export default TrustBanner