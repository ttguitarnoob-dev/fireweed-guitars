import { useEffect, useState } from "react"

export default function Home(){

    const [data, setData] = useState()


    async function handleFetch(){
       const url = "http://10.24.24.13:5000"
       const options = {
        method: "GET"
       }

       let dataObject = []

       try{
        const response = await fetch(url, options)
       const data = await response.json()
       console.log('daatatat', data)
       setData(data[0][0])
       } catch(err){
        console.log('something terrible happend when fetching', err)
       }
    }

    useEffect(() => {
        handleFetch()
    }, [])

    console.log('smell', data)
    return(
        <section>
            <div>
                <h2>POOOO</h2>
                {data && data.map((oneThing, index) => (
                    <div key={index}>
                    <p>Title:  {oneThing.title}</p>
                    <p>Author: {oneThing.author}</p>
                    <p>Pages: {oneThing.pages}</p>
                    </div>
                ))}
                
            </div>
        </section>
    )
}