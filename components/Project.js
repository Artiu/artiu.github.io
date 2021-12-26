export default function Project({ project: { name, liveLink, projectLink, screen, description } }) {
    return (
        <div className="max-w-lg rounded-lg shadow-xl px-6 py-3 flex flex-col gap-3">
            <p className="text-center font-bold text-2xl">{name}</p>
            <a href={liveLink}>
                <img src={screen} alt={`${name} screenshot`} />
            </a>
            <p>{description}</p>
            <a href={projectLink} className="flex gap-1 items-center shadow-lg p-2 pr-4 w-fit">
                <img src="/github.png" alt="Github logo" className="w-12" />
                <p>Github</p>
            </a>
        </div>
    );
}
