import React from 'react';
import img from '../../public/images/logogreen.png';
import Link from 'next/link';
import Image from 'next/image';
import SocialLink from '@/components/SocialLink'
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-8 border-t border-gray-200 lg:ml-11">

                        {/* 1st block */}
                        <div className="col-span-12 lg:col-span-4">
                            <div className="box-border p-8 bg-inherit text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                                <div class="flex justify-center items-center">
                                    <Image src={img} alt="gfg" />
                                </div>
                                <div className='text-center text-md font-bold text-gray-600'>
                                    <h5>Crown your roof with Solar</h5>
                                </div>
                            </div>
                        </div>

                        {/* 2nd block */}
                        <div className="col-span-12 text-center mx-auto lg:col-span-4 font-bold uppercase text-green-800">
                            <div className="text-xl mb-6">
                                Social Media Links.
                            </div>

                            <div className="text-md font-medium mb-6">
                                Follow us on social media.
                            </div>
                            <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <li>
                                        <SocialLink href="https://www.linkedin.com/company/crowncrlf/" size="xl" className="flex justify-center items-center text-green-700 hover:text-gray-500 rounded-full transition duration-150 ease-in-out"
                                         icon={faLinkedin}  />
                                    </li>
                                    <li className="ml-4">
                                        <SocialLink href="https://www.facebook.com/crownsolar.co" size="xl" className="flex justify-center items-center text-green-700 hover:text-gray-500 rounded-full transition duration-150 ease-in-out"
                                        icon={faFacebook} />
                                    </li>
                                    <li className="ml-4">
                                        <SocialLink href="https://www.instagram.com/crownsolar.co/" size="xl" className="flex justify-center items-center text-green-700 hover:text-gray-500 rounded-full transition duration-150 ease-in-out"
                                         icon={faInstagram} />
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 3rd block */}

                        {/* 4th block */}
                        <div className="col-span-12 lg:col-span-4 text-center mx-auto">
                            <h6 className="text-green-800 text-xl font-bold mb-4">CONTACT US</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <Link href="#" className="text-green-800 font-bold">021 111 000 348</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="#" className="text-green-800 text-md font-medium mb-6">Plot # 672-673, Building 4, Deh Joreji Taluka,</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="#" className="text-green-800">District Malir, Bin Qasim,  Karachi</Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                            <div className="text-sm text-gray-600 font-semibold py-1">
                                Copyright &copy; {new Date().getFullYear()}{"  "}
                                <Link
                                    href="#"
                                    className=" hover:text-gray-900"
                                >
                                    crownsolar.co
                                </Link>. All rights reserved.
                            </div>
                        </div>
                    </div>

                </div>

            </footer>
        </>
    )
}
export default Footer;
