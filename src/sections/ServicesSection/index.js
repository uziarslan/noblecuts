import { ServiceCard } from "./components/ServiceCards";
import service1 from "../../assets/images/service-1.jpeg"
import service2 from "../../assets/images/service-2.jpeg"

export const ServicesSection = () => {
    return (
        <section className="bg-neutral-100 box-border caret-transparent py-10 md:py-14">
            <div className="box-border caret-transparent max-w-full w-auto mx-auto px-6 md:w-[1160px]">
                <h2
                    className="text-pink-700 text-[28px] font-semibold box-border caret-transparent leading-[39.2px] break-words text-center overflow-hidden mb-10 font-josefin_slab md:text-[32px] md:leading-[44.8px]"
                >
                    <div className="text-[28px] box-border caret-transparent leading-[39.2px] max-w-full break-words w-auto overflow-hidden mx-auto px-6 md:text-[32px] md:leading-[44.8px] md:w-[1160px]">
                        <span className="relative text-[28px] box-border caret-transparent inline-block leading-[39.2px] max-w-[80%] break-words md:text-[32px] md:leading-[44.8px] before:accent-auto before:bg-pink-700 before:box-border before:caret-transparent before:text-pink-700 before:block before:text-[28px] before:not-italic before:normal-nums before:font-semibold before:h-px before:tracking-[normal] before:leading-[39.2px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-[375px] before:mr-6 before:-mt-px before:border-separate before:right-full before:top-[21px] before:font-josefin_slab before:md:text-[32px] before:md:leading-[44.8px] before:md:w-[1280px] before:md:top-6 after:accent-auto after:bg-pink-700 after:box-border after:caret-transparent after:text-pink-700 after:block after:text-[28px] after:not-italic after:normal-nums after:font-semibold after:h-px after:tracking-[normal] after:leading-[39.2px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-[375px] after:ml-6 after:-mt-px after:border-separate after:left-full after:top-[21px] after:font-josefin_slab after:md:text-[32px] after:md:leading-[44.8px] after:md:w-[1280px] after:md:top-6">
                            Our Services
                        </span>
                    </div>
                </h2>
                <div className="box-border caret-transparent flex flex-wrap justify-center -mb-6 -mx-3 md:-mb-12 md:-mx-6">
                    <div className="box-border caret-transparent basis-full grow max-w-full pb-3 px-3 md:basis-6/12 md:max-w-[50%] md:pb-12 md:px-6">
                        <ServiceCard
                            imageUrl={service1}
                            imageAlt="Custom Freezer Orders"
                            title="Premium Custom Cut Products"
                            description="Dry Aged Products - There is no comparison!"
                            linkUrl="/pricing"
                            linkText="Find out more"
                            isClickableImage={true}
                        />
                    </div>
                    <div className="box-border caret-transparent basis-full grow max-w-full pb-3 px-3 md:basis-6/12 md:max-w-[50%] md:pb-12 md:px-6">
                        <ServiceCard
                            imageUrl={service2}
                            imageAlt="Dry Aged Beef Cut to Spec"
                            title="Red Meat Processing For Farmers"
                            description="We process Beef, Veal, Lamb & Goat"
                            linkUrl="/pricing"
                            linkText="Find out more"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
