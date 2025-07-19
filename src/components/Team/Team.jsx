import team1 from "../../assets/team1.png"
import team2 from "../../assets/team2.png"
import { GoArrowUpRight } from "react-icons/go";

const teamMembers = [
    {
        id: 1,
        name: "Managing Director",
        image: team1,
    },
    {
        id: 2,
        name: "Accountant",
        image: team2,
    },
];

const Team = () => {
    return (
        <section className="py-16 px-4 lg:px-0 text-center">
            <div className="max-w-2xl mx-auto">
                {/* Badge */}
                <div className="mb-8">
                    <span className="bg-white shadow-md px-4 py-1 rounded-full text-sm font-medium">
                        Meet the Team
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl font-semibold leading-snug mb-3">
                    Get to Know <span className="text-gray-400">Our Delivery</span><br />
                    <span className="text-gray-400">Experts</span>
                </h2>
                <p className="text-gray-600 font-bold mb-10">
                    Skilled, reliable, and dedicated to delivering excellence every day.
                </p>

                {/* Team Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="flex flex-col"
                        >
                            <div className="flex justify-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="rounded-xl w-64 h-64 object-cover object-top"
                                />
                            </div>
                            <div className="px-18 md:px-8 py-3">
                                <div></div>
                                <div className="flex items-end justify-between">
                                    <p className="text-xl font-bold">
                                        <span className="text-sm font-medium">{member.name}</span>
                                    </p>
                                    <button className="w-10 h-10 flex items-center justify-center bg-info rounded-full text-white cursor-pointer hover:scale-105 hover:bg-neutral transition duration-300">
                                        <GoArrowUpRight className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
