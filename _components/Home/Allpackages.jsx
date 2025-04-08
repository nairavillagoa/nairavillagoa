'use client'
import IMAGES from '@/public';
import { AirVent, Tv, Wifi } from 'lucide-react';
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useInView } from 'framer-motion';

const Allpackages = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' }); // trigger once when ~100px in view

    const fadeInVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        },
    };


    return (
        <section className="bg-[#f4f1ed] py-16 lg:px-6 md:px-20">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-4 px-4 lg:py-0 lg:px-0" ref={ref}
                variants={fadeInVariant}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}>
                {/* Text Section */}
                <div className='flex flex-col lg:justify-between h-full w-full lg:w-[80%] lg:p-10'>
                    <p className="text-4xl lg:text-6xl h-full font-serif text-[#5a3e2b] mb-4 text-start self-start" style={{ fontFamily: '"Playfair Display", serif' }}>The Family Suite</p>
                    <p className="text-md text-gray-600 mt-4 lg:mt-0">
                        Showcasing one of our finest rooms, this elegant space features a plush king bed, warm lighting, and a serene vibe. Enjoy a private balcony, swimming pool, AC comfort, and modern amenities like power backup, satellite TV, free Wi-Fi, daily housekeeping, 24/7 food delivery, caretaker support, and laundry service.
                    </p>
                    <div className="flex md:grid-cols-3 mt-8 justify-center items-center">

                        <div className='grid grid-cols-2 w-full h-full'>
                            <div
                                className="w-full h-full"
                            >
                                <div className='inline-flex gap-2 w-full h-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-waves-ladder-icon lucide-waves-ladder self-center"><path d="M19 5a2 2 0 0 0-2 2v11" /><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M7 13h10" /><path d="M7 9h10" /><path d="M9 5a2 2 0 0 0-2 2v11" /></svg>
                                    <p className="text-sm font-medium self-center">Swimming Pool</p>
                                </div>

                            </div>

                            <div
                                className="w-full h-full"
                            >
                                <div className='inline-flex gap-2 w-full h-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='self-center' width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M8.042 14.227h2.534a.23.23 0 0 1 .23.23v1.737a.23.23 0 0 1-.23.23H8.042a.23.23 0 0 1-.23-.23v-1.737a.23.23 0 0 1 .23-.23m-1.13 5.825a32 32 0 0 0 4.931.3a32 32 0 0 0 4.963-.3a.726.726 0 0 0 .615-.769v-.266h-11.3v.255a.885.885 0 0 0 .791.78m10.509-17.83h-.728A47 47 0 0 0 11.95 2c-2.833 0-4.843.161-5.495.221h-.334v16.494h11.3zM12.2 9.5v-.151c1.781 0 3.585.38 3.585 1.106s-1.8 1.091-3.588 1.091s-3.585-.375-3.585-1.091s1.8-1.106 3.585-1.106V9.5Zm-1.627 4.424a.534.534 0 0 1 .533.534v1.736a.533.533 0 0 1-.533.533h-2.53a.534.534 0 0 1-.534-.533v-1.736a.535.535 0 0 1 .534-.534zm9.254 4.67V4.224l-2.04-1.889l-.063-.006v16.386h2.1v-.121zM5.818 2.7L4.173 4.215v14.5h1.646zm11.906 16.573a1.03 1.03 0 0 1-.875 1.08a32.6 32.6 0 0 1-5.006.3h-.535a32 32 0 0 1-4.432-.309a1.19 1.19 0 0 1-1.057-1.065v-.27H4.178C4.241 21.611 5.03 22 11.949 22c6.953 0 7.8-.427 7.872-2.982h-2.1z" className="cls-1" /></svg> <span className="text-sm font-medium self-center">Inverter</span>
                                </div>

                            </div>

                            <div
                                className="w-full h-full"
                            >
                                <div className='inline-flex gap-2 w-full h-full'>
                                    <AirVent className='self-center size-9' /><span className="text-sm font-medium self-center">Air Conditioner</span>
                                </div>

                            </div>

                            <div
                                className="w-full h-full"
                            >
                                <div className='inline-flex gap-2 w-full h-full'>
                                    <Tv className="self-center size-9" /><span className="text-sm font-medium self-center">Television</span>
                                </div>

                            </div>

                            <div
                                className="w-full h-full"
                            >
                                <div className='inline-flex gap-2 w-full h-full'>
                                    <Wifi className="self-center size-9" /><span className="text-sm font-medium self-center">Free Wi-fi</span>
                                </div>

                            </div>

                            <div
                                className="w-full h-full"
                            >
                                <div className='inline-flex gap-2 w-full h-full'>
                                    
                                    <div className='h-full flex justify-start items-start -ml-[6px]'><svg xmlns="http://www.w3.org/2000/svg" className='self-center' width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21V3h14v18zm1-1h12V4H6zm6-1.77q1.756 0 2.993-1.237T16.231 14t-1.238-2.993T12 9.769t-2.993 1.238T7.769 14t1.238 2.993T12 18.231m0-.931q-.65 0-1.253-.247t-1.059-.703l4.662-4.661q.456.455.703 1.062q.247.606.247 1.249q0 1.375-.962 2.338T12 17.3M8 7q.425 0 .713-.288T9 6t-.288-.712T8 5t-.712.288T7 6t.288.713T8 7m3 0q.425 0 .713-.288T12 6t-.288-.712T11 5t-.712.288T10 6t.288.713T11 7M6 20V4z" /></svg></div>
                                    <p className="text-sm font-medium self-center">Laundry</p>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>

                {/* Image Section */}
                <div className="relative">
                    <div className='lg:p-10'>
                        <img
                            src={IMAGES["7"]}
                            alt="The Family Suite"
                            className="w-full h-auto shadow-lg"
                        />
                        <div className="border px-4 py-2 mt-4 text-center text-gray-700 text-sm bg-white shadow">
                            <span className='font-semibold'>Elegant & Cozy Bedroom Retreat: </span>
                            Relax in a stylish bedroom with a plush king bed, warm lighting, and rich red accents. Large windows invite natural light, creating a serene retreat.
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default Allpackages;
