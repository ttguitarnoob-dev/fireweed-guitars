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
                <h2>POOOO</h2>
                {data && data.map((oneThing, index) => (
                    <div key={index}>
                    <p>Name:  {oneThing.name}</p>
                    <p>Wood Type: {oneThing.wood_type}</p>
                    <p>Cost: {oneThing.cost}</p>
                    </div>
                ))}
                
            </div>
        </section>
    )
}