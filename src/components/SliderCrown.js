'use client'

import React from 'react';
import Slider from "react-slick";
import slider1 from '../../public/images/slider/slider1.jpg'
import slider2 from '../../public/images/slider/slider2.jpg'
import slider3 from '../../public/images/slider/slider3.jpg'
import slider4 from '../../public/images/slider/slider4.jpg'
import slider5 from '../../public/images/slider/slider5.jpg'
import slider6 from '../../public/images/slider/slider6.jpg'
import slider7 from '../../public/images/slider/slider7.jpg'
import slider8 from '../../public/images/slider/slider8.jpg'
import slider9 from '../../public/images/slider/slider9.jpg'
import slider10 from '../../public/images/slider/slider10.jpg'
import Image from "next/image";

function SliderCrown() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <>
            <div>
                <Slider {...settings}>
                    <div>
                        <Image src={slider1} alt="card img" />
                    </div>
                    <div>
                        <Image src={slider2} alt="card img"/>
                    </div>
                    <div>
                        <Image src={slider3} alt="card img"/>
                    </div>
                    <div>
                        <Image src={slider4} alt="card img"/>
                    </div>
                    <div>
                        <Image src={slider5} alt="card img"/>
                    </div>
                    <div>
                        <Image src={slider6} alt="card img"/>
                    </div>
                    <div>
                        <Image src={slider7} alt="card img"/>
                    </div>
                    <div>
                        <Image src={slider8} alt="card img"/>
                    </div>
                    <div>
                        <Image src={slider9} alt="card img"/>
                    </div>
                    <div>
                        <Image src={slider10} alt="card img"/>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default SliderCrown