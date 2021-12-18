export default function Techstack() {
    const technologies = [
        "HTML",
        "CSS",
        "JS",
        "SASS",
        "TailwindCSS",
        "Styled components",
        "ReactJS",
        "Redux",
        "NextJS",
        "Jest",
    ];
    return (
        <div>
            <h2 className="text-2xl">Techstack</h2>
            <div>
                {technologies.map((name, index) => {
                    const imagePath = "/" + name.toLowerCase() + ".svg";
                    return (
                        <div key={index}>
                            <img src={imagePath} alt={`${name} logo`} />
                            <p>{name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
