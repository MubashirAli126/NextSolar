import Link from 'next/link';
import Image from 'next/image';
import img from '../../public/images/solar-panel-cut.png';

const Services = () => {

    return (
        <div className="w-full flex items-center justify-center text-white">
            <div className="w-full text-center lg:text-left py-12 md:px-36 lg:px-36 px-3 flex lg:justify-between items-center">
                <div className="w-full flex flex-col lg:flex-row lg:justify-around">
                    <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                        <h2 className="my-2 text-center text-2xl text-green-700 uppercase font-bold">Tier 1 Manufacturer</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-green-700 mb-8'></div>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                            <div className="bg-white bg-opacity-90 transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                                <div className="m-2 text-justify text-sm">
                                    <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Parameters</h4>
                                    {/* <p className="text-lg font-bold leading-5 text-center mb-4">
                                    182 Mm Wafers
                                </p> */}
                                    <p className="text-base font-medium">
                                        Wattage : 550W   <br />
                                        Open Circuit Voltage : 49.9V   <br />
                                        Efficiency : 22.5%  <br />
                                        Max Power NOCT : 416W  <br />
                                        Open Circuit Volt NOCT : 6.7V  <br />
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white bg-opacity-90 transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                                <div className="m-2 text-justify text-sm">
                                    <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Technical Specs</h4>
                                    {/* <p className="text-lg font-bold leading-5 text-center mb-4">
                                    Low Voltage Design
                                </p> */}
                                    <p className="text-base font-medium">
                                        Weight : 28.5 kg   <br />
                                        Max Voltage : 1500V  <br />
                                        Build : Aluminum Alloy  <br />
                                        Connector : MC4 Compatible  <br />
                                        Fuse Current :20A <br />
                                        Junction Box : IP68  <br />
                                        Dimensions : 2279mm*1134mm*35mm  <br />
                                    </p>
                                </div>
                            </div>

                            <div className=" bg-white bg-opacity-90 transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                                <div className="m-2 text-justify text-sm">
                                    <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Warranty</h4>
                                    {/* <p className="text-lg font-bold leading-5 text-center mb-4">
                                    Reinforced Structural Design
                                </p> */}
                                    <p className="text-base font-medium">
                                        Product : 12 Years  <br />
                                        Power Output Linear : 25 Years  <br />
                                        *Modules shown may be different than those included in final design.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

        // <div id="services" className="bg-gray-100 py-4" >
        //     <section data-aos="zoom-in-down">
        //         <div className="my-4 py-4">
        //             <h2 className="my-2 text-center text-3xl text-green-700 uppercase font-bold">Tier 1 Manufacturer</h2>

        //             <div className='flex justify-center'>
        //                 <div className='w-24 border-b-4 border-green-700'></div>
        //             </div>
        //             <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-green-700">Monocrystalline 550W Solar Panel</h2>
        //         </div>

        //         <div className="px-12" data-aos="fade-down" data-aos-delay="600">
        //             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        //                 <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group">
        //                     <div className="m-2 text-justify text-sm">
        //                         <Image alt="card img" className="rounded-t group-hover:scale-[1.12] transition duration-1000 ease-in-out w-full" src={img1} />
        //                         <h2 className="font-semibold my-4 text-2xl text-center">Parameters</h2>
        //                         <p className="text-sm font-semibold">
        //                             Wattage : 550W   <br />
        //                             Open Circuit Voltage : 49.9V   <br />
        //                             Efficiency : 22.5%  <br />
        //                             Max Power NOCT : 416W  <br />
        //                             Open Circuit Volt NOCT : 6.7V  <br />
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group">
        //                     <div className="m-2 text-justify text-sm">
        //                         <Image alt="card img" className="rounded-t group-hover:scale-[1.12] transition duration-1000 ease-in-out w-full" src={img3} />
        //                         <h2 className="font-semibold my-4 text-2xl text-center">Technical Specs</h2>
        //                         <p className="text-sm font-semibold">
        //                             Weight : 28.5 kg   <br />
        //                             Max Voltage : 1500V  <br />
        //                             Build : Aluminum Alloy  <br />
        //                             Connector : MC4 Compatible  <br />
        //                             Fuse Current :20A <br />
        //                             Junction Box : IP68  <br />
        //                             Dimensions : 2279mm*1134mm*35mm  <br />
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group">
        //                     <div className="m-2 text-justify text-sm">
        //                         <Image alt="card img" className="rounded-t group-hover:scale-[1.12] transition duration-1000 ease-in-out w-full" src={img2} />
        //                         <h2 className="font-semibold my-4 text-2xl text-center ">Warranty</h2>
        //                         <p className="text-sm font-semibold">
        //                             Product : 12 Years  <br />
        //                             Power Output Linear : 25 Years  <br />
        //                             *Modules shown may be different than those included in final design.
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>

        // </div>
    )
}

export default Services;