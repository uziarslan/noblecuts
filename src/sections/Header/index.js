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
                                                href="tel:437990-9147"
                                                className="box-border caret-transparent max-w-full break-words"
                                            >
                                                (437) 990-9147
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
                                                    className="relative text-white text-xs font-bold items-center bg-pink-700 box-border caret-transparent inline-flex justify-center max-w-full min-h-14 break-words uppercase w-full px-10 py-2 rounded-[48px] md:text-sm md:w-auto hover:bg-pink-600"
                                                >
                                                    Get in Touch
                                                </a>
                                            </div>
                                            <div className="box-border caret-transparent max-w-full min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                                                <a
                                                    href="tel://4379909147"
                                                    className="relative text-white text-xs font-bold items-center bg-pink-700 box-border caret-transparent inline-flex justify-center max-w-full min-h-14 break-words uppercase w-full px-10 py-2 rounded-[48px] md:text-sm md:w-auto hover:bg-pink-600"
                                                >
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
                                            <div className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                                                <a
                                                    href="/contact"
                                                    className="relative text-white text-xs font-bold items-center bg-pink-700 box-border caret-transparent inline-flex justify-center max-w-full min-h-14 break-words uppercase w-full px-10 py-2 rounded-[48px] md:text-sm md:w-auto hover:bg-pink-600"
                                                >
                                                    Get in Touch
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
