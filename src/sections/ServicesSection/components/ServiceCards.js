// TypeScript type removed for JavaScript compatibility

export const ServiceCard = (props) => {
    const imageContent = (
        <picture className="box-border caret-transparent h-full w-full">
            <img
                src={props.imageUrl}
                alt={props.imageAlt}
                className="aspect-[2_/_1] box-border caret-transparent max-w-full w-full mx-auto"
            />
        </picture>
    );

    return (
        <div className="relative items-center box-border caret-transparent flex flex-col justify-start text-center w-full">
            <div className="box-border caret-transparent max-w-full -order-1 w-full z-[1] mb-3 mx-auto md:mb-6">
                {props.isClickableImage ? (
                    <a href={props.linkUrl} className="box-border caret-transparent">
                        {imageContent}
                    </a>
                ) : (
                    <span className="box-border caret-transparent">{imageContent}</span>
                )}
            </div>
            <h4
                className="text-neutral-900 text-[22px] box-border caret-transparent leading-[27.5px] max-w-full break-words mb-3 md:mb-6"
            >
                {props.title}
            </h4>
            <div className="text-zinc-600 box-border caret-transparent leading-6 max-w-full break-words w-full mb-3 md:mb-6">
                <p className="box-border caret-transparent break-words">
                    <span className="box-border caret-transparent break-words">
                        {props.description}
                    </span>
                </p>
            </div>
            <div className="box-border caret-transparent max-w-full">
                <a
                    href={props.linkUrl}
                    className="relative text-white text-xs font-bold items-center bg-pink-700 box-border caret-transparent inline-flex justify-center max-w-full min-h-14 break-words uppercase w-full px-10 py-2 rounded-[48px] md:text-sm md:w-auto hover:bg-pink-600"
                >
                    {props.linkText}
                </a>
            </div>
        </div>
    );
};
