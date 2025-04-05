import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import IMAGES from '@/public';
import "@/styles/landing.css";

const Landing = (props) => {
    return (
        <div className="relative w-full h-[40vh] md:h-[45vh] lg:h-[60vh] min-h-screen flex justify-center items-center">
            {/* Background Image */}
            <img
                src={IMAGES["28"]}
                alt="landing-bg"
                className="w-full h-full object-cover"
            />

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Content Section */}
            <div className="w-full h-[70vh] md:h-[80vh] lg:h-[90vh] py-10 lg:p-0 flex flex-col justify-center items-center absolute z-10">
                <div className="relative w-full lg:w-[80%] flex justify-center items-center h-[55%] flex-col">

                    <div className="flex flex-col gap-4 md:gap-8 lg:gap-3 justify-center items-center">

                        {/* welcome */}
                        <div className="w-full flex justify-center items-center mb-6">
                            <h1 className="text-white text-lg font-bold" style={{ letterSpacing: '0.3em' }}>
                                WELCOME TO
                            </h1>
                        </div>

                        {/* Title */}
                        <div className="w-full flex justify-center items-center">
                            <h1 className="text-white text-5xl sm:text-6xl md:text-8xl" style={{ fontFamily: '"Playfair Display", serif' }}>
                                Naira Villa
                            </h1>
                        </div>

                        {/* Description */}
                        <div className="flex justify-center items-center w-full">
                            <p className="w-full text-center text-md md:text-lg lg:text-4xl text-white font-medium" style={{ fontFamily: '"Playfair Display", serif' }}>
                                Resort & Villa Hotel
                            </p>
                        </div>


                    </div>

                </div>

                {/* Button for larger screens */}
                <Link href="contact-us" className="w-full flex justify-center items-center mt-6 lg:mt-10">
                    <Button radius="full" className="bg-white text-black font-bold px-8 rounded-none text-xs sm:text-sm md:text-base" style={{ letterSpacing: '0.1em' }}>
                        LEARN MORE
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Landing;
