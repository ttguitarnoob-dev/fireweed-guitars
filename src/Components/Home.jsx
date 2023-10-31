import { useEffect, useState } from "react"

export default function Home(){

    const [data, setData] = useState()


    async function handleFetch(){
       const url = "http://10.24.24.219:5000"
       const options = {
        method: "GET"
       }

       try{
        const response = await fetch(url, options)
       const data = await response.json()
       console.log('daatatat', data)
       setData(data)
       } catch(err){
        console.log('something terrible happend when fetching', err)
       }
    }

    useEffect(() => {
        handleFetch()
    }, [])


    return(
        <section>
            <div>
                <h2>POOOO</h2>
                {data && data.map((oneThing, index) => (
                    <div key={index}>
                    <p>Title:  {oneThing[1]}</p>
                    <p>Author: {oneThing[2]}</p>
                    <p>Pages: {oneThing[3]}</p>
                    </div>
                ))}
                
            </div>
        </section>
    )
}