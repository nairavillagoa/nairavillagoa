import IMAGES from "@/public";
import Image from "next/image";
import React from "react";

const HomeCards = () => {

    return (
        <div className="w-full h-full bg-[#f4f1ed] flex justify-center items-center">
            <div className="w-full h-full bg-[#f4f1ed] flex gap-4 lg:gap-0 justify-center items-center flex-col lg:flex-row px-4 py-20 lg:px-32 lg:py-20">
                <div className="w-[100%] lg:w-[60%]">
                    <p className="text-4xl lg:text-6xl w-full lg:w-[80%]" style={{ fontFamily: '"Playfair Display", serif' }}>Welcome to your luxurious home away from home </p>
                    <p className="mt-16 text-md w-full lg:w-[65%] text-red-800 font-semibold" style={{ wordSpacing: '0.1em' }}>Welcome to Naira Villa’s – Your Luxurious Getaway in Goa!

                    Experience comfort in our 3 BHK villa with a private pool in Saligao, North Goa. Enjoy AC bedrooms, a fully equipped kitchen, daily housekeeping, free WiFi, private parking, and 24/7 food delivery. Perfect for families & groups!</p>
                </div>
                <div className="w-full lg:w-[40%] flex justify-center items-center">
                    <Image 
                        src={IMAGES["72"]}
                        alt="new image"
                        height={800}
                        width={800}
                        className="object-fill w-full h-[20%] lg:object-cover lg:w-[70%] lg:h-[28rem]"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeCards;
