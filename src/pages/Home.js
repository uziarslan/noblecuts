import React from 'react';
import { Header } from '../sections/Header';
import { ServicesSection } from '../sections/ServicesSection';
import { Footer } from '../sections/Footer';

const Home = () => {
    return (
        <body className="text-black text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-times_new_roman">
            <div className="box-border caret-transparent">
                <div className="bg-white box-border caret-transparent w-full font-cantarell">
                    <div className="relative bg-neutral-900 box-border caret-transparent min-h-[1000px] overflow-hidden m-auto">
                        <div className="box-border caret-transparent">
                            <div
                                role="main"
                                className="bg-white box-border caret-transparent"
                            >
                                <div className="box-border caret-transparent">
                                    <div className="box-border caret-transparent"></div>
                                    <Header />
                                </div>
                            </div>
                        </div>
                        <div className="box-border caret-transparent">
                            <div
                                role="region"
                                className="bg-neutral-100 box-border caret-transparent"
                            >
                                <div className="box-border caret-transparent">
                                    <ServicesSection />
                                </div>
                            </div>
                        </div>
                        <div className="box-border caret-transparent">
                            <div
                                role="contentinfo"
                                className="bg-neutral-900 box-border caret-transparent"
                            >
                                <div className="box-border caret-transparent">
                                    <Footer />
                                </div>
                            </div>
                        </div>
                        <div className="box-border caret-transparent"></div>
                        <div className="box-border caret-transparent"></div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Home;