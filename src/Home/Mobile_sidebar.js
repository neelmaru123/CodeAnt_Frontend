import { Book, ChevronDown, Cloud, LogOut, Phone, Settings, Menu, X } from "lucide-react";
import { useState } from "react";
import { House, Code } from "lucide-react";

function MobileSidebar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const name = "UtkarshDhairyaPanwar";

    const navigation = [
        { icon: <House />, name: "Repositories" },
        { icon: <Code />, name: "AI Code Review" },
        { icon: <Cloud />, name: "Cloud Security" },
        { icon: <Book />, name: "How to Use" },
        { icon: <Settings />, name: "Settings" },
    ];

    const bottomNavigation = [
        { icon: <Phone />, name: "Support" },
        { icon: <LogOut />, name: "Logout" },
    ];

    const navigatingItems = navigation.map((item, index) => (
        <div className={`flex flex-row gap-4 items-center text-base leading-none cursor-pointer font-bold text-gray-600 bg-white`} key={index}>
            {item.icon}
            <div>{item.name}</div>
        </div>
    ))

    const bottomNavigationItems = bottomNavigation.map((item, index) => (
        <div className={`flex flex-row gap-4 items-center text-sm sm:text-base leading-none cursor-pointer font-bold text-gray-600 bg-white`} key={index}>
            {item.icon}
            <div>{item.name}</div>
        </div>
    ))

    return (
        <>
            {/* Top Navigation Bar for Mobile */}
            <div className="sm:hidden flex justify-between items-center p-4 bg-gray-50 border-b border-gray-200 fixed top-0 left-0 w-full">
                <div className="flex items-center gap-3">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/4825dc148fe947419d38ca01a71ae49b/4f1a777898bfe1a24ab57690fa800c32c8189a6475e2d747df6a10c2c69b6a59?apiKey=4825dc148fe947419d38ca01a71ae49b&"
                        alt="CodeAnt AI Logo"
                        className="object-contain w-8"
                    />
                    <div className="text-lg font-semibold">CodeAnt AI</div>
                </div>
                <button className="text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Overlay and Drawer */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50"
                        onClick={() => setIsMenuOpen(false)} // Close menu when overlay is clicked
                    ></div>

                    {/* Drawer */}
                    <div className="absolute top-0 left-0 w-full bg-white rounded-b-lg shadow-lg">
                        <div className="flex flex-col p-4 gap-4">
                            {/* User Info */}
                            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/4825dc148fe947419d38ca01a71ae49b/4f1a777898bfe1a24ab57690fa800c32c8189a6475e2d747df6a10c2c69b6a59?apiKey=4825dc148fe947419d38ca01a71ae49b&"
                                        alt="CodeAnt AI Logo"
                                        className="object-contain w-8"
                                    />
                                    <div className="text-lg font-semibold">CodeAnt AI</div>
                                </div>
                                <ChevronDown onClick={() => setIsMenuOpen(false)} />
                            </div>
                            <div className="border border-gray-200 border-solid p-2 rounded-lg flex flex-row  justify-between">
                                <p className="text-lg">
                                    {name.substring(0, 12) + "..."}
                                </p>
                                <ChevronDown />
                            </div>
                            {/* Navigation Items */}
                            <div className="flex flex-col gap-4">
                                {navigatingItems}
                            </div>

                            {/* Bottom Navigation */}
                            <div className="flex flex-col gap-4">
                                {bottomNavigationItems}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}



export default MobileSidebar;
