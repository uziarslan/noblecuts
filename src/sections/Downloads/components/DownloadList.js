import { DownloadItem } from "./DownloadItem";

export const DownloadList = () => {
    return (
        <div className="box-border caret-transparent flex flex-wrap -mx-3 md:-mx-6">
            <DownloadItem
                title="Beef Cutting Instructions"
                fileType="pdf"
                downloadUrl=""
                ariaLabel="Download Beef Cutting Instructions"
            />
            <DownloadItem
                title="Ontario Lamb Standard Cut Chart"
                fileType="jpg"
                downloadUrl=""
                ariaLabel="Download Ontario Lamb Standard Cut Chart"
            />
        </div>
    );
};
