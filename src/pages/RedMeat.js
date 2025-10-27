import React from 'react';
import { DesktopHeader } from '../sections/Header/components/DesktopHeader';
import { Downloads } from '../sections/Downloads';
import { Footer } from '../sections/Footer';

// Pricing data array
const pricingData = [
    {
        category: "Slaughter Fees",
        items: [
            { name: "Beef Under Thirty Months", price: "$250" },
            { name: "Beef Over Thirty Months", price: "$300" },
            { name: "Beef Over Thirty Months (Undeclared)", price: "$400" },
            { name: "Veal", price: "$250" },
            { name: "Lamb", price: "$40" },
            { name: "Goats", price: "$40" }
        ]
    },
    {
        category: "Custom Cutting",
        items: [
            { name: "Beef/Veal", price: "$1.25/lb" },
            { name: "Standard Cut Lamb/Goat", price: "$1.50/lb" },
            { name: "Custom Cut Lamb/Goat", price: "$2.00/lb" },
        ]
    }
];

export const RedMeat = () => {
    return (
        <div className="text-black text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-cantarell">
            <div className="box-border caret-transparent">
                <div className="bg-white box-border caret-transparent w-full font-cantarell">
                    <div className="relative bg-neutral-900 box-border caret-transparent min-h-[1000px] overflow-hidden m-auto">

                        {/* Header Section */}
                        <div className="box-border caret-transparent">
                            <div role="main" className="bg-white box-border caret-transparent">
                                <div className="box-border caret-transparent">
                                    <DesktopHeader />
                                </div>
                            </div>
                        </div>

                        {/* Hero Section */}
                        <div className="box-border caret-transparent">
                            <div role="region" className="bg-white box-border caret-transparent">
                                <div className="box-border caret-transparent">
                                    <section className="bg-white box-border caret-transparent py-10 md:py-14">
                                        <div className="box-border caret-transparent max-w-full w-auto mx-auto px-6 md:w-[1160px]">
                                            <h1 className="text-noble-brown text-[28px] font-semibold box-border caret-transparent leading-[39.2px] break-words text-center overflow-hidden mb-10 font-josefin_slab md:text-[32px] md:leading-[44.8px]">
                                                <div className="text-[28px] box-border caret-transparent leading-[39.2px] max-w-full break-words w-auto overflow-hidden mx-auto px-6 md:text-[32px] md:leading-[44.8px] md:w-[1160px]">
                                                    <span className="relative text-[28px] box-border caret-transparent inline-block leading-[39.2px] max-w-[80%] break-words md:text-[32px] md:leading-[44.8px] before:accent-auto before:bg-noble-brown before:box-border before:caret-transparent before:text-noble-brown before:block before:text-[28px] before:not-italic before:normal-nums before:font-semibold before:h-px before:tracking-[normal] before:leading-[39.2px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-[375px] before:mr-6 before:-mt-px before:border-separate before:right-full before:top-[21px] before:font-josefin_slab before:md:text-[32px] before:md:leading-[44.8px] before:md:w-[1280px] before:md:top-6 after:accent-auto after:bg-noble-brown after:box-border after:caret-transparent after:text-noble-brown after:block after:text-[28px] after:not-italic after:normal-nums after:font-semibold after:h-px after:tracking-[normal] after:leading-[39.2px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-[375px] after:ml-6 after:-mt-px after:border-separate after:left-full after:top-[21px] after:font-josefin_slab after:md:text-[32px] after:md:leading-[44.8px] after:md:w-[1280px] after:md:top-6">
                                                        Red Meat Processing
                                                    </span>
                                                </div>
                                            </h1>
                                            <div className="box-border caret-transparent flex flex-wrap justify-center text-left -mx-3 md:-mx-6">
                                                <div className="box-border caret-transparent basis-full grow max-w-full px-3 md:basis-full md:max-w-full md:px-6">
                                                    <div className="items-start box-border caret-transparent flex flex-col w-full mb-8">
                                                        <h4 className="text-zinc-900 text-[22px] box-border caret-transparent leading-[27.5px] max-w-full break-words">
                                                            Custom Butchering Services for Farmers
                                                        </h4>
                                                    </div>
                                                    <div className="items-start box-border caret-transparent flex flex-col w-full mb-8">
                                                        <div className="text-zinc-600 box-border caret-transparent grow leading-6 max-w-full break-words">
                                                            <p className="box-border caret-transparent break-words">
                                                                <span className="box-border caret-transparent break-words">
                                                                    Please phone ahead and book an appointment to have your animals processed. Always follow{' '}
                                                                    <a href="http://www.inspection.gc.ca/animals/terrestrial-animals/humane-transport/transport-requirements/eng/1363748532198/1363748620219" className="text-noble-brown box-border caret-transparent break-words underline hover:text-noble-brown-dark hover:border-noble-brown-dark">
                                                                        CFIA transportation guidelines
                                                                    </a>
                                                                    , as well as species specific{' '}
                                                                    <a href="https://www.canadaid.ca/producers/backgrounders.html" className="text-noble-brown box-border caret-transparent break-words underline hover:text-noble-brown-dark hover:border-noble-brown-dark">
                                                                        CCIA identification guidelines
                                                                    </a>
                                                                    . Always have your animals tagged before leaving your property. We are not a licensed tagging facility, so please do not plan to tag here. If you suspect your cattle is close to 30 months of age, please inform us at the time of booking.
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="items-start box-border caret-transparent flex flex-col w-full">
                                                        <h4 className="text-zinc-900 text-[22px] box-border caret-transparent leading-[27.5px] max-w-full break-words">
                                                            Fees
                                                        </h4>
                                                        <div className="text-zinc-600 box-border caret-transparent grow leading-6 max-w-full break-words">
                                                            {pricingData.map((section, sectionIndex) => (
                                                                <div key={sectionIndex} className="mb-6">
                                                                    <p><span><strong>{section.category}:</strong></span></p>
                                                                    {section.description && (
                                                                        <p><span>{section.description}</span></p>
                                                                    )}
                                                                    {section.items.map((item, itemIndex) => (
                                                                        <p key={itemIndex}>
                                                                            <span>{item.name}.......{item.price}</span>
                                                                        </p>
                                                                    ))}
                                                                    <p><span><br /></span></p>
                                                                </div>
                                                            ))}
                                                            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                                                                <div className="flex">
                                                                    <div className="flex-shrink-0">
                                                                        <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                                        </svg>
                                                                    </div>
                                                                    <div className="ml-3">
                                                                        <h3 className="text-sm font-medium text-amber-800">
                                                                            Important Notice
                                                                        </h3>
                                                                        <div className="mt-2 text-sm text-amber-700">
                                                                            <p>Farmers are required to collect their processed products within the specified timeframe. Additional storage fees will apply for products not picked up within the agreed collection period.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p><span>***All prices are subject to HST and <a href="http://www.ontariosheep.org/LinkClick.aspx?fileticket=yjZZ6yofiZg%3D&tabid=91" className="text-noble-brown box-border caret-transparent break-words underline hover:text-noble-brown-dark hover:border-noble-brown-dark">OSMA</a> charges for sheep and lamb</span></p>
                                                            <p><span><br /></span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>

                        {/* Downloads Section */}
                        <div className="box-border caret-transparent">
                            <div role="region" className="bg-neutral-100 box-border caret-transparent">
                                <div className="box-border caret-transparent">
                                    <Downloads />
                                </div>
                            </div>
                        </div>

                        {/* Footer Section */}
                        <div className="box-border caret-transparent">
                            <div role="contentinfo" className="bg-neutral-900 box-border caret-transparent">
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
        </div>
    );
};

export default RedMeat;