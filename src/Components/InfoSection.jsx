export default function InfoSection({ imgPath, bgColor, text, title, isFlipped }) {

    const DisplayOrder = () => {
        if (!isFlipped) {
            return (
                <>
                    <div className="text-paragraph">
                        {title && <h2>{title}</h2>}
                        <p>{text}</p>
                    </div>
                    {imgPath && <div>
                        <img src={imgPath} alt="Hello" style={{ borderRadius: "20px" }} />
                    </div>}
                </>
            )
        } else {
            return (
                <>
                    {imgPath && <div>
                        <img src={imgPath} alt="Hello" style={{ borderRadius: "20px" }} />
                    </div>}
                    <div className="text-paragraph">
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>

                </>
            )
        }

    }

    return (
        <section className="home-bio" style={{ background: bgColor }}>
            <DisplayOrder />
        </section>
    )
}