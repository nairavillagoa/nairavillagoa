'use client'
import IMAGES from "@/public";
import Image from "next/image";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, useInView } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "@/_components/Carousel.css"
import { EffectCoverflow, EffectFade, Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const HomeCards = () => {

    const abc = [1, 2, 3, 52, 53, 54, 55, 56, 57];

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
        <div>
            <div className=" w-full h-full bg-[#f4f1ed] flex justify-center items-center">
                <div className="w-full h-full bg-[#f4f1ed] flex gap-4 lg:gap-0 justify-center items-center flex-col lg:flex-row px-4 py-20 lg:px-32 lg:py-20">
                    <motion.div
                        ref={ref}
                        variants={fadeInVariant}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        className="w-[100%] lg:w-[50%]"
                    >
                        <p
                            className="text-4xl lg:text-6xl w-full lg:w-[100%]"
                            style={{ fontFamily: '"Playfair Display", serif' }}
                        >
                            Welcome to your luxurious home away from home
                        </p>
                        <p
                            className="mt-16 text-md w-full lg:w-[65%] text-red-800 font-semibold"
                            style={{ wordSpacing: '0.1em' }}
                        >
                            Best Villa in Saligao and Goa? Welcome to Naira Villa’s – Your Luxurious Getaway in Goa!
                            <br />
                            <br />
                            Experience comfort in our 3 BHK villa with a private pool in Saligao, North Goa. Enjoy AC bedrooms, a fully equipped kitchen, daily housekeeping, free WiFi, private parking, and 24/7 food delivery. Perfect for families & groups!
                        </p>
                    </motion.div>
                    <motion.div className="w-full lg:w-[50%] flex justify-center items-center" ref={ref}
                        variants={fadeInVariant}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}>
                        <Swiper

                            navigation={true}
                            // pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            speed={1000}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard, EffectCoverflow]}
                            className="mySwiper shadow-xl"

                        >
                            {Array.from({ length: 71 }).map((_, index) => {

                                console.log("Index::::>", abc.includes(index + 1) ? `true index: ${index}` : `false index: ${index}`)

                                return (
                                    abc.includes(index + 1) ? ""
                                        : <SwiperSlide className="" key={index}>
                                            <div className="relative w-full h-64 md:h-96 overflow-hidden">
                                                <Image
                                                    src={IMAGES[index + 1]}
                                                    alt={`slide `}
                                                    fill
                                                    style={{
                                                        objectFit: 'fill',
                                                    }}
                                                />
                                            </div>
                                        </SwiperSlide>

                                );
                            })}


                        </Swiper>
                    </motion.div>
                </div>
            </div>
        </div>

    );
};

export default HomeCards;
