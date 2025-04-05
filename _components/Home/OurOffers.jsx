'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import IMAGES from '@/public/index'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from "lucide-react";

const OurOffers = () => {



  return (
    <section className="bg-[#f4f1ed] py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-[30%]">
          <div className='w-full h-full'>
            <img
              src={IMAGES["48"]}
              alt="The Family Suite"
              className="w-full h-[30rem] object-cover shadow-lg"
            />
            <div className="border px-4 py-2 mt-4 text-center text-gray-700 text-sm bg-white shadow">
            <p><span className='font-semibold'>Elegant Dining Space: </span>
            Dine in style with a wooden table, emerald chairs, and warm decor in a cozy, inviting ambiance.</p>








            </div>
          </div>

        </div>

        {/* Image Section */}
        <div className="relative w-[70%]">
          <div className='w-full h-full'>
            <img
              src={IMAGES["3"]}
              alt="The Family Suite"
              className="w-full h-[30rem] object-cover shadow-lg"
            />
            <div className="border flex px-4 py-2 h-20 mt-4 text-center justify-center items-center text-gray-700 text-sm bg-white shadow">
              <p><span className='font-semibold'>Modern & Stylish Bathroom: </span>
              Experience luxury in our elegantly designed bathroom, featuring a spacious shower area, sleek vanity, and contemporary fixtures. The blend of marble and textured blue tiles adds a sophisticated touch, while the well-lit mirror and thoughtful details create a refreshing and relaxing ambiance.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurOffers;
