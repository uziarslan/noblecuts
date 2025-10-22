import { ResponsiveMenu } from "./DesktopMenu";
import { Link } from 'react-router-dom';

export const DesktopHeader = () => {
    return (
        <div className="relative box-border caret-transparent max-w-full w-auto mx-auto px-6 md:w-[1160px]">
            {/* Mobile Header */}
            <div className="items-center box-border caret-transparent flex justify-between w-full py-6 md:hidden">
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] w-[15%] md:min-h-0 md:min-w-0"></div>
                <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto] text-center w-[70%] md:min-h-0 md:min-w-0">
                    <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] w-full font-josefin_slab md:block md:justify-normal md:min-h-0 md:min-w-0 md:w-auto">
                        <Link
                            title="Noble Cuts"
                            to="/"
                            className="text-pink-700 box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] break-words font-cantarell md:inline md:min-h-0 md:min-w-0 hover:text-pink-900 hover:border-pink-900"
                        >
                            <div className="box-border caret-transparent block break-words md:inline-block">
                                <img
                                    src="/images/logo.png"
                                    alt="Noble Cuts"
                                    className="aspect-[1.871_/_1] box-border caret-transparent block h-[195px] max-h-[110px] max-w-56 object-contain break-words mx-auto md:inline md:max-h-[195px] md:max-w-full"
                                />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] w-[15%] md:min-h-0 md:min-w-0">
                    <div className="box-border caret-transparent">
                        <ResponsiveMenu />
                    </div>
                </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:block">
                {/* Logo Section */}
                <div className="box-border caret-transparent flex justify-center py-6">
                    <Link
                        title="Noble Cuts"
                        to="/"
                        className="text-pink-700 box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] break-words font-cantarell hover:text-pink-900 hover:border-pink-900"
                    >
                        <div className="box-border caret-transparent block break-words">
                            <img
                                src="/images/logo.png"
                                alt="Noble Cuts"
                                className="aspect-[1.871_/_1] box-border caret-transparent block h-[195px] max-h-[195px] max-w-56 object-contain break-words mx-auto"
                            />
                        </div>
                    </Link>
                </div>

                {/* Menu Section */}
                <div className="box-border caret-transparent flex justify-center pb-6">
                    <ResponsiveMenu />
                </div>
            </div>
        </div>
    );
};