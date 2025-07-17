import React from 'react';
import { motion } from "motion/react";
import { FaShippingFast } from 'react-icons/fa';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { GiCargoShip } from 'react-icons/gi';

const Banner = () => {
    return (
        <section className="relative bg-black text-white overflow-hidden rounded-3xl max-w-11/12 mx-auto mt-3">
            {/* Background Image */}
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                src="/src/assets/banner.jpg"
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
                                <img src="/src/assets/ship.jpg" alt="Ship" className="w-10 h-10 rounded-lg object-cover" />
                                <img src="/src/assets/plane.jpg" alt="Plane" className="w-10 h-10 rounded-lg object-cover -ml-2" />
                                <img src="/src/assets/truck.jpg" alt="Truck" className="w-10 h-10 rounded-lg object-cover -ml-2" />
                            </div>

                            <p>Enabling flawless logistics<br />across the globe →</p>
                        </motion.button>
                    </div>
                </div>

                {/* Bubbles with modes */}
                <div className="hidden md:flex absolute bottom-8 right-8 flex-col items-end gap-3 z-10 shadow-lg border-l-2 border-t-2 border-white rounded-full">

                    {/* Sea */}
                    <div className="relative flex items-center justify-end">
                        <div className="bg-white text-black text-[10px] rounded-full px-2 py-0.5 shadow absolute right-1/4 bottom-11/12 mb-2">
                            01 / Sea
                        </div>
                        <div className="bg-white text-black text-[10px] rounded-full px-2 py-0.5 shadow absolute right-9/12 bottom-2/3">
                            02 / Air
                        </div>
                        <div className="bg-white text-black text-[10px] rounded-full px-2 py-0.5 shadow absolute right-2/3 top-11/12">
                            03 / Land
                        </div>
                        <img
                            src="/src/assets/side-pic.jpg"
                            alt="Side"
                            className="w-40 h-40 rounded-full object-cover m-3"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
