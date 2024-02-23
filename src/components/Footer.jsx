export default function Footer() {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
        <>
            {/* Social Media */}
            <div className="socialmedia-img-container">
                <a href="https://github.com/Antoniomj10">
                    <img src="../src/assets/images/github.png" alt="Github profile" />
                </a>
                <a href="https://www.linkedin.com/in/antonio-johnson-47a2a5215/">
                    <img src="../src/assets/images/linkedin.png" alt="Linkedin profile" />
                </a>
                <a href="https://dev.to/ant_ant0">
                    <img src="../src/asstes/images/dev.png" alt="dev community" />
                </a>
            </div>
        </>
    );
}


