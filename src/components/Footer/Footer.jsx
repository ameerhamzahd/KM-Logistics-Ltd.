import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaArrowUp,
} from "react-icons/fa6";
import footerBg from "../../assets/footerImage.jpg"; 

const Footer = () => {
    return (
        <footer className="relative rounded-t-3xl overflow-hidden max-w-11/12 mx-auto">
            {/* Background image */}
            <img
                src={footerBg}
                alt="Footer Background"
                className="absolute inset-0 w-full h-full object-cover object-[50%_75%]"
            />

            {/* Shadow overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 text-white pt-16 pb-6 max-w-7xl mx-auto px-4 lg:px-0">
                {/* Top container */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                    <h3 className="text-3xl font-light max-w-md">
                        Smart Shipping Starts Here
                    </h3>
                    <p className="text-white max-w-lg">
                        At KM Logistics, we believe reliable service is the foundation of every
                        successful delivery. Whether you have questions about our transport options,
                        need a custom quote, or just want to connect—our team is always here to help.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 justify-between items-start mt-5">
                    <div className="flex gap-4">
                        <button className="bg-[#0087DB] hover:bg-[#0073b7] transition text-white px-5 py-2 rounded-md font-semibold text-sm cursor-pointer">
                            GET A QUOTE
                        </button>
                        <button className="border border-white hover:bg-white hover:text-black transition text-white px-5 py-2 rounded-md font-semibold text-sm cursor-pointer">
                            VIEW MAP
                        </button>
                    </div>

                    <div className="flex gap-4">
                        <button className="w-10 h-10 flex items-center justify-center bg-[#0087DB] rounded-full hover:bg-[#0073b7] transition">
                            <FaFacebookF className="text-white text-lg" />
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center bg-[#0087DB] rounded-full hover:bg-[#0073b7] transition">
                            <FaInstagram className="text-white text-lg" />
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center bg-[#0087DB] rounded-full hover:bg-[#0073b7] transition">
                            <FaLinkedinIn className="text-white text-lg" />
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center bg-[#0087DB] rounded-full hover:bg-[#0073b7] transition">
                            <FaTwitter className="text-white text-lg" />
                        </button>
                    </div>
                </div>

                {/* Bottom container */}
                <div className="pt-10 flex flex-col md:flex-row justify-between items-start text-gray-400 text-sm">
                    <div>
                        <p className="text-white font-bold text-xl">KM FAARNS Ltd</p>
                        <p>@2025 FAARNS. All rights reserved</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-5 md:mt-0">
                        <button className="flex items-center gap-2 text-sm px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition cursor-pointer">
                            <FaArrowUp /> Back To Top
                        </button>
                        <div className="pt-3">
                            <a href="#" className="text-white underline mr-4">
                                Terms of Use
                            </a>
                            |
                            <a href="#" className="text-white underline ml-4">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
