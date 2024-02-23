export default function Project({ projects }) {
    return (
        <div className="Projects-Main-Container">
            <div className="heading">
                <h2>Portfolio</h2>
            </div>
            <div className="Projects-Container">
                {projects.map(({ Title, Image, Link, Key }) => {
                    return (
                        <a key={Key} href={Link}>
                            <img src={Image} alt={Title} />
                        </a>
                    )
                })}
            </div >
        </div>
    )
}