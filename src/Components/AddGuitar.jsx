import { useNavigate } from "react-router-dom"

export default function AddGuitar() {

    let initialInput = {
        photos: []
    }

    let fileList = []
    const navigate = useNavigate()

    function handleChange(e){
        initialInput[e.target.name] = e.target.value
        console.log('nammme', e.target.name)
        console.log('cahnaged', initialInput)
    }

    function handlePhotoChange(e) {
        console.log('photochanged', e.target.files)
        for (let i = 0; i < e.target.files.length; i++) {
            initialInput.photos.push(`/static/media/${e.target.files[i].name}`)
        }
        fileList = e.target.files
    }

    async function handleSubmit(e){
        e.preventDefault()
        console.log('submitted', initialInput)
        const url = "https://flaskapi.ttguitarnoob.cloud/guitars"
        const photoUrl = "http://localhost:3005/photos"
        const options = {
            method: "POST",
            body: JSON.stringify(initialInput),
            headers: {
                "Content-Type": "application/json"
            },
        }
        console.log('submittadaada', fileList)

        try{
            await fetch(photoUrl, {
                method: "POST",
                headers: {
                    "Content-type": "multipart/form-data"
                },
                body: fileList
            })
        } catch (err) {
            console.log('stupidity happened in general', err)
        }

        // try {
        //     const response = await fetch(url, options)
        //     console.log('here')
        //     console.log('here 2')
        //     navigate('/guitars')
        //     return response
        // } catch(err) {
        //     console.log('the world ended when trying to create that', err)
        // }
    }

    return(
        <section>
            <h1>Add Guitar</h1>
            <a href="/guitars" ><button>back to guitars</button></a>
        <form enctype="multipart/form-data" onSubmit={handleSubmit}>
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
            <input
            type="file"
            id="file"
            placeholder="Construction Details"
            name="file"
            multiple
            onChange={handlePhotoChange}
            />
            <button>Submit</button>
        </form>
        </section>
    )
}