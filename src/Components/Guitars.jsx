import CardInfoSection from "./UI Elements/CardInfoSection"


export default function Guitars({ guitars }) {


    return (
        <section>
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