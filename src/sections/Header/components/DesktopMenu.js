import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export const ResponsiveMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    const getLinkClasses = (path, isMobile = false) => {
        const baseClasses = isMobile
            ? "text-noble-brown text-lg block py-3 px-4 hover:text-noble-brown-dark hover:bg-gray-100 rounded-lg transition-colors"
            : "text-noble-brown text-base font-medium px-4 py-2 hover:text-noble-brown-dark hover:bg-gray-50 rounded-md transition-all duration-200";

        const activeClasses = isMobile
            ? "text-noble-yellow font-bold bg-gray-100"
            : "text-noble-yellow font-bold bg-gray-50";

        return isActive(path) ? `${baseClasses} ${activeClasses}` : baseClasses;
    };

    return (
        <>
            {/* Desktop Menu */}
            <nav
                role="navigation"
                className="hidden md:block"
            >
                <ul className="flex items-center space-x-8">
                    <li>
                        <Link
                            to="/"
                            className={getLinkClasses("/")}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={getLinkClasses("/contact")}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/redmeat"
                            className={getLinkClasses("/redmeat")}
                        >
                            Red Meat Processing
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    aria-label="Toggle mobile menu"
                    className="text-zinc-900 items-center box-border caret-transparent flex justify-start break-words hover:text-noble-brown hover:border-noble-brown p-2"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {/* Backdrop */}
                <div
                    className={`fixed inset-0 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-50' : 'opacity-0'}`}
                    onClick={closeMenu}
                ></div>

                {/* Menu Panel */}
                <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex items-center justify-between p-6 border-b">
                        <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                        <button
                            onClick={closeMenu}
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                            aria-label="Close menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav className="p-6">
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    to="/"
                                    onClick={closeMenu}
                                    className={getLinkClasses("/", true)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    onClick={closeMenu}
                                    className={getLinkClasses("/contact", true)}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/redmeat"
                                    onClick={closeMenu}
                                    className={getLinkClasses("/redmeat", true)}
                                >
                                    Red Meat Processing
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};
