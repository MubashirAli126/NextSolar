import React from 'react';
import asset0 from '../../public/images/certificate/asset1.png';
import asset1 from '../../public/images/clients/asset1.png';
import asset2 from '../../public/images/clients/asset2.png';
import asset3 from '../../public/images/clients/asset3.png';
import asset4 from '../../public/images/clients/asset4.png';
import asset5 from '../../public/images/clients/asset5.png';
import asset6 from '../../public/images/clients/asset6.png';
import asset7 from '../../public/images/clients/asset7.png';
import asset8 from '../../public/images/clients/asset8.png';
import asset9 from '../../public/images/clients/asset9.png';
import asset10 from '../../public/images/clients/asset10.png';
import asset11 from '../../public/images/clients/asset11.png';
import Image from 'next/image';

const certiImage = {
    height: '3rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Certificate = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="p-4" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid grid-cols-4 lg:grid-cols-12">
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={certiImage} src={asset0} alt="client" />
                        </div>

                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={certiImage} src={asset1} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={certiImage} src={asset2} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={certiImage} src={asset3} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={certiImage} s src={asset4} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={certiImage} src={asset5} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={certiImage} src={asset6} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={certiImage} src={asset7} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={certiImage} src={asset8} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={certiImage} src={asset9} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={certiImage} src={asset10} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={certiImage} src={asset11} alt="client" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Certificate;