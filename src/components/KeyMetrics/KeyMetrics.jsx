// KeyMetrics.jsx
import React from "react";
import CountUp from "react-countup";
import pinkish from "../../assets/pinkish.png";
import bluish from "../../assets/bluish.png";

const metrics = [
    {
        id: 1,
        value: 1050,
        suffix: "+",
        title: "Happy Clients",
        description:
            "Businesses across sectors trust us for dependable logistics and lasting partnerships.",
    },
    {
        id: 2,
        value: 225,
        suffix: "+",
        title: "Skilled Experts",
        description:
            "Our experienced team brings deep industry knowledge and precision to every shipment.",
    },
    {
        id: 3,
        value: 950,
        suffix: "+",
        title: "Completed Projects",
        description:
            "From local hauls to nationwide distribution, we deliver with consistency and care.",
    },
];

const KeyMetrics = () => {
    return (
        <section className="py-16 px-4 md:px-0">
            <div className="max-w-11/12 mx-auto">
                {/* Tag */}
                <div className="flex justify-center">
                    <span className="bg-[#fcd9da] text-gray-800 px-4 py-1 text-sm rounded-full shadow-md font-medium">
                        Key Metrics
                    </span>
                </div>

                {/* Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 pt-5 md:border-b-2 md:border-dotted md:border-gray-400"
                style={{
                    backgroundImage: `url(${pinkish}), url(${bluish})`,
                    backgroundPosition: "bottom left, top right",
                    backgroundRepeat: "no-repeat, no-repeat",
                    backgroundSize: "400px, 400px"
                }}
                >
                    <div className="md:border-r-2 md:border-dotted md:border-gray-400">
                        {/* Title and subtitle */}
                        <div className="md:mt-10 p-8 md:border-b-2 md:border-dotted md:border-gray-400">
                            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
                                Performance That Speaks for Itself
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-base">
                                Our numbers reflect years of consistent service, satisfied clients, and successful deliveries nationwide.
                            </p>
                        </div>

                        {/* Left side metric */}
                        <div className="p-8">
                            <p className="text-4xl font-semibold text-gray-900">
                                <CountUp end={metrics[0].value} duration={2.5} enableScrollSpy />{metrics[0].suffix}
                            </p>
                            <p className="text-info font-bold mt-1">{metrics[0].title}</p>
                            <p className="text-gray-600 text-sm mt-2">{metrics[0].description}</p>
                        </div>
                    </div>

                    <div>
                        {/* Top right metric */}
                        <div className="p-8 md:border-b-2 md:border-dotted md:border-gray-400">
                            <p className="text-4xl font-semibold text-gray-900">
                                <CountUp end={metrics[1].value} duration={2.5} enableScrollSpy />{metrics[1].suffix}
                            </p>
                            <p className="text-info font-bold mt-1">{metrics[1].title}</p>
                            <p className="text-gray-600 text-sm mt-2">{metrics[1].description}</p>
                        </div>

                        {/* Bottom right metric */}
                        <div className="p-8 md:mt-10">
                            <p className="text-4xl font-semibold text-gray-900">
                                <CountUp end={metrics[2].value} duration={2.5} enableScrollSpy />{metrics[2].suffix}
                            </p>
                            <p className="text-info font-bold mt-1">{metrics[2].title}</p>
                            <p className="text-gray-600 text-sm mt-2">{metrics[2].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default KeyMetrics;
