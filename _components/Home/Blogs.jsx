'use client'
import React from 'react'
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import IMAGES from '@/public';
import "@/styles/landing.css";
import { AirVent, Tv, Wifi, HandHeart, CircleParking, Refrigerator } from 'lucide-react';

const Blogs = () => {

    return (
        <div className='bg-[#f4f1ed]'>

<div className="hidden relative w-full h-[40vh] md:h-[45vh] lg:h-[60vh] min-h-screen lg:flex justify-center items-center">
            {/* Background Image */}
            <img
                src={IMAGES["59"]}
                alt="landing-bg"
                className="w-full h-full object-cover"
            />

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Content Section */}
            <div className="w-full h-[70vh] md:h-[80vh] lg:h-[90vh] py-10 lg:p-0 flex flex-col justify-center items-center absolute z-10 gap-14">
                {/* Title */}
                <div className="w-full flex justify-center items-center mt-8">
                    <h1 className="text-white text-4xl md:text-5xl" style={{ fontFamily: '"Playfair Display", serif' }}>
                        Facilities You Get
                    </h1>
                </div>
                <div className="relative w-full lg:w-[80%] flex justify-center items-center h-[100%] flex-col">

                    <div className="flex flex-col gap-4 md:gap-8 lg:gap-3 justify-start items-start w-full h-full">

    



                        {/* ICONS */}
                        <div className="grid grid-cols-3 lg:grid-cols-5 justify-evenly items-center w-full text-white text-opacity-80 gap-12">
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <AirVent className='self-center size-12' />
                                </div>
                                <div>
                                    <span className="text-sm font-semibold self-center">Air Conditioner</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-waves-ladder-icon lucide-waves-ladder self-center"><path d="M19 5a2 2 0 0 0-2 2v11" /><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M7 13h10" /><path d="M7 9h10" /><path d="M9 5a2 2 0 0 0-2 2v11" /></svg>
                                </div>
                                <div>
                                    <span className="text-sm font-semibold self-center">Swimming Pool</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='self-center' width="42" height="42" viewBox="0 0 24 24"><path fill="currentColor" d="M8.042 14.227h2.534a.23.23 0 0 1 .23.23v1.737a.23.23 0 0 1-.23.23H8.042a.23.23 0 0 1-.23-.23v-1.737a.23.23 0 0 1 .23-.23m-1.13 5.825a32 32 0 0 0 4.931.3a32 32 0 0 0 4.963-.3a.726.726 0 0 0 .615-.769v-.266h-11.3v.255a.885.885 0 0 0 .791.78m10.509-17.83h-.728A47 47 0 0 0 11.95 2c-2.833 0-4.843.161-5.495.221h-.334v16.494h11.3zM12.2 9.5v-.151c1.781 0 3.585.38 3.585 1.106s-1.8 1.091-3.588 1.091s-3.585-.375-3.585-1.091s1.8-1.106 3.585-1.106V9.5Zm-1.627 4.424a.534.534 0 0 1 .533.534v1.736a.533.533 0 0 1-.533.533h-2.53a.534.534 0 0 1-.534-.533v-1.736a.535.535 0 0 1 .534-.534zm9.254 4.67V4.224l-2.04-1.889l-.063-.006v16.386h2.1v-.121zM5.818 2.7L4.173 4.215v14.5h1.646zm11.906 16.573a1.03 1.03 0 0 1-.875 1.08a32.6 32.6 0 0 1-5.006.3h-.535a32 32 0 0 1-4.432-.309a1.19 1.19 0 0 1-1.057-1.065v-.27H4.178C4.241 21.611 5.03 22 11.949 22c6.953 0 7.8-.427 7.872-2.982h-2.1z" className="cls-1" /></svg>
                                </div>
                                <div>
                                    <span className="text-sm font-medium self-center">Inverter Power Backup</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <Tv className="self-center size-10" />
                                </div>
                                <div>
                                    <span className="text-sm font-medium self-center">Television</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <Wifi className="self-center size-10" />
                                </div>
                                <div>
                                    <span className="text-sm font-medium self-center">Free Wifi</span>
                                </div>
                            </div>
                            {/* <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='self-center' width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21V3h14v18zm1-1h12V4H6zm6-1.77q1.756 0 2.993-1.237T16.231 14t-1.238-2.993T12 9.769t-2.993 1.238T7.769 14t1.238 2.993T12 18.231m0-.931q-.65 0-1.253-.247t-1.059-.703l4.662-4.661q.456.455.703 1.062q.247.606.247 1.249q0 1.375-.962 2.338T12 17.3M8 7q.425 0 .713-.288T9 6t-.288-.712T8 5t-.712.288T7 6t.288.713T8 7m3 0q.425 0 .713-.288T12 6t-.288-.712T11 5t-.712.288T10 6t.288.713T11 7M6 20V4z" /></svg>
                                </div>
                                <div>
                                    <span className="text-sm font-medium self-center">Laundry at Extra Charge</span>
                                </div>
                            </div> */}
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M20 22.002v-5.974c0-.95 0-1.423-.158-1.797a2 2 0 0 0-1.046-1.055c-.373-.162-.847-.166-1.796-.174c0 5-5 7-5 7s-5-2-5-7c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C4 14.604 4 15.07 4 16.002v6" /><path d="m12 13.5l2-1v2zm0 0l-2-1v2zm3.5-7v-1a3.5 3.5 0 1 0-7 0v1a3.5 3.5 0 1 0 7 0" /></g></svg>
                                </div>
                                <div>
                                    <span className="text-sm font-medium self-center">Housekeeping Team</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <HandHeart className='self-center size-12' />
                                </div>
                                <div>
                                    <span className="text-sm font-medium self-center">Caretaker Assistance</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M9 0C7.3 0 6 1.3 6 3s1.3 3 3 3c1.3 0 2.4-.8 2.8-2H14v2h2V4h2V2h-6.2C11.4.8 10.3 0 9 0m0 2c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1M6.5 8c-.7 0-1.2.4-1.4 1L3 15v8c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1h12v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-8l-2.1-6c-.2-.6-.8-1-1.4-1zm0 1.5h11L19 14H5zm0 6.5c.8 0 1.5.7 1.5 1.5S7.3 19 6.5 19S5 18.3 5 17.5S5.7 16 6.5 16m11 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"/></svg>
                                </div>
                                <div>
                                    <span className="text-sm font-medium self-center">Car & Bike Rental At Extra Pay</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1408 592q-26 0-45-19t-19-45q0-51 19-98t56-83l79-80q38-38 38-91q0-26 19-45t45-19t45 19t19 45q0 51-19 98t-56 83l-79 80q-38 38-38 91q0 26-19 45t-45 19m-384 0q-26 0-45-19t-19-45q0-51 19-98t56-83l79-80q38-38 38-91q0-26 19-45t45-19t45 19t19 45q0 51-19 98t-56 83l-79 80q-38 38-38 91q0 26-19 45t-45 19m832 176q40 0 75 15t61 41t41 61t15 75v384q0 40-15 75t-41 61t-61 41t-75 15h-57q-2 7-3 13t-4 12v39q0 66-25 124t-69 102t-102 69t-124 25h-384q-78 0-144-35t-110-93H334q-66 0-124-25t-102-68t-69-102t-25-125v-64h256q0-79 30-149t83-122t122-83t149-30q30 0 58 5t56 14V640h1024v128zM654 1152q-53 0-99 20t-82 55t-55 81t-20 100h370v-228q-26-13-54-20t-60-8m-320 512h441q-7-29-7-64v-64H153q10 28 28 51t41 41t52 26t60 10m463 67v1l1 2v-1zm867-131V768H896v832q0 40 15 75t41 61t61 41t75 15h384q40 0 75-15t61-41t41-61t15-75m256-256V960q0-26-19-45t-45-19h-64v512h64q26 0 45-19t19-45"/></svg>
                                </div>
                                <div>
                                    <span className="text-sm font-medium self-center">Breakfast at 300 Per Plate</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <CircleParking className='self-center size-12' />
                                 
                                </div>
                                <div>
                                    <span className="text-sm font-medium self-center">Private Parking</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M8 12v-2h2v2zm6 0v-2h2v2zM3 22v-8h1v-4q0-1.65.625-3.113t1.713-2.55t2.55-1.712T12 2t3.113.625t2.55 1.713t1.712 2.55T20 10v4h1v8zm2-2h2v-4H5zm4 0h2v-4H9zm-3-6h5V4.075q-2.15.35-3.575 2.012T6 10zm7 0h5v-4q0-2.25-1.425-3.912T13 4.075zm0 6h2v-4h-2zm4 0h2v-4h-2z"/></svg>
                                </div>
                                <div>
                                    <span className="text-sm font-medium self-center">Balconies</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <Refrigerator className='self-center size-12' />
                                </div>
                                <div>
                                    <span className="text-sm font-medium self-center">Refrigerator</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M7 20q-1.25 0-2.125-.875T4 17H1.5l.45-2h2.825q.425-.475 1-.737T7 14t1.225.263t1 .737H13.4l2.1-9H4.55l.1-.425q.15-.7.687-1.137T6.6 4H18l-.925 4H20l3 4l-1 5h-2q0 1.25-.875 2.125T17 20t-2.125-.875T14 17h-4q0 1.25-.875 2.125T7 20m8.925-7h4.825l.1-.525L19 10h-2.375zm-.475-6.825L15.5 6l-2.1 9l.05-.175l.85-3.65zM.5 13.325l.5-2h5.5l-.5 2zm2-3.65l.5-2h6.5l-.5 2zM7 18q.425 0 .713-.288T8 17t-.288-.712T7 16t-.712.288T6 17t.288.713T7 18m10 0q.425 0 .713-.288T18 17t-.288-.712T17 16t-.712.288T16 17t.288.713T17 18"/></svg>
                                </div>
                                <div className=''>
                                    <span className="text-sm font-medium flex text-center">Home delivery food available on Order 24/7</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <svg viewBox="0 0 1024 1024" className="icon size-12 opacity-80" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M475.500089 922.669511H88.314311V364.839822a60.381867 60.381867 0 0 1 60.381867-60.381866h266.422044a60.381867 60.381867 0 0 1 60.381867 60.381866v286.867911" fill="#ffffff"></path><path d="M233.801956 304.457956h-85.105778a60.393244 60.393244 0 0 0-60.393245 60.381866v557.818311h85.0944V364.839822a60.404622 60.404622 0 0 1 60.404623-60.381866z" fill="#ffffff"></path><path d="M764.689067 805.0688H344.234667a68.516978 68.516978 0 0 1-1.695289-15.1552c0-13.152711 3.7888-25.440711 10.296889-35.794489l196.949333-31.561955h137.193244l77.710223 82.511644z" fill="#ffffff"></path><path d="M686.967467 805.0688H309.6576v29.627733a87.972978 87.972978 0 0 0 87.972978 87.972978h339.592533" fill="#ffffff"></path><path d="M397.118578 834.685156v-29.627734H309.6576v29.627734a87.972978 87.972978 0 0 0 87.972978 87.972977h87.4496a87.950222 87.950222 0 0 1-87.9616-87.972977z" fill="#ffffff"></path><path d="M931.134578 363.997867v558.671644h-244.167111V363.997867a49.857422 49.857422 0 0 1 49.857422-49.846045h144.463644a49.857422 49.857422 0 0 1 49.846045 49.846045z" fill="#ffffff"></path><path d="M802.338133 314.151822H736.824889a49.857422 49.857422 0 0 0-49.857422 49.857422v558.660267h65.501866V364.009244a49.857422 49.857422 0 0 1 49.8688-49.857422z" fill="#ffffff"></path><path d="M931.134578 363.997867v126.714311h-244.167111V363.997867a49.857422 49.857422 0 0 1 49.857422-49.846045h144.463644a49.857422 49.857422 0 0 1 49.846045 49.846045z" fill="#ffffff"></path><path d="M802.326756 314.151822a49.857422 49.857422 0 0 0-49.857423 49.857422V490.723556h-65.513244V364.009244a49.880178 49.880178 0 0 1 49.8688-49.857422h65.501867z" fill="#ffffff"></path><path d="M165.000533 211.330844h233.813334v93.127112h-233.813334z" fill="#ffffff"></path><path d="M165.000533 211.330844h72.715378v93.127112h-72.715378z" fill="#ffffff"></path><path d="M224.4608 78.574933h114.926933v132.755911H224.4608z" fill="#ffffff"></path><path d="M224.4608 78.574933h57.457778v132.755911h-57.457778z" fill="#ffffff"></path><path d="M517.0176 677.410133a34.133333 34.133333 0 0 0-17.373867 4.744534 45.101511 45.101511 0 0 0-69.927822-26.794667 34.451911 34.451911 0 0 0-32.233244-22.402844 34.440533 34.440533 0 0 0-34.315378 31.709866 45.090133 45.090133 0 0 0-52.986311 44.396089 45.090133 45.090133 0 0 0 73.568711 34.963911 34.417778 34.417778 0 0 0 53.111467-10.843022 45.078756 45.078756 0 0 0 48.7424-7.236267 34.451911 34.451911 0 1 0 31.414044-48.5376z" fill="#ffffff"></path><path d="M88.314311 811.337956c8.203378 0 14.859378-6.667378 14.859378-14.870756V364.839822a45.579378 45.579378 0 0 1 45.522489-45.522489h266.422044a45.568 45.568 0 0 1 45.522489 45.522489v240.423822a14.859378 14.859378 0 1 0 29.718756 0V364.839822a75.332267 75.332267 0 0 0-75.252623-75.241244h-1.444977v-78.267734c0-8.214756-6.644622-14.859378-14.859378-14.859377h-44.578133v-60.893867h101.558044c4.801422 0 8.715378 3.913956 8.715378 8.715378v6.144a14.859378 14.859378 0 1 0 29.718755 0v-6.144a38.479644 38.479644 0 0 0-38.434133-38.434134h-101.558044V78.574933c0-8.203378-6.644622-14.859378-14.848-14.859377H224.449422c-8.214756 0-14.859378 6.644622-14.859378 14.859377v117.896534h-44.589511c-8.214756 0-14.859378 6.644622-14.859377 14.859377v78.267734h-1.444978a75.343644 75.343644 0 0 0-75.252622 75.252622v431.627378c0.011378 8.192 6.667378 14.859378 14.870755 14.859378zM239.3088 93.434311h85.1968v103.037156h-85.1968V93.434311zM179.871289 226.190222h204.094578v63.408356H179.871289V226.190222zM881.277156 299.292444H736.824889a64.785067 64.785067 0 0 0-64.7168 64.7168v543.789512H525.038933a14.870756 14.870756 0 0 0 0 29.741511h406.084267c8.214756 0 14.870756-6.667378 14.870756-14.870756V623.104a14.859378 14.859378 0 1 0-29.730134 0v284.694756H701.826844V505.582933h50.642489a14.859378 14.859378 0 1 0 0-29.718755h-50.642489v-111.843556a35.043556 35.043556 0 0 1 34.998045-34.998044h144.452267a35.043556 35.043556 0 0 1 34.998044 34.998044v111.843556H801.9968a14.859378 14.859378 0 0 0 0 29.718755h114.2784v64.022756a14.870756 14.870756 0 1 0 29.730133 0v-205.596445a64.785067 64.785067 0 0 0-64.728177-64.7168z" fill=""></path><path d="M475.500089 907.798756h-77.869511a73.193244 73.193244 0 0 1-73.1136-73.1136v-14.756978h314.424889a14.859378 14.859378 0 1 0 0-29.730134H357.398756v-0.295822c0-7.3728 1.547378-14.620444 4.5056-21.265066a59.926756 59.926756 0 0 0 21.890844-6.849423 49.243022 49.243022 0 0 0 58.948267-11.025066 59.869867 59.869867 0 0 0 38.957511-4.516978 49.322667 49.322667 0 0 0 35.316622 14.927644 49.379556 49.379556 0 0 0 42.1888-23.779555h79.746844a14.848 14.848 0 1 0 0-29.718756H566.158222a49.379556 49.379556 0 0 0-57.856-44.361955 59.619556 59.619556 0 0 0-52.599466-31.072711c-7.042844 0-13.9264 1.206044-20.411734 3.561244a49.504711 49.504711 0 0 0-37.796978-17.726578c-20.502756 0-38.468267 12.856889-45.784177 31.118222a60.017778 60.017778 0 0 0-56.388267 59.847112 60.074667 60.074667 0 0 0 36.511289 55.1936 82.090667 82.090667 0 0 0-4.152889 25.656888l0.011378 0.295823h-18.0224c-8.203378 0-14.859378 6.656-14.859378 14.859377v29.627734a102.559289 102.559289 0 0 0 30.606222 73.124978H103.173689v-61.815467a14.859378 14.859378 0 1 0-29.718756 0v76.663467c0 8.214756 6.644622 14.870756 14.859378 14.870755h387.185778a14.870756 14.870756 0 0 0 0-29.718755zM355.259733 678.820978c1.729422 0 3.527111 0.170667 5.313423 0.489244 4.118756 0.728178 8.362667-0.318578 11.6736-2.889955a14.791111 14.791111 0 0 0 5.723022-10.581334 19.649422 19.649422 0 0 1 19.501511-18.0224c8.112356 0 15.473778 5.12 18.3296 12.743111a14.870756 14.870756 0 0 0 22.482489 6.929067c5.12-3.606756 11.138844-5.518222 17.396622-5.518222 14.199467 0 26.3168 9.659733 29.468444 23.472355a14.882133 14.882133 0 0 0 22.004623 9.5232c3.060622-1.786311 6.371556-2.696533 9.864533-2.696533 10.797511 0 19.603911 8.783644 19.603911 19.592533s-8.795022 19.603911-19.603911 19.603912c-7.691378 0-14.700089-4.551111-17.863111-11.605334a14.836622 14.836622 0 0 0-23.415467-5.0176 30.162489 30.162489 0 0 1-32.6656 4.846934 14.859378 14.859378 0 0 0-19.501511 6.8608 19.501511 19.501511 0 0 1-30.185244 6.189511 14.848 14.848 0 0 0-19.023645-0.216178 29.923556 29.923556 0 0 1-19.091911 6.792533 30.276267 30.276267 0 0 1-30.242133-30.242133 30.264889 30.264889 0 0 1 30.230755-30.253511z" fill=""></path></g></svg>
                                </div>
                                <div>
                                    <span className="text-sm font-medium self-center">Toiletries</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="m10.506 15.009l6.634-4.511q.283-.211.497-.488c.485-.63.476-1.506.168-2.238A4.55 4.55 0 0 0 13.6 5c-.936 0-1.806.279-2.529.757l-7.08 5"/><path d="M5.995 13.506c0 .696.369 2.08 2.04 2.46c1.007.228 3.938-.736 2.504-3.528s-4.887-2.806-6.292-1.87c-.859.52-2.526 2.148-2.21 4.311c.113 1.31 1.145 3.97 4.375 4.122h9.892c.922-.073 1.112-.207 1.814-.745c.945-.848 2.522-2.408 3.439-3.435c.198-.221.411-.45.439-.746v0c.145-1.576-2.247-.893-3.98-1.081"/></g></svg>
                                </div>
                                <div>
                                    <span className="text-sm font-medium flex text-center">Extra Mattress for Extra Person</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M9 18q.425 0 .713-.288T10 17t-.288-.712T9 16t-.712.288T8 17t.288.713T9 18m3 0q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m3 0q.425 0 .713-.288T16 17t-.288-.712T15 16t-.712.288T14 17t.288.713T15 18m-6-3q.425 0 .713-.288T10 14t-.288-.712T9 13t-.712.288T8 14t.288.713T9 15m3 0q.425 0 .713-.288T13 14t-.288-.712T12 13t-.712.288T11 14t.288.713T12 15m3 0q.425 0 .713-.288T16 14t-.288-.712T15 13t-.712.288T14 14t.288.713T15 15m-8-3h10v-1q0-2.075-1.463-3.537T12 6T8.463 7.463T7 11zm1.55-1.5q.2-1.275 1.163-2.137T12 7.5t2.288.863T15.45 10.5zM2 22V2h20v20zm2-2h16V4H4zm0 0V4z"/></svg>
                                </div>
                                <div>
                                    <span className="text-sm font-medium flex text-center">02 Attached Bathrooms and 01 Common Bathroom</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 15.5h11v.75q0 .325.213.538t.537.212t.538-.213t.212-.537v-3.1q0-.525-.2-.987t-.55-.813V9q0-.825-.587-1.412T16.25 7H13q-.275 0-.525.075T12 7.3q-.225-.15-.475-.225T11 7H7.75q-.825 0-1.412.588T5.75 9v2.35q-.35.35-.55.813t-.2.987v3.1q0 .325.213.538T5.75 17t.538-.213t.212-.537zm0-1.5v-1q0-.425.288-.712T7.5 12h9q.425 0 .713.288T17.5 13v1zm.75-3.5v-2h4v2zm5.5 0v-2h4v2zM4 22q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v16q0 .825-.587 1.413T20 22zm0-2h16V4H4zm0 0V4z"/></svg>
                                </div>
                                <div>
                                    <span className="text-sm font-medium self-center">03 AC Bedrooms</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M21 9V7c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78c-.53-.48-1.23-.78-2-.78H6C4.35 4 3 5.35 3 7v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3v2h2v-2h14v2h2v-2c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3m-7-3h4c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2h-5V7c0-.55.45-1 1-1M5 7c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v7H6v-2c0-.88-.39-1.67-1-2.22zm17 10c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h16v-4c0-.55.45-1 1-1s1 .45 1 1z"/></svg>
                                </div>
                                <div>
                                    <span className="text-sm font-medium self-center text-center">02 AC Living Room</span>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </div>


        <div className="lg:hidden relative w-full h-full min-h-screen flex justify-start items-start mt-16 bg-[#f4f1ed]">
            {/* Background Image */}
            <img
                src={IMAGES["59"]}
                alt="landing-bg"
                className="w-full h-[100vh] object-cover"
            />

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Content Section */}
            <div className="w-full h-full py-20 px-4 flex flex-col justify-center items-center absolute z-10 gap-10">
                {/* Title */}
                <div className="w-full flex justify-center items-center">
                    <h1 className="text-white text-3xl" style={{ fontFamily: '"Playfair Display", serif' }}>
                        Facilities You Get
                    </h1>
                </div>
                <div className="relative w-full flex justify-center items-center h-[100%] flex-col">

                    <div className="flex flex-col gap-4 justify-start items-start w-full h-full">

    
                        {/* ICONS */}
                        <div className="grid grid-cols-3 justify-evenly items-center w-full text-white text-opacity-80 gap-5">
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <AirVent className='self-center size-8' />
                                </div>
                                <div>
                                    <span className="text-xs font-semibold self-center text-center">Air Conditioner</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-waves-ladder-icon lucide-waves-ladder self-center"><path d="M19 5a2 2 0 0 0-2 2v11" /><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M7 13h10" /><path d="M7 9h10" /><path d="M9 5a2 2 0 0 0-2 2v11" /></svg>
                                </div>
                                <div>
                                    <span className="text-xs font-semibold self-center">Swimming Pool</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='self-center' width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M8.042 14.227h2.534a.23.23 0 0 1 .23.23v1.737a.23.23 0 0 1-.23.23H8.042a.23.23 0 0 1-.23-.23v-1.737a.23.23 0 0 1 .23-.23m-1.13 5.825a32 32 0 0 0 4.931.3a32 32 0 0 0 4.963-.3a.726.726 0 0 0 .615-.769v-.266h-11.3v.255a.885.885 0 0 0 .791.78m10.509-17.83h-.728A47 47 0 0 0 11.95 2c-2.833 0-4.843.161-5.495.221h-.334v16.494h11.3zM12.2 9.5v-.151c1.781 0 3.585.38 3.585 1.106s-1.8 1.091-3.588 1.091s-3.585-.375-3.585-1.091s1.8-1.106 3.585-1.106V9.5Zm-1.627 4.424a.534.534 0 0 1 .533.534v1.736a.533.533 0 0 1-.533.533h-2.53a.534.534 0 0 1-.534-.533v-1.736a.535.535 0 0 1 .534-.534zm9.254 4.67V4.224l-2.04-1.889l-.063-.006v16.386h2.1v-.121zM5.818 2.7L4.173 4.215v14.5h1.646zm11.906 16.573a1.03 1.03 0 0 1-.875 1.08a32.6 32.6 0 0 1-5.006.3h-.535a32 32 0 0 1-4.432-.309a1.19 1.19 0 0 1-1.057-1.065v-.27H4.178C4.241 21.611 5.03 22 11.949 22c6.953 0 7.8-.427 7.872-2.982h-2.1z" className="cls-1" /></svg>
                                </div>
                                <div>
                                    <span className="text-xs font-medium flex self-center text-center">Inverter Power Backup</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <Tv className="self-center size-8" />
                                </div>
                                <div>
                                    <span className="text-xs font-medium self-center">Television</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <Wifi className="self-center size-8" />
                                </div>
                                <div>
                                    <span className="text-xs font-medium self-center">Free Wifi</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='self-center' width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21V3h14v18zm1-1h12V4H6zm6-1.77q1.756 0 2.993-1.237T16.231 14t-1.238-2.993T12 9.769t-2.993 1.238T7.769 14t1.238 2.993T12 18.231m0-.931q-.65 0-1.253-.247t-1.059-.703l4.662-4.661q.456.455.703 1.062q.247.606.247 1.249q0 1.375-.962 2.338T12 17.3M8 7q.425 0 .713-.288T9 6t-.288-.712T8 5t-.712.288T7 6t.288.713T8 7m3 0q.425 0 .713-.288T12 6t-.288-.712T11 5t-.712.288T10 6t.288.713T11 7M6 20V4z" /></svg>
                                </div>
                                <div>
                                    <span className="text-xs font-medium flex self-center text-center">Laundry at Extra Charge</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M20 22.002v-5.974c0-.95 0-1.423-.158-1.797a2 2 0 0 0-1.046-1.055c-.373-.162-.847-.166-1.796-.174c0 5-5 7-5 7s-5-2-5-7c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C4 14.604 4 15.07 4 16.002v6" /><path d="m12 13.5l2-1v2zm0 0l-2-1v2zm3.5-7v-1a3.5 3.5 0 1 0-7 0v1a3.5 3.5 0 1 0 7 0" /></g></svg>
                                </div>
                                <div>
                                    <span className="text-xs font-medium flex self-center text-center">Housekeeping Team</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <HandHeart className='self-center size-8' />
                                </div>
                                <div>
                                    <span className="text-xs font-medium flex self-center text-center">Caretaker Assistance</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M9 0C7.3 0 6 1.3 6 3s1.3 3 3 3c1.3 0 2.4-.8 2.8-2H14v2h2V4h2V2h-6.2C11.4.8 10.3 0 9 0m0 2c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1M6.5 8c-.7 0-1.2.4-1.4 1L3 15v8c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1h12v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-8l-2.1-6c-.2-.6-.8-1-1.4-1zm0 1.5h11L19 14H5zm0 6.5c.8 0 1.5.7 1.5 1.5S7.3 19 6.5 19S5 18.3 5 17.5S5.7 16 6.5 16m11 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"/></svg>
                                </div>
                                <div>
                                    <span className="text-xs font-medium flex self-center text-center">Car & Bike Rental At Extra Pay</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1408 592q-26 0-45-19t-19-45q0-51 19-98t56-83l79-80q38-38 38-91q0-26 19-45t45-19t45 19t19 45q0 51-19 98t-56 83l-79 80q-38 38-38 91q0 26-19 45t-45 19m-384 0q-26 0-45-19t-19-45q0-51 19-98t56-83l79-80q38-38 38-91q0-26 19-45t45-19t45 19t19 45q0 51-19 98t-56 83l-79 80q-38 38-38 91q0 26-19 45t-45 19m832 176q40 0 75 15t61 41t41 61t15 75v384q0 40-15 75t-41 61t-61 41t-75 15h-57q-2 7-3 13t-4 12v39q0 66-25 124t-69 102t-102 69t-124 25h-384q-78 0-144-35t-110-93H334q-66 0-124-25t-102-68t-69-102t-25-125v-64h256q0-79 30-149t83-122t122-83t149-30q30 0 58 5t56 14V640h1024v128zM654 1152q-53 0-99 20t-82 55t-55 81t-20 100h370v-228q-26-13-54-20t-60-8m-320 512h441q-7-29-7-64v-64H153q10 28 28 51t41 41t52 26t60 10m463 67v1l1 2v-1zm867-131V768H896v832q0 40 15 75t41 61t61 41t75 15h384q40 0 75-15t61-41t41-61t15-75m256-256V960q0-26-19-45t-45-19h-64v512h64q26 0 45-19t19-45"/></svg>
                                </div>
                                <div>
                                    <span className="text-xs font-medium flex self-center text-center">Breakfast at 300 Per Plate</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <CircleParking className='self-center size-8' />
                                 
                                </div>
                                <div>
                                    <span className="text-xs font-medium flex self-center text-center">Private Parking</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M8 12v-2h2v2zm6 0v-2h2v2zM3 22v-8h1v-4q0-1.65.625-3.113t1.713-2.55t2.55-1.712T12 2t3.113.625t2.55 1.713t1.712 2.55T20 10v4h1v8zm2-2h2v-4H5zm4 0h2v-4H9zm-3-6h5V4.075q-2.15.35-3.575 2.012T6 10zm7 0h5v-4q0-2.25-1.425-3.912T13 4.075zm0 6h2v-4h-2zm4 0h2v-4h-2z"/></svg>
                                </div>
                                <div>
                                    <span className="text-xs font-medium flex self-center text-center">Balconies</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <Refrigerator className='self-center size-8' />
                                </div>
                                <div>
                                    <span className="text-xs font-medium flex self-center text-center">Refrigerator</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M7 20q-1.25 0-2.125-.875T4 17H1.5l.45-2h2.825q.425-.475 1-.737T7 14t1.225.263t1 .737H13.4l2.1-9H4.55l.1-.425q.15-.7.687-1.137T6.6 4H18l-.925 4H20l3 4l-1 5h-2q0 1.25-.875 2.125T17 20t-2.125-.875T14 17h-4q0 1.25-.875 2.125T7 20m8.925-7h4.825l.1-.525L19 10h-2.375zm-.475-6.825L15.5 6l-2.1 9l.05-.175l.85-3.65zM.5 13.325l.5-2h5.5l-.5 2zm2-3.65l.5-2h6.5l-.5 2zM7 18q.425 0 .713-.288T8 17t-.288-.712T7 16t-.712.288T6 17t.288.713T7 18m10 0q.425 0 .713-.288T18 17t-.288-.712T17 16t-.712.288T16 17t.288.713T17 18"/></svg>
                                </div>
                                <div className=''>
                                    <span className="text-xs font-medium flex text-center">Home delivery food available on Order 24/7</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <svg viewBox="0 0 1024 1024" className="icon size-8 opacity-80" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M475.500089 922.669511H88.314311V364.839822a60.381867 60.381867 0 0 1 60.381867-60.381866h266.422044a60.381867 60.381867 0 0 1 60.381867 60.381866v286.867911" fill="#ffffff"></path><path d="M233.801956 304.457956h-85.105778a60.393244 60.393244 0 0 0-60.393245 60.381866v557.818311h85.0944V364.839822a60.404622 60.404622 0 0 1 60.404623-60.381866z" fill="#ffffff"></path><path d="M764.689067 805.0688H344.234667a68.516978 68.516978 0 0 1-1.695289-15.1552c0-13.152711 3.7888-25.440711 10.296889-35.794489l196.949333-31.561955h137.193244l77.710223 82.511644z" fill="#ffffff"></path><path d="M686.967467 805.0688H309.6576v29.627733a87.972978 87.972978 0 0 0 87.972978 87.972978h339.592533" fill="#ffffff"></path><path d="M397.118578 834.685156v-29.627734H309.6576v29.627734a87.972978 87.972978 0 0 0 87.972978 87.972977h87.4496a87.950222 87.950222 0 0 1-87.9616-87.972977z" fill="#ffffff"></path><path d="M931.134578 363.997867v558.671644h-244.167111V363.997867a49.857422 49.857422 0 0 1 49.857422-49.846045h144.463644a49.857422 49.857422 0 0 1 49.846045 49.846045z" fill="#ffffff"></path><path d="M802.338133 314.151822H736.824889a49.857422 49.857422 0 0 0-49.857422 49.857422v558.660267h65.501866V364.009244a49.857422 49.857422 0 0 1 49.8688-49.857422z" fill="#ffffff"></path><path d="M931.134578 363.997867v126.714311h-244.167111V363.997867a49.857422 49.857422 0 0 1 49.857422-49.846045h144.463644a49.857422 49.857422 0 0 1 49.846045 49.846045z" fill="#ffffff"></path><path d="M802.326756 314.151822a49.857422 49.857422 0 0 0-49.857423 49.857422V490.723556h-65.513244V364.009244a49.880178 49.880178 0 0 1 49.8688-49.857422h65.501867z" fill="#ffffff"></path><path d="M165.000533 211.330844h233.813334v93.127112h-233.813334z" fill="#ffffff"></path><path d="M165.000533 211.330844h72.715378v93.127112h-72.715378z" fill="#ffffff"></path><path d="M224.4608 78.574933h114.926933v132.755911H224.4608z" fill="#ffffff"></path><path d="M224.4608 78.574933h57.457778v132.755911h-57.457778z" fill="#ffffff"></path><path d="M517.0176 677.410133a34.133333 34.133333 0 0 0-17.373867 4.744534 45.101511 45.101511 0 0 0-69.927822-26.794667 34.451911 34.451911 0 0 0-32.233244-22.402844 34.440533 34.440533 0 0 0-34.315378 31.709866 45.090133 45.090133 0 0 0-52.986311 44.396089 45.090133 45.090133 0 0 0 73.568711 34.963911 34.417778 34.417778 0 0 0 53.111467-10.843022 45.078756 45.078756 0 0 0 48.7424-7.236267 34.451911 34.451911 0 1 0 31.414044-48.5376z" fill="#ffffff"></path><path d="M88.314311 811.337956c8.203378 0 14.859378-6.667378 14.859378-14.870756V364.839822a45.579378 45.579378 0 0 1 45.522489-45.522489h266.422044a45.568 45.568 0 0 1 45.522489 45.522489v240.423822a14.859378 14.859378 0 1 0 29.718756 0V364.839822a75.332267 75.332267 0 0 0-75.252623-75.241244h-1.444977v-78.267734c0-8.214756-6.644622-14.859378-14.859378-14.859377h-44.578133v-60.893867h101.558044c4.801422 0 8.715378 3.913956 8.715378 8.715378v6.144a14.859378 14.859378 0 1 0 29.718755 0v-6.144a38.479644 38.479644 0 0 0-38.434133-38.434134h-101.558044V78.574933c0-8.203378-6.644622-14.859378-14.848-14.859377H224.449422c-8.214756 0-14.859378 6.644622-14.859378 14.859377v117.896534h-44.589511c-8.214756 0-14.859378 6.644622-14.859377 14.859377v78.267734h-1.444978a75.343644 75.343644 0 0 0-75.252622 75.252622v431.627378c0.011378 8.192 6.667378 14.859378 14.870755 14.859378zM239.3088 93.434311h85.1968v103.037156h-85.1968V93.434311zM179.871289 226.190222h204.094578v63.408356H179.871289V226.190222zM881.277156 299.292444H736.824889a64.785067 64.785067 0 0 0-64.7168 64.7168v543.789512H525.038933a14.870756 14.870756 0 0 0 0 29.741511h406.084267c8.214756 0 14.870756-6.667378 14.870756-14.870756V623.104a14.859378 14.859378 0 1 0-29.730134 0v284.694756H701.826844V505.582933h50.642489a14.859378 14.859378 0 1 0 0-29.718755h-50.642489v-111.843556a35.043556 35.043556 0 0 1 34.998045-34.998044h144.452267a35.043556 35.043556 0 0 1 34.998044 34.998044v111.843556H801.9968a14.859378 14.859378 0 0 0 0 29.718755h114.2784v64.022756a14.870756 14.870756 0 1 0 29.730133 0v-205.596445a64.785067 64.785067 0 0 0-64.728177-64.7168z" fill=""></path><path d="M475.500089 907.798756h-77.869511a73.193244 73.193244 0 0 1-73.1136-73.1136v-14.756978h314.424889a14.859378 14.859378 0 1 0 0-29.730134H357.398756v-0.295822c0-7.3728 1.547378-14.620444 4.5056-21.265066a59.926756 59.926756 0 0 0 21.890844-6.849423 49.243022 49.243022 0 0 0 58.948267-11.025066 59.869867 59.869867 0 0 0 38.957511-4.516978 49.322667 49.322667 0 0 0 35.316622 14.927644 49.379556 49.379556 0 0 0 42.1888-23.779555h79.746844a14.848 14.848 0 1 0 0-29.718756H566.158222a49.379556 49.379556 0 0 0-57.856-44.361955 59.619556 59.619556 0 0 0-52.599466-31.072711c-7.042844 0-13.9264 1.206044-20.411734 3.561244a49.504711 49.504711 0 0 0-37.796978-17.726578c-20.502756 0-38.468267 12.856889-45.784177 31.118222a60.017778 60.017778 0 0 0-56.388267 59.847112 60.074667 60.074667 0 0 0 36.511289 55.1936 82.090667 82.090667 0 0 0-4.152889 25.656888l0.011378 0.295823h-18.0224c-8.203378 0-14.859378 6.656-14.859378 14.859377v29.627734a102.559289 102.559289 0 0 0 30.606222 73.124978H103.173689v-61.815467a14.859378 14.859378 0 1 0-29.718756 0v76.663467c0 8.214756 6.644622 14.870756 14.859378 14.870755h387.185778a14.870756 14.870756 0 0 0 0-29.718755zM355.259733 678.820978c1.729422 0 3.527111 0.170667 5.313423 0.489244 4.118756 0.728178 8.362667-0.318578 11.6736-2.889955a14.791111 14.791111 0 0 0 5.723022-10.581334 19.649422 19.649422 0 0 1 19.501511-18.0224c8.112356 0 15.473778 5.12 18.3296 12.743111a14.870756 14.870756 0 0 0 22.482489 6.929067c5.12-3.606756 11.138844-5.518222 17.396622-5.518222 14.199467 0 26.3168 9.659733 29.468444 23.472355a14.882133 14.882133 0 0 0 22.004623 9.5232c3.060622-1.786311 6.371556-2.696533 9.864533-2.696533 10.797511 0 19.603911 8.783644 19.603911 19.592533s-8.795022 19.603911-19.603911 19.603912c-7.691378 0-14.700089-4.551111-17.863111-11.605334a14.836622 14.836622 0 0 0-23.415467-5.0176 30.162489 30.162489 0 0 1-32.6656 4.846934 14.859378 14.859378 0 0 0-19.501511 6.8608 19.501511 19.501511 0 0 1-30.185244 6.189511 14.848 14.848 0 0 0-19.023645-0.216178 29.923556 29.923556 0 0 1-19.091911 6.792533 30.276267 30.276267 0 0 1-30.242133-30.242133 30.264889 30.264889 0 0 1 30.230755-30.253511z" fill=""></path></g></svg>
                                </div>
                                <div>
                                    <span className="text-xs font-medium flex self-center text-center">Toiletries</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="m10.506 15.009l6.634-4.511q.283-.211.497-.488c.485-.63.476-1.506.168-2.238A4.55 4.55 0 0 0 13.6 5c-.936 0-1.806.279-2.529.757l-7.08 5"/><path d="M5.995 13.506c0 .696.369 2.08 2.04 2.46c1.007.228 3.938-.736 2.504-3.528s-4.887-2.806-6.292-1.87c-.859.52-2.526 2.148-2.21 4.311c.113 1.31 1.145 3.97 4.375 4.122h9.892c.922-.073 1.112-.207 1.814-.745c.945-.848 2.522-2.408 3.439-3.435c.198-.221.411-.45.439-.746v0c.145-1.576-2.247-.893-3.98-1.081"/></g></svg>
                                </div>
                                <div>
                                    <span className="text-xs font-medium flex text-center">Extra Mattress for Extra Person</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M9 18q.425 0 .713-.288T10 17t-.288-.712T9 16t-.712.288T8 17t.288.713T9 18m3 0q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m3 0q.425 0 .713-.288T16 17t-.288-.712T15 16t-.712.288T14 17t.288.713T15 18m-6-3q.425 0 .713-.288T10 14t-.288-.712T9 13t-.712.288T8 14t.288.713T9 15m3 0q.425 0 .713-.288T13 14t-.288-.712T12 13t-.712.288T11 14t.288.713T12 15m3 0q.425 0 .713-.288T16 14t-.288-.712T15 13t-.712.288T14 14t.288.713T15 15m-8-3h10v-1q0-2.075-1.463-3.537T12 6T8.463 7.463T7 11zm1.55-1.5q.2-1.275 1.163-2.137T12 7.5t2.288.863T15.45 10.5zM2 22V2h20v20zm2-2h16V4H4zm0 0V4z"/></svg>
                                </div>
                                <div>
                                    <span className="text-xs font-medium flex text-center">03 Attached Bathrooms and 01 Common Bathroom</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 15.5h11v.75q0 .325.213.538t.537.212t.538-.213t.212-.537v-3.1q0-.525-.2-.987t-.55-.813V9q0-.825-.587-1.412T16.25 7H13q-.275 0-.525.075T12 7.3q-.225-.15-.475-.225T11 7H7.75q-.825 0-1.412.588T5.75 9v2.35q-.35.35-.55.813t-.2.987v3.1q0 .325.213.538T5.75 17t.538-.213t.212-.537zm0-1.5v-1q0-.425.288-.712T7.5 12h9q.425 0 .713.288T17.5 13v1zm.75-3.5v-2h4v2zm5.5 0v-2h4v2zM4 22q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v16q0 .825-.587 1.413T20 22zm0-2h16V4H4zm0 0V4z"/></svg>
                                </div>
                                <div>
                                    <span className="text-xs font-medium flex self-center text-center">03 AC Bedrooms</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M21 9V7c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78c-.53-.48-1.23-.78-2-.78H6C4.35 4 3 5.35 3 7v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3v2h2v-2h14v2h2v-2c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3m-7-3h4c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2h-5V7c0-.55.45-1 1-1M5 7c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v7H6v-2c0-.88-.39-1.67-1-2.22zm17 10c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h16v-4c0-.55.45-1 1-1s1 .45 1 1z"/></svg>
                                </div>
                                <div>
                                    <span className="text-xs font-medium flex self-center text-center">02 AC Living Room</span>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </div>
        </div>
       
    )
}

export default Blogs
