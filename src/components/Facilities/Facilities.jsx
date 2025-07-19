import container1 from "../../assets/container1.jpg";
import container2 from "../../assets/container2.jpg";
import container3 from "../../assets/container3.jpg";
import { FiArrowDownRight } from "react-icons/fi";

const containerData = [
    {
        id: 1,
        title: "20 Foot",
        price: "$1200",
        img: container3,
    },
    {
        id: 2,
        title: "40 Foot",
        price: "$1600",
        img: container2,
    },
    {
        id: 3,
        title: "60 Foot",
        price: "$1800",
        img: container1,
    },
];

const Facilities = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-11/12 mx-auto">
                {/* Title */}
                <div className="mb-10 flex flex-col lg:flex-row justify-between">
                    <div className="mb-8">
                        <span className="bg-white shadow-md px-4 py-1 rounded-full text-sm font-medium">
                            Facilities
                        </span>
                    </div>
                    <h2 className="text-4xl font-semibold leading-snug">
                        Explore <span className="text-gray-400">Our Full Range of</span><br />
                        <span className="text-gray-900">Secure and Versatile </span>
                        <span className="text-gray-400">Container Facilities</span>
                    </h2>
                    <div></div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {containerData.map((container) => (
                        <div
                            key={container.id}
                            className="overflow-hidden"
                        >
                            <img
                                src={container.img}
                                alt={container.title}
                                className="w-full h-72 object-cover rounded-3xl"
                            />
                            <div className="p-5 flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-bold">{container.title}</p>
                                    <p className="text-3xl font-bold">
                                        {container.price}
                                        <span className="text-xl font-medium">/Year</span>
                                    </p>
                                </div>

                                <button className="w-10 h-10 flex items-center justify-center bg-info rounded-full text-white cursor-pointer hover:scale-105 hover:bg-neutral transition duration-300">
                                    <FiArrowDownRight className="text-2xl" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;