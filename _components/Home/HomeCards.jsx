import IMAGES from "@/public";
import Image from "next/image";
import React from "react";

const HomeCards = () => {

    return (
        <div className="w-full h-full bg-[#f4f1ed] flex justify-center items-center">
            <div className="w-full h-full bg-[#f4f1ed] flex justify-center items-center flex-row px-32 py-20">
                <div className="w-[60%]">
                    <p className="text-6xl w-[80%]" style={{ fontFamily: '"Playfair Display", serif' }}>Welcome to your luxurious home away from home </p>
                    <p className="mt-16 text-md w-[65%] text-red-800 font-semibold" style={{ wordSpacing: '0.1em' }}>Welcome to Naira Villa’s – Your Luxurious Getaway in Goa!

                    Experience comfort in our 3 BHK villa with a private pool in Saligao, North Goa. Enjoy AC bedrooms, a fully equipped kitchen, daily housekeeping, free WiFi, private parking, and 24/7 food delivery. Perfect for families & groups!</p>
                </div>
                <div className="w-[40%] flex justify-center items-center">
                    <Image 
                        src={IMAGES["72"]}
                        alt="new image"
                        height={800}
                        width={800}
                        className="object-cover w-[70%] h-[28rem]"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeCards;
