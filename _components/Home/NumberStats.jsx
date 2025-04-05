'use client'
import React, { useState, useEffect, useRef } from 'react';
import IMAGES from '@/public';

const NumberStats = () => {


    return (
        <div className="w-full h-full flex flex-col justify-center items-center bg-[#efebe5] px-16 py-16">
            <h2 className="text-6xl text-center mb-6 border-b-2 pb-2" style={{ fontFamily: '"Playfair Display", serif' }}>Accommodations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">


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

            </div>
        </div>

    );
};

export default NumberStats;
