import InfoSection from "./InfoSection";

export default function About() {


    return (
        <section>
            <h2>Pooass</h2>
            <a href="/"><button>Home</button></a>
            <InfoSection
                title="About"
                text="This is all of the info that is about the website or the subject of the website at least, I don't know how interesting it owuld be to read an about page about an actual website because like why would you read about it why wouldn't you just go around the website and figure out all the about stuff on your own the website was made in 2023 about a guitar thing"
                imgPath="https://picsum.photos/400"
                bgColor="linear-gradient(47deg, rgba(98,93,76,1) 17%, rgba(100,102,107,1) 42%, rgba(99,101,105,1) 76%, rgba(87,85,74,1) 100%)"
            />
        </section>
    )
}