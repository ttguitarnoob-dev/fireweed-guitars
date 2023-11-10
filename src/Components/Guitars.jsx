
import InfoSection from "./InfoSection"
import CardSection from "./UI Elements/CardSection"

export default function Guitars({ guitars }) {


    return (
        <section>
            poooo
            <div>
                <h1>POOOO</h1>
                <a href="/"><button>HOME</button></a>
                <a href="/guitars/new"><button>Add Guitar</button></a>
                <InfoSection
                    title="Guitars"
                    text = "Explore some of the cool guitars we made" />
                <CardSection dataArray={guitars} imageUrl={"https://picsum.photos/300"} linkUrl="/guitars" />
            </div>
        </section>
    )
}