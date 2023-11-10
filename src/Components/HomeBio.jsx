export default function HomeBio({ imgPath, bgColor, text, title }) {


    return (
        <section className="home-bio" style={{ background: bgColor }}>
            <div className="text-paragraph">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div>
                <img src={imgPath} alt="bio" style={{borderRadius: "2rem", maxWidth: "90vw"}}></img>
            </div>
        </section>
    )
}