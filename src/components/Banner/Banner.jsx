import React from 'react';
import { motion } from "motion/react";
import { FaShippingFast } from 'react-icons/fa';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { GiCargoShip } from 'react-icons/gi';
import banner from "../../assets/banner.jpg"
import ship from "../../assets/ship.jpg"
import truck from "../../assets/truck.jpg"
import plane from "../../assets/plane.jpg"

const Banner = () => {
    return (
        <section className="relative bg-black text-white overflow-hidden rounded-3xl max-w-11/12 mx-auto mt-3">
            {/* Background Image */}
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                src={banner}
                alt="Shipping Containers"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Black overlay for clarity */}
            <div className="absolute inset-0 bg-black/25"></div>

            <div className='relative z-10 max-w-7xl mx-auto'>
                <div className="px-8 lg:px-0 py-16 flex flex-col gap-6 max-w-3xl mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 text-sm bg-white/50 rounded-full px-3 py-1 w-fit"
                    >
                        4+ Years in the market
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold leading-tight"
                    >
                        Smart Shipping <br /> Seamless Logistics
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-300 max-w-lg"
                    >
                        With KM Logistics, experience seamless cargo transportation backed by unmatched service and dedication.
                    </motion.p>

                    <div className="flex items-center gap-4 mt-4">
                        <GiCargoShip className="text-white text-3xl border-2 rounded-full p-1" />
                        <BiSolidPlaneAlt className="text-white text-3xl border-2 rounded-full p-1" />
                        <FaShippingFast className="text-white text-3xl border-2 rounded-full p-1" />
                    </div>

                    <div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 px-6 py-3 bg-white text-black rounded-3xl font-semibold shadow-md hover:bg-gray-200 transition flex items-center gap-2"
                        >
                            <div className="flex items-center rounded-3xl">
                                <img src={ship} alt="Ship" className="w-10 h-10 rounded-lg object-cover" />
                                <img src={plane} alt="Plane" className="w-10 h-10 rounded-lg object-cover -ml-2" />
                                <img src={truck} alt="Truck" className="w-10 h-10 rounded-lg object-cover -ml-2" />
                            </div>

                            <p>Enabling flawless logistics<br />across the globe →</p>
                        </motion.button>
                    </div>
                </div>

                {/* Bubbles with modes */}
                <div className="hidden md:flex absolute bottom-8 right-8 flex-col items-end gap-3 z-10 shadow-lg border-l-2 border-t-2 border-white rounded-full">
                    {/* Circle image */}
                    <div className="relative flex items-center justify-end">
                        <img
                            src="/src/assets/side-pic.jpg"
                            alt="Side"
                            className="w-40 h-40 rounded-full object-cover m-3"
                        />

                        {/* 01 / Sea */}
                        <div className="absolute -top-8 right-5 flex flex-col items-center">
                            {/* SVG pill bubble background */}
                            <svg
                                width="82"
                                height="54"
                                viewBox="0 0 82 54"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute"
                            >
                                <g filter="url(#filter0_f_1_62)">
                                    <path d="M79 23C79 25.7614 76.7614 28 74 28H47.3164C44.555 28 42.3164 30.2386 42.3164 33V39.6701C42.3164 41.7973 44.0377 43.6383 44.7621 45.6383C44.9161 46.0633 45 46.5218 45 47C45 49.2091 43.2091 51 41 51C38.7909 51 37 49.2091 37 47C37 46.5191 37.0849 46.0579 37.2405 45.6308C38.0213 43.4872 40 41.5313 40 39.2499V33C40 30.2386 37.7614 28 35 28H8C5.23858 28 3 25.7614 3 23V8C3 5.23858 5.23858 3 8 3H74C76.7614 3 79 5.23858 79 8V23Z" fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_f_1_62" x="0.5" y="0.5" width="81" height="53" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    </filter>
                                </defs>
                            </svg>

                            {/* Label overlay on top of SVG */}
                            <div className="relative text-black text-xs font-bold mt-2">
                                01 / Sea
                            </div>
                        </div>


                        {/* 02 / Air */}
                        <div className="absolute top-0 -left-2 flex flex-col items-center">
                            {/* SVG pill bubble background */}
                            <svg
                                width="82"
                                height="54"
                                viewBox="0 0 82 54"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute"
                            >
                                <g filter="url(#filter0_f_1_62)">
                                    <path d="M79 23C79 25.7614 76.7614 28 74 28H47.3164C44.555 28 42.3164 30.2386 42.3164 33V39.6701C42.3164 41.7973 44.0377 43.6383 44.7621 45.6383C44.9161 46.0633 45 46.5218 45 47C45 49.2091 43.2091 51 41 51C38.7909 51 37 49.2091 37 47C37 46.5191 37.0849 46.0579 37.2405 45.6308C38.0213 43.4872 40 41.5313 40 39.2499V33C40 30.2386 37.7614 28 35 28H8C5.23858 28 3 25.7614 3 23V8C3 5.23858 5.23858 3 8 3H74C76.7614 3 79 5.23858 79 8V23Z" fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_f_1_62" x="0.5" y="0.5" width="81" height="53" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    </filter>
                                </defs>
                            </svg>

                            {/* Label overlay on top of SVG */}
                            <div className="relative text-black text-xs font-bold mt-2">
                                02 / Air
                            </div>
                        </div>

                        {/* 03 / Land */}
                        <div className="absolute top-30 left-3 flex flex-col items-center">
                            {/* SVG pill bubble background */}
                            <svg
                                width="82"
                                height="54"
                                viewBox="0 0 82 54"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute"
                            >
                                <g filter="url(#filter0_f_1_62)">
                                    <path d="M79 23C79 25.7614 76.7614 28 74 28H47.3164C44.555 28 42.3164 30.2386 42.3164 33V39.6701C42.3164 41.7973 44.0377 43.6383 44.7621 45.6383C44.9161 46.0633 45 46.5218 45 47C45 49.2091 43.2091 51 41 51C38.7909 51 37 49.2091 37 47C37 46.5191 37.0849 46.0579 37.2405 45.6308C38.0213 43.4872 40 41.5313 40 39.2499V33C40 30.2386 37.7614 28 35 28H8C5.23858 28 3 25.7614 3 23V8C3 5.23858 5.23858 3 8 3H74C76.7614 3 79 5.23858 79 8V23Z" fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_f_1_62" x="0.5" y="0.5" width="81" height="53" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    </filter>
                                </defs>
                            </svg>

                            {/* Label overlay on top of SVG */}
                            <div className="relative text-black text-xs font-bold mt-2">
                                03 / Land
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
