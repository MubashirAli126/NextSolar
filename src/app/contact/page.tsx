"use client"

import React, { useState } from 'react';
import { useDocTitle } from '@/components/CustomHook';
// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';
import SocialLink from '@/components/SocialLink'
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Page() {
    useDocTitle('MLD | Molad e Konsult - Send us a message')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState([])

    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     document.getElementById('submitBtn').disabled = true;
    //     document.getElementById('submitBtn').innerHTML = 'Loading...';
    //     let fData = new FormData();
    //     fData.append('first_name', firstName)
    //     fData.append('last_name', lastName)
    //     fData.append('email', email)
    //     fData.append('phone_number', phone)
    //     fData.append('message', message)

    //     axios({
    //         method: "post",
    //         url: process.env.REACT_APP_CONTACT_API,
    //         data: fData,
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     })
    //         .then(function (response) {
    //             document.getElementById('submitBtn').disabled = false;
    //             document.getElementById('submitBtn').innerHTML = 'send message';
    //             clearInput()
    //             //handle success
    //             Notiflix.Report.success(
    //                 'Success',
    //                 response.data.message,
    //                 'Okay',
    //             );
    //         })
    //         .catch(function (error) {
    //             document.getElementById('submitBtn').disabled = false;
    //             document.getElementById('submitBtn').innerHTML = 'send message';
    //             //handle error
    //             const { response } = error;
    //             if (response.status === 500) {
    //                 Notiflix.Report.failure(
    //                     'An error occurred',
    //                     response.data.message,
    //                     'Okay',
    //                 );
    //             }
    //             if (response.data.errors !== null) {
    //                 setErrors(response.data.errors)
    //             }

    //         });
    // }
    return (
        <>
            <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 bg-gray-200">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

                    <form>

                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-green-700 uppercase text-3xl">Get in touch</h1>
                            </div>
                            <div className='flex'>
                                <p className='font-medium text-center lg:text-left text-green-700 text-base'>Please feel free to contact us directly by submitting your question via the contact form below, and we will get back to you within 48 hours. You can event send us a detailed email at info@crownsolar.co in terms extensive dealership and showroom deals.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input
                                        name="first_name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="First Name*"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                </div>

                                <div>
                                    <input
                                        name="last_name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                </div>

                                <div>
                                    <input
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                </div>

                                <div>
                                    <input
                                        name="phone_number"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number"
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                </div>
                            </div>
                            <div className="my-4">
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                            </div>
                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-green-700 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                    <div
                        className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-green-700 rounded-2xl">
                        <div className="flex flex-col text-white">

                            <div className="flex my-4 w-2/3 lg:w-full">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Office Address</h2>
                                    <p className="text-white">Plot # 672-673, Building 4, Deh Joreji Taluka, District Malir, Bin Qasim,  Karachi</p>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>

                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <p className="text-white">Tel: 021 111 000 348</p>

                                    {/* <div className='mt-5'>
                                        <h2 className="text-2xl">Send an E-mail</h2>
                                        <p className="text-white">info@mld.ng</p>
                                    </div> */}

                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <SocialLink size='xl' className="px-3 flex justify-center items-center text-white hover:text-gray-400 rounded-full transition duration-150 ease-in-out"  
                                href="https://www.linkedin.com/company/crowncrlf/"  icon={faLinkedin} />
                                <SocialLink className=" px-3flex justify-center items-center text-white hover:text-gray-400 rounded-full transition duration-150 ease-in-out" 
                                size='xl' href="https://www.facebook.com/crownsolar.co" icon={faFacebook} />
                                <SocialLink className=" px-3 flex justify-center items-center text-white hover:text-gray-400 rounded-full transition duration-150 ease-in-out" 
                                size='xl' href="https://www.instagram.com/crownsolar.co/" icon={faInstagram} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page