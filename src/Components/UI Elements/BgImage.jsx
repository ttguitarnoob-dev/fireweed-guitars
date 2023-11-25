import { Image } from "@nextui-org/react"

export default function BgImage({ imgPath }) {


    return (
        <section className="img-section">

            <Image
                src={imgPath}
                alt="Background Section"
                radius="none"
            />
        </section>
    )
}