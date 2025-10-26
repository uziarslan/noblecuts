import { DesktopHeader } from "./components/DesktopHeader";
import heroImage from "../../assets/images/hero.png";

export const Header = () => {
    return (
        <section className="bg-white box-border caret-transparent overflow-hidden">
            <div className="box-border caret-transparent hidden md:block"></div>
            <DesktopHeader />
            <div className="relative box-border caret-transparent grow">
                <div
                    style={{
                        backgroundImage: `url(${heroImage})`,
                    }}
                    role="img"
                    className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start min-h-[500px] bg-center md:min-h-[600px]"
                >
                    <div className="items-center box-border caret-transparent hidden flex-col grow justify-center min-h-0 min-w-0 w-full md:flex md:min-h-[auto] md:min-w-[auto]">
                        <div className="box-border caret-transparent flex justify-normal max-w-full min-h-0 min-w-0 w-auto mx-0 px-6 py-10 md:justify-center md:min-h-[auto] md:min-w-[auto] md:w-[1160px] md:mx-auto">
                            <div className="items-center box-border caret-transparent flex flex-col justify-center min-h-0 min-w-0 text-center w-full md:min-h-[auto] md:min-w-[auto]">
                                <div className="bg-white/90 box-border caret-transparent flex flex-col justify-center max-w-none min-h-0 min-w-0 w-full px-6 py-10 md:max-w-[45%] md:min-h-[auto] md:min-w-[auto] md:px-14">
                                    <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                                        <p className="text-zinc-600 text-[22px] box-border caret-transparent inline-block leading-[33px] break-words mb-3">
                                            <a
                                                href="tel:7053202084"
                                                className="box-border caret-transparent max-w-full break-words"
                                            >
                                                (705) 320-2084
                                            </a>
                                        </p>
                                    </div>
                                    <div className="box-border caret-transparent max-w-full min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] md:w-[1160px]">
                                        <div className="relative box-border caret-transparent leading-[19.2px] max-w-full break-words">
                                            <h1
                                                className="text-pink-700 text-[44px] font-semibold box-border caret-transparent inline-block leading-[52.8px] max-w-full break-words mb-2 font-josefin_slab"
                                            >
                                                Welcome to
                                                Noble Cuts
                                                Meat Packers
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="text-zinc-900 text-[22px] box-border caret-transparent leading-[27.5px] min-h-0 min-w-0 break-words md:min-h-[auto] md:min-w-[auto]">
                                        <p className="box-border caret-transparent break-words">
                                            <span className="box-border caret-transparent break-words">
                                                Always Local. The way meat was intended.
                                            </span>
                                        </p>
                                    </div>
                                    <div className="box-border caret-transparent min-h-0 min-w-0 mt-6 md:min-h-[auto] md:min-w-[auto]">
                                        <div className="box-border caret-transparent gap-x-6 flex flex-col flex-wrap justify-center gap-y-6 w-full md:flex-row">
                                            <div className="box-border caret-transparent max-w-full min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                                                <a
                                                    href="/contact"
                                                    className="relative text-white text-xs font-bold items-center bg-pink-700 box-border caret-transparent inline-flex justify-center max-w-full min-h-14 break-words uppercase w-full px-10 py-2 rounded-[48px] md:text-sm md:w-auto hover:bg-pink-600 gap-2"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                    </svg>
                                                    Get in Touch
                                                </a>
                                            </div>
                                            <div className="box-border caret-transparent max-w-full min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                                                <a
                                                    href="tel://7053202084"
                                                    className="relative text-white text-xs font-bold items-center bg-pink-700 box-border caret-transparent inline-flex justify-center max-w-full min-h-14 break-words uppercase w-full px-10 py-2 rounded-[48px] md:text-sm md:w-auto hover:bg-pink-600 gap-2"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                    Give us Call
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items-center box-border caret-transparent flex flex-col grow justify-center min-h-[auto] min-w-[auto] w-full md:hidden md:min-h-0 md:min-w-0">
                        <div className="box-border caret-transparent flex justify-normal max-w-full min-h-[auto] min-w-[auto] w-auto mx-0 px-6 py-10 md:justify-center md:min-h-0 md:min-w-0 md:w-[1160px] md:mx-auto">
                            <div className="items-center box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] text-center w-full md:min-h-0 md:min-w-0">
                                <div className="bg-white/90 box-border caret-transparent flex flex-col justify-center max-w-none min-h-[auto] min-w-[auto] w-full px-6 py-10 md:max-w-[45%] md:min-h-0 md:min-w-0 md:px-14">
                                    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                                        <p className="text-zinc-600 text-[22px] box-border caret-transparent inline-block leading-[33px] break-words mb-3">
                                            <a
                                                href="tel://7058213151"
                                                className="box-border caret-transparent max-w-full break-words"
                                            >
                                                (705) 821-3151
                                            </a>
                                        </p>
                                    </div>
                                    <div className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] w-full md:min-h-0 md:min-w-0 md:w-[1160px]">
                                        <div className="relative box-border caret-transparent leading-[19.2px] max-w-full break-words">
                                            <h1
                                                className="text-pink-700 text-[32px] font-semibold box-border caret-transparent inline-block leading-[38.4px] max-w-full break-words mb-2 font-josefin_slab md:text-[40px] md:leading-[48px]"
                                            >
                                                Welcome to Noble Cuts
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="text-zinc-900 text-[22px] box-border caret-transparent leading-[27.5px] min-h-[auto] min-w-[auto] break-words md:min-h-0 md:min-w-0">
                                        <p className="box-border caret-transparent break-words">
                                            <span className="box-border caret-transparent break-words">
                                                Always Local. The way meat was intended.
                                            </span>
                                        </p>
                                    </div>
                                    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mt-6 md:min-h-0 md:min-w-0">
                                        <div className="box-border caret-transparent gap-x-6 flex flex-col flex-wrap justify-center gap-y-6 w-full md:flex-row">
                                            <div className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-[auto]">
                                                <a
                                                    href="/contact"
                                                    className="relative text-white text-xs font-bold items-center bg-pink-700 box-border caret-transparent inline-flex justify-center max-w-full min-h-14 break-words uppercase w-full px-10 py-2 rounded-[48px] md:text-sm md:w-auto hover:bg-pink-600 gap-2"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                    </svg>
                                                    Get in Touch
                                                </a>
                                            </div>
                                            <div className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-[auto]">
                                                <a
                                                    href="tel://7053202084"
                                                    className="relative text-white text-xs font-bold items-center bg-pink-700 box-border caret-transparent inline-flex justify-center max-w-full min-h-14 break-words uppercase w-full px-10 py-2 rounded-[48px] md:text-sm md:w-auto hover:bg-pink-600 gap-2"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                    Give us Call
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
