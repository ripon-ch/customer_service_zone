import React from "react";
import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";

function Footer() {
    return (
        <footer className="mt-20 bg-black">
            {/* Top Section */}
            <div className="container mx-auto max-w-6xl px-4 py-12 flex flex-col md:flex-row gap-12">
                {/* Brand (left side, takes ~40%) */}
                <div className="md:w-2/5">
                    <div className="flex items-center gap-2 font-extrabold text-lg text-white">
                        CS — Ticket System
                    </div>
                    <p className="mt-3 text-[13px] leading-6 text-[#A1A1AA] max-w-sm">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                </div>

                {/* Right side (4 equal columns) */}
                <div className="md:w-3/5 grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company */}
                    <div>
                        <h3 className="font-semibold mb-3 text-white">
                            Company
                        </h3>
                        <ul className="space-y-2 text-[#A1A1AA] text-sm">
                            <li>
                                <a href="#" className="hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Our Mission
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Contact Sales
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold mb-3 text-white">
                            Services
                        </h3>
                        <ul className="space-y-2 text-[#A1A1AA] text-sm">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Products & Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Customer Stories
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Download Apps
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="font-semibold mb-3 text-white">
                            Information
                        </h3>
                        <ul className="space-y-2 text-[#A1A1AA] text-sm">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Join Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="font-semibold mb-3 text-white">
                            Social Links
                        </h3>
                        <ul className="space-y-3 text-[#A1A1AA] text-sm">
                            <li className="flex items-center gap-2 hover:text-sky-400">
                                <span className="p-1.5 rounded-full bg-white text-black">
                                    <Twitter className="w-3.5 h-3.5" />
                                </span>
                                @CS — Ticket System
                            </li>
                            <li className="flex items-center gap-2 hover:text-blue-600">
                                <span className="p-1.5 rounded-full bg-white text-black">
                                    <Linkedin className="w-3.5 h-3.5" />
                                </span>
                                @CS — Ticket System
                            </li>
                            <li className="flex items-center gap-2 hover:text-blue-500">
                                <span className="p-1.5 rounded-full bg-white text-black">
                                    <Facebook className="w-3.5 h-3.5" />
                                </span>
                                @CS — Ticket System
                            </li>
                            <li className="flex items-center gap-2 hover:text-red-400">
                                <span className="p-1.5 rounded-full bg-white text-black">
                                    <Mail className="w-3.5 h-3.5" />
                                </span>
                                support@cst.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-t-white border-opacity-20" />

            {/* Bottom Bar */}
            <div className="container mx-auto max-w-6xl px-4 py-6 text-xs text-center text-[#FAFAFA]">
                © 2025 CS — Ticket System. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
