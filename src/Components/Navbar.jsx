import React, { useState } from "react";

const Navbar = () => {
    // 1. Initialize state to manage the mobile menu's open/closed status
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 2. Function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Array of navigation links for cleaner rendering
    const navLinks = [
        { name: "Home", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Changelog", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Download", href: "#" },
        { name: "Contact", href: "#" }
    ];

    return (
        <nav className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex justify-between items-center container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <h1 className="text-xl font-extrabold text-[#130B2D]">
                    CS — Ticket System
                </h1>

                {/* Desktop Navigation (visible on 'lg' screens and up) */}
                <div className="hidden lg:flex items-center space-x-8">
                    <div className="flex items-center space-x-6">
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    {/* New Ticket Button (Desktop) */}
                    <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-purple-700 text-white px-4 py-2rounded-md font-medium transition-colors">
                        New Ticket
                    </button>
                </div>

                {/* Mobile Menu Button (Hamburger) - visible on 'lg' screens and down */}
                <div className="lg:hidden flex items-center space-x-4">
                    {/* New Ticket Button (Mobile) */}
                    <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
                        + New Ticket
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="text-gray-600 hover:text-gray-800 focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content - conditionally rendered */}
            {isMenuOpen && (
                <div className="lg:hidden pt-4 pb-2 space-y-2 border-t border-gray-200 mt-4">
                    {navLinks.map(link => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100"
                            onClick={toggleMenu}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
