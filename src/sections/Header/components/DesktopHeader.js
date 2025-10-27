import { ResponsiveMenu } from "./DesktopMenu";
import { Link } from 'react-router-dom';

export const DesktopHeader = () => {
    return (
        <div className="relative w-full">
            {/* Mobile Header */}
            <div className="items-center box-border caret-transparent flex justify-between w-full py-6 md:hidden">
                <Link
                    title="Noble Cuts"
                    to="/"
                    className="text-noble-brown box-border caret-transparent hover:text-noble-brown-dark hover:border-noble-brown-dark"
                >
                    <img
                        src="/images/logo.png"
                        alt="Noble Cuts"
                        className="h-24 w-24 object-cover rounded-full"
                    />
                </Link>
                <div className="box-border caret-transparent">
                    <ResponsiveMenu />
                </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:block">
                {/* Integrated Header with Logo and Navigation */}
                <div className="bg-white border-b border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between py-6 max-w-7xl mx-auto px-6">
                        {/* Logo Section */}
                        <div className="flex-shrink-0">
                            <Link
                                title="Noble Cuts"
                                to="/"
                                className="text-noble-brown hover:text-noble-brown-dark transition-colors"
                            >
                                <img
                                    src="/images/logo.png"
                                    alt="Noble Cuts"
                                    className="h-28 w-auto object-contain rounded-full"
                                />
                            </Link>
                        </div>

                        {/* Navigation Section */}
                        <div className="flex-1 flex justify-center">
                            <ResponsiveMenu />
                        </div>

                        {/* Right Side - Empty for now, can add contact info later */}
                        <div className="flex-shrink-0 w-32"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};