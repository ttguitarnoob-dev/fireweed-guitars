import { useEffect, useState } from "react"

export default function Guitars(){
    const [data, setData] = useState()


    async function handleFetch() {
        const url = "http://10.24.24.13:5000/guitars"
        const options = {
            method: "GET"
        }

        let dataObject = []

        try {
            const response = await fetch(url, options)
            console.log('respsons', response)
            const data = await response.json()

            console.log('daatatat', data)
            setData(data)
        } catch (err) {
            console.log('something terrible happend when fetching', err)
        }
    }

    useEffect(() => {
        handleFetch()
    }, [])

    console.log('smell', data)
    return (
        <section>
            <div>
                <h1>POOOO</h1>
                <a href="/"><button>HOME</button></a>
                {data && data.map((oneThing, index) => (
                    <div key={index}>
                    <p>Name:  <a href={`/guitars/${oneThing.id}`}>{oneThing.name}</a></p>
                    <p>Wood Type: {oneThing.wood_type}</p>
                    <p>Cost: {oneThing.cost}</p>
                    </div>
                ))}
                
            </div>
        </section>
    )
}