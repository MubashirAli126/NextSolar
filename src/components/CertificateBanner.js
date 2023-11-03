import React from 'react'
import asset1 from '../../public/images/certificate/asset1.png';
import asset2 from '../../public/images/certificate/asset2.png';
import asset3 from '../../public/images/certificate/asset3.png';
import asset4 from '../../public/images/certificate/asset4.png';
import asset5 from '../../public/images/certificate/asset5.png';
import asset6 from '../../public/images/certificate/asset6.png';
import asset7 from '../../public/images/certificate/asset7.png';
import asset8 from '../../public/images/certificate/asset8.png';
import asset9 from '../../public/images/certificate/asset9.png';
import asset10 from '../../public/images/certificate/asset10.png';
import Image from 'next/image';

const clientImage = {
    height: '3rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

function CertificateBanner() {
    return (
        <div className="mt-4">
            <section data-aos="fade-up">
                <div className="p-4" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid grid-cols-4 lg:grid-cols-10">
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset1} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset2} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset7} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset3} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} s src={asset4} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset8} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset5} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset6} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset10} alt="client" />
                        </div>
                        <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <Image style={clientImage} src={asset9} alt="client" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CertificateBanner
