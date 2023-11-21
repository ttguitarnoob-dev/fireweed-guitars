import InfoSection from "./InfoSection"
import CardInfoSection from "./UI Elements/CardInfoSection"


export default function Guitars({ guitars }) {


    return (
        <section>
            <InfoSection
                title="Gallery"
                bgColor="linear-gradient(310deg, rgba(15,17,19,1) 17%, rgba(73,78,84,1) 100%)"
                text="Enjoy our gallery of fine handcrafted guitars"
            />
            <>
                {guitars && guitars.map((oneGuitar, index) => (


                    <CardInfoSection
                        imgPath={oneGuitar.photos[0]}
                        bgColor={index}
                        title={oneGuitar.name}
                        text={oneGuitar.description}
                        id={oneGuitar.id}
                    />

                ))}

            </>
        </section>
    )
}