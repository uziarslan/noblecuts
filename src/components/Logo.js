import React from 'react';
import logo from "../assets/images/logo.png"

export const Logo = (props) => {
    return (
        <div
            className={`box-border caret-transparent flex justify-center w-full font-josefin_slab md:justify-normal md:w-auto ${props.variant}`}
        >
            <a
                title="Noble Cuts Meat Shop"
                href="/"
                className={`text-noble-brown box-border caret-transparent block max-w-full break-words font-cantarell md:inline hover:text-noble-brown-dark hover:border-noble-brown-dark ${props.linkClassName || ""}`}
            >
                <div className="box-border caret-transparent block break-words md:inline-block">
                    <img
                        src={logo}
                        alt="Noble Cuts Meat Shop"
                        className="aspect-[1.871_/_1] box-border caret-transparent block h-[195px] max-h-[110px] max-w-56 object-contain break-words mx-auto md:inline md:max-h-[195px] md:max-w-full"
                    />
                </div>
            </a>
        </div>
    );
};
