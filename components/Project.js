import { useState } from "react";

export default function Project({ project: { name, liveLink, projectLink, screen, description } }) {
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const togglePreviewOpen = () => {
        if (!isPreviewOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.removeProperty("overflow");
        }
        setIsPreviewOpen((prev) => !prev);
    };

    return (
        <>
            {isPreviewOpen && (
                <div
                    onClick={togglePreviewOpen}
                    className="fixed left-0 top-0 w-screen h-screen bg-white/75 flex justify-center items-center z-50"
                >
                    <button className="absolute top-4 right-4 rounded-full text-xl w-10 h-10 flex items-center justify-center shadow-2xl bg-neutral-300 hover:bg-neutral-400">
                        x
                    </button>
                    <iframe
                        src={liveLink}
                        className="h-full max-h-[80%] w-full max-w-[80%] bg-white"
                    />
                </div>
            )}
            <div className="max-w-lg rounded-lg shadow-xl px-6 py-3 flex flex-col justify-between gap-3 transition-all hover:scale-105 bg-white">
                <div className="flex flex-col gap-3">
                    <p className="text-center font-bold text-2xl">{name}</p>
                    <button
                        onClick={togglePreviewOpen}
                        className="relative hover:after:bg-white/75 hover:after:content-['Preview'] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:flex after:justify-center after:items-center text-2xl"
                    >
                        <img src={screen} alt={`${name} screenshot`} />
                    </button>
                    <p>{description}</p>
                </div>
                <a
                    href={projectLink}
                    className="flex gap-1 items-center shadow-sm p-2 pr-4 w-fit bg-neutral-200 hover:bg-neutral-300"
                >
                    <img src="/github.png" alt="Github logo" className="w-12" />
                    <p>Github</p>
                </a>
            </div>
        </>
    );
}
