import React from "react";

export const DownloadItem = (props) => {
    return (
        <div className="box-border caret-transparent basis-full grow max-w-full ml-0 px-3 md:basis-[66.6667%] md:max-w-[66.6667%] md:ml-[16.6667%] md:px-6">
            <a
                aria-label={props.ariaLabel}
                href={props.downloadUrl}
                className="text-noble-brown box-border caret-transparent break-words hover:text-noble-brown-dark hover:border-noble-brown-dark"
            >
                <div className="items-center bg-white box-border caret-transparent flex justify-between break-words mb-1 px-6 py-3 hover:bg-black/10">
                    <span className="text-zinc-900 box-border caret-transparent block leading-6 max-w-[70%] break-words">
                        <span className="box-border caret-transparent break-words">
                            {props.title}
                        </span>
                        {` (${props.fileType})`}
                    </span>
                    <span className="box-border caret-transparent block break-words hover:text-noble-brown-dark hover:border-noble-brown-dark">
                        <svg
                            className="box-border caret-transparent inline-block h-4 w-4 text-noble-brown"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="box-border caret-transparent break-words align-middle ml-1">
                            <span className="box-border caret-transparent hidden break-words md:inline">
                                Download
                            </span>
                        </span>
                    </span>
                </div>
            </a>
        </div>
    );
};