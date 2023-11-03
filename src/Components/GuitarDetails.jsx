import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function GuitarDetails() {

    const { id } = useParams()
    console.log('ioidid', id)

    const [guitar, setGuitar] = useState()

    async function handleFetch() {
        const url = `http://10.24.24.13:5000/guitars/${id}`
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
            <h1>DETIlalss</h1>
            <a href="/guitars"><button>Back to guitars</button></a>
            {guitar && 
            <div>
                <p>Name: {guitar.name}</p>
                <p>Wood Type: {guitar.wood_type}</p>
                <p>Cost: {guitar.cost}</p>
            </div>
            }
        </section>
    )
}