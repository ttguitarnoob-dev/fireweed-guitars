import { Image } from "@nextui-org/react"

export default function InfoSection({ imgPath, bgColor, text, title, isFlipped }) {

    const DisplayOrder = () => {
        if (!isFlipped) {
            return (
                <>
                    <div className="text-paragraph">
                        {title && <h2 className="title font-medium text-5xl">{title}</h2>}
                        <p>{text}</p>
                    </div>
                    {imgPath && <div>
                        <Image
                            src={imgPath}
                            alt="Info Section"
                            loading="lazy"
                        />

                    </div>}
                </>
            )
        } else {
            return (
                <>
                    {imgPath && <div>
                        <Image
                            loading="lazy"
                            src={imgPath}
                            alt="Info Section"
                        />
                    </div>}
                    <div className="text-paragraph">
                        {title && <h2 className="title font-medium text-5xl">{title}</h2>}
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