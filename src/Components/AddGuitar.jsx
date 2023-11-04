import { useNavigate } from "react-router-dom"

export default function AddGuitar() {

    let initialInput = {}
    const navigate = useNavigate()

    function handleChange(e){
        initialInput[e.target.name] = e.target.value
        console.log('nammme', e.target.name)
        console.log('cahnaged', initialInput)
    }

    async function handleSubmit(e){
        e.preventDefault()
        console.log('submitted', initialInput)
        const url = "https://flaskapi.ttguitarnoob.cloud/guitars"
        const options = {
            method: "POST",
            body: JSON.stringify(initialInput),
            headers: {
                "Content-Type": "application/json"
            },
        }

        try {
            const response = await fetch(url, options)
            console.log('here')
            console.log('here 2')
            navigate('/guitars')
            return response
        } catch(err) {
            console.log('the world ended when trying to create that', err)
        }
    }

    return(
        <section>
            <h1>Add Guitar</h1>
            <a href="/guitars" ><button>back to guitars</button></a>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            />
            <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleChange}
            />
            <input
            type="text"
            placeholder="Top Wood"
            name="top_wood"
            onChange={handleChange}
            />
            <input
            type="text"
            placeholder="Back and Sides Wood"
            name="back_sides_wood"
            onChange={handleChange}
            />
            <input
            type="text"
            placeholder="Neck Wood"
            name="neck_wood"
            onChange={handleChange}
            />
            <input
            type="text"
            placeholder="Shape"
            name="shape"
            onChange={handleChange}
            />
            <input
            type="text"
            placeholder="Construction Details"
            name="construction"
            onChange={handleChange}
            />
            <button>Submit</button>
        </form>
        </section>
    )
}