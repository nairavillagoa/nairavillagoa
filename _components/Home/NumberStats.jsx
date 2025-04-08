'use client'
import React, { useState, useEffect, useRef } from 'react';
import IMAGES from '@/public';
import { motion, useInView } from 'framer-motion';

const NumberStats = () => {

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
        <div className="w-full h-full flex flex-col justify-center items-center bg-[#efebe5] py-16 lg:px-16 lg:py-16">
            <h2 className="text-4xl md-text-5xl lg:text-6xl text-center mb-6 border-b-2 pb-2" style={{ fontFamily: '"Playfair Display", serif' }}>Accommodations</h2>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full" ref={ref}
                        variants={fadeInVariant}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}>


                {/* New 03 AC Bedrooms */}
                <div className="border p-4">
                    <img src={IMAGES["20"]} alt="03 AC Bedrooms" className="w-full h-60 object-cover" />
                    <div className='border border-black flex flex-col px-2 py-4 mt-4'>
                        <p className="text-sm">A spacious and beautifully designed bedroom with luxurious bedding, warm lighting, and elegant wooden decor. Enjoy a relaxing stay with a cozy ambiance and direct access to the private balcony.</p>
                        {/* <h3 className="text-xl font-semibold mt-4">A spacious and beautifully designed bedroom with luxurious bedding, warm lighting, and elegant wooden decor. Enjoy a relaxing stay with a cozy ambiance and direct access to the private balcony.</h3>
                        <p className="text-sm text-gray-500 mt-1">A spacious and beautifully designed bedroom with luxurious bedding, warm lighting, and elegant wooden decor. Enjoy a relaxing stay with a cozy ambiance and direct access to the private balcony.</p> */}
                    </div>

                </div>

                {/* New 03 AC Bedrooms */}
                <div className="border p-4">
                    <img src={IMAGES["23"]} alt="03 AC Bedrooms" className="w-full h-60 object-cover" />
                    <div className='border border-black flex flex-col px-2 py-4 mt-4'>
                        <p className="text-sm">Wake up to refreshing poolside views in this comfortable and stylish bedroom. With plush pillows, soft lighting, and contemporary furnishings, this room offers a perfect mix of relaxation and convenience.</p>
                        {/* <h3 className="text-xl font-semibold mt-4">03 AC Bedrooms</h3>
                        <p className="text-sm text-gray-500 mt-1">from $499 a night</p> */}
                    </div>
                </div>

                {/* New 03 AC Bedrooms */}
                <div className="border p-4">
                    <img src={IMAGES["16"]} alt="03 AC Bedrooms" className="w-full h-60 object-cover" />
                    <div className='border border-black flex flex-col px-2 py-4 mt-4'>
                        <p className="text-sm">This bright and airy bedroom features natural tones, minimalist decor, and a peaceful garden view. A perfect retreat for those who love a touch of nature and serenity during their stay.</p>
                        {/* <h3 className="text-xl font-semibold mt-4">03 AC Bedrooms</h3>
                        <p className="text-sm text-gray-500 mt-1">from $499 a night</p> */}
                    </div>
                </div>

            </motion.div>
        </div>

    );
};

export default NumberStats;
