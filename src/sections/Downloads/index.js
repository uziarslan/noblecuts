import { DownloadList } from "./components/DownloadList";

export const Downloads = () => {
    return (
        <section className="bg-neutral-100 box-border caret-transparent py-10 md:py-14">
            <div className="box-border caret-transparent max-w-full w-auto mx-auto px-6 md:w-[1160px]">
                <div className="box-border caret-transparent mb-8">
                    <h2
                        className="text-noble-brown text-[28px] font-semibold box-border caret-transparent leading-[39.2px] break-words text-center overflow-hidden mb-10 font-josefin_slab md:text-[32px] md:leading-[44.8px]"
                    >
                        <div className="text-[28px] box-border caret-transparent leading-[39.2px] max-w-full break-words w-auto overflow-hidden mx-auto px-6 md:text-[32px] md:leading-[44.8px] md:w-[1160px]">
                            <span className="relative text-[28px] box-border caret-transparent inline-block leading-[39.2px] max-w-[80%] break-words md:text-[32px] md:leading-[44.8px] before:accent-auto before:bg-noble-brown before:box-border before:caret-transparent before:text-noble-brown before:block before:text-[28px] before:not-italic before:normal-nums before:font-semibold before:h-px before:tracking-[normal] before:leading-[39.2px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-[375px] before:mr-6 before:-mt-px before:border-separate before:right-full before:top-[21px] before:font-josefin_slab before:md:text-[32px] before:md:leading-[44.8px] before:md:w-[1280px] before:md:top-6 after:accent-auto after:bg-noble-brown after:box-border after:caret-transparent after:text-noble-brown after:block after:text-[28px] after:not-italic after:normal-nums after:font-semibold after:h-px after:tracking-[normal] after:leading-[39.2px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-[375px] after:ml-6 after:-mt-px after:border-separate after:left-full after:top-[21px] after:font-josefin_slab after:md:text-[32px] after:md:leading-[44.8px] after:md:w-[1280px] after:md:top-6">
                                Downloads
                            </span>
                        </div>
                    </h2>
                </div>
                <DownloadList />
            </div>
        </section>
    );
};
