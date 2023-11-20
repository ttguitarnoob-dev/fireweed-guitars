import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function GuitarDetails() {

    const { id } = useParams()
    console.log('ioidid', id)

    const [guitar, setGuitar] = useState()

    async function handleFetch() {
        const url = `https://flaskapi.ttguitarnoob.cloud/guitars/${id}`
        const options = {
            method: "GET"
        }

        try {
            console.log("fetching at url", url)
            const response = await fetch(url, options)
            console.log('resposnse', response)
            const data = await response.json()
            console.log('what we puttin in dtate', data[0])
            setGuitar(data[0])
        } catch (err) {
            console.log('something terrible happened when fetching', err)
        }
    }

    useEffect(() => {
        handleFetch()
        console.log('things', guitar)
    }, [])

    return (
        <section>
            {guitar &&
                <div>
                    <h2>Name</h2>
                    <p>{guitar.name}</p>
                    <h2>Description</h2>
                    <p>{guitar.description}</p>
                    <h2>Top Wood</h2>
                    <p>{guitar.top_wood}</p>
                    <h2>Back and Sides Wood</h2>
                    <p>{guitar.back_sides_wood}</p>
                    <h2>Neck Wood</h2>
                    <p>{guitar.neck_wood}</p>
                    <h2>Shape</h2>
                    <p>{guitar.shape}</p>
                    <h2>Construction Details</h2>
                    <p> {guitar.construction}</p>
                    {guitar.photos && guitar.photos.map((onePhoto, index) => (
                        <img src={onePhoto} height={400} width={400}></img>
                    ))}
                </div>
            }
        </section>
    )
}