import { useEffect, useState } from "react"

export default function Guitars({ guitars }){
    const guitarData = guitars
    // const [data, setData] = useState()


    // async function handleFetch() {
    //     const url = "https://flaskapi.ttguitarnoob.cloud/guitars"
    //     const options = {
    //         method: "GET"
    //     }


    //     try {
    //         const response = await fetch(url, options)
    //         console.log('respsons', response)
    //         const data = await response.json()

    //         console.log('daatatat', data)
    //         setData(data)
    //     } catch (err) {
    //         console.log('something terrible happend when fetching', err)
    //     }
    // }

    // useEffect(() => {
    //     handleFetch()
    // }, [])

    return (
        <section>
            poooo
            <div>
                <h1>POOOO</h1>
                <a href="/"><button>HOME</button></a>
                <a href="/guitars/new"><button>Add Guitar</button></a>
                {guitarData && guitarData.map((oneThing, index) => (
                    <div key={index}>
                    <p>Name:  <a href={`/guitars/${oneThing.id}`}>{oneThing.name}</a></p>
                    <p>Description: {oneThing.description}</p>
                    </div>
                ))}
                
            </div>
        </section>
    )
}