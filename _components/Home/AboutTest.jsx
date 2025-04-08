"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay styles
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module
import { ChevronLeft, ChevronRight, UserRound } from "lucide-react";
import IMAGES from "@/public";
import { motion, useInView } from 'framer-motion';


const AboutTest = () => {

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

  const packageReviews = [
    {
      title: "Perfect Family Getaway",
      description:
        "Naira Villa's was everything we hoped for – peaceful, beautiful, and well-maintained. The private pool, cozy rooms, and daily housekeeping made our stay super comfortable. A perfect escape for the whole family!",
      name: "Ankita Lokhande",
      tagline: "Family Vacationer",
      img: IMAGES["18"],
    },
    {
      title: "Romantic & Relaxing Stay",
      description:
        "We had such a romantic time at Naira Villa’s! The warm lighting, private balcony, and 24/7 food delivery added the perfect touch. The caretaker was always available and the villa felt like home.",
      name: "Ravi & Meera Shah",
      tagline: "Couple Traveller",
      img: IMAGES["19"],
    },
    {
      title: "Fun With Friends!",
      description:
        "Our group of friends had the best time here! Pool parties, chill evenings on the balcony, and movie nights with satellite TV. Highly recommend this villa for a fun getaway.",
      name: "Karan Malhotra",
      tagline: "Travel Enthusiast",
      img: IMAGES["20"],
    },
    {
      title: "Workation Bliss",
      description:
        "I stayed here while working remotely and loved the fast Wi-Fi, peaceful vibes, and supportive housekeeping staff. A great place to mix work and leisure.",
      name: "Sneha Deshmukh",
      tagline: "Remote Worker",
      img: IMAGES["21"],
    },
    {
      title: "Peaceful and Kid-Friendly",
      description:
        "Our kids loved the pool, and we appreciated the clean and spacious rooms. The staff was friendly and responsive, making our family stay smooth and enjoyable. Highly recommended for families!",
      name: "Rajeshwari Sharma",
      tagline: "Kids Friendly",
      img: IMAGES["22"],
    }
  ];

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" bg-[#efebe5]">
      <motion.div className="flex flex-col gap-8 lg:gap-10 justify-center items-center py-20 w-[95%] mx-auto" ref={ref}
        variants={fadeInVariant}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}>
        <h2 className="text-2xl lg:text-3xl text-gray-600 font-bold underline decoration-themeColor">
          Explore the Customer Feedback
        </h2>
        <p className="text-base lg:text-lg lg:w-[80%] text-center">
          Discover heartfelt stories and glowing reviews from guests who&apos;ve experienced the charm and comfort of Naira Villa&apos;s!
        </p>

        <div className="relative w-full lg:w-[80%] mx-auto flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-5 h-full">
          <div className="w-full h-auto ">
            <Swiper
              spaceBetween={20}
              slidesPerGroup={1}
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
              autoplay={{
                delay: 4000, // Auto-scroll delay in milliseconds
                disableOnInteraction: false, // Continue autoplay after interaction
              }}
              style={{
                "--swiper-navigation-size": "20px",
              }}
              modules={[Navigation, Autoplay]} // Include Autoplay module
              breakpoints={{
                0: { slidesPerView: 1.2 }, // 1 packageReviews[card] per view for mobile
                1024: { slidesPerView: 3 }, // 2 packageReviews[card]s per view for larger screens
              }}
              className="mySwiper relative"
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex); // Set active slide index
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              grabCursor={true}
              draggable={true}
              allowTouchMove={true}
            >
              {Object.keys(packageReviews)?.map((card, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`w-full h-72 md:h-80 rounded-lg bg-white border p-2 `}
                  >
                    <div className="p-4 flex flex-col justify-between items-center w-full h-full gap-5 lg:gap-10 ">
                      <div className="flex flex-col gap-5">
                        <p className={`font-semibold text-start w-full italic`}>
                          {packageReviews[card].tagline}
                        </p>
                        <p className="text-sm text-gray-600 line-clamp-5">
                          {packageReviews[card].description}
                        </p>
                      </div>

                      <div className="flex gap-5 items-center w-full">
                        <div className="w-16 h-16 rounded-full relative overflow-hidden">

                          <UserRound className="w-16 h-16 text-gray-500 bg-slate-200" />
                          {/* <Image
                            src={packageReviews[packageReviews[card]][0].image[0]}
                            alt={packageReviews[card]}
                            fill
                            className="w-full h-full object-cover"
                          /> */}
                        </div>
                        <h3 className="text-themeColor font-semibold ">
                          {packageReviews[card].name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden lg:flex absolute top-0 bottom-0 m-auto z-30 justify-between gap-5 w-full">
            <div className="flex justify-center items-center -translate-x-5">
              <button
                className={`swiper-prev p-2 rounded-full bg-gray-300 text-gray-500 ${isBeginning ? "opacity-50" : ""
                  }`}
                disabled={isBeginning}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="flex justify-center items-center translate-x-5">
              <button
                className={`swiper-next p-2 rounded-full bg-gray-300 text-gray-500 ${isEnd ? "opacity-50" : ""
                  }`}
                disabled={isEnd}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutTest;
