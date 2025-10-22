export const VideoPlayer = () => {
    return (
        <div className="relative box-border caret-transparent max-w-full w-full overflow-hidden pb-[56.25%]">
            <iframe
                type="text/html"
                src="https://youtube.com/embed/-i3kZSo_nfY?rel=0&showinfo=0&start=0&autoplay=0&loop=0&muted=0&controls=1"
                title="Noble Cuts Meat Packers Video"
                className="absolute box-border caret-transparent flex h-full max-h-[620px] w-full left-0 inset-y-0"
            ></iframe>
        </div>
    );
};
