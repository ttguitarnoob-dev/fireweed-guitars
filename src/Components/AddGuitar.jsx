import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function AddGuitar() {



    let initialInput = {
        photos: []
    }

    let fileList = []
    const navigate = useNavigate()

    const [file, setFile] = useState(null);

    const handlePhotoChange = (e) => {
        setFile(e.target.files);
        console.log("we settni state", e.target.files)
        for (let i = 0; i < e.target.files.length; i++) {
            initialInput.photos.push(`/home/travis/frontend/fireweed-guitars/build/static/media/${e.target.files[i].name}`)
        }
    };

    function handleChange(e){
        initialInput[e.target.name] = e.target.value
        console.log('cahnaged', initialInput)
    }

    const handleUpload = async () => {
        for (let i = 0; i < file.length; i++) {
            try {
                const formData = new FormData();
                formData.append('file', file[i]);
                console.log('uploading this file', file[i])
    
                await axios.post('https://fireweed-photo.ttguitarnoob.cloud/photos', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
    
                console.log('File uploaded successfully');
            } catch (error) {
                console.error('Error uploading file:', error.message);
            }
        }
    };

    // function handlePhotoChange(e) {
    //     console.log('photochanged', e.target.files)
    //     for (let i = 0; i < e.target.files.length; i++) {
    //         initialInput.photos.push(`/static/media/${e.target.files[i].name}`)
    //     }
    //     fileList = e.target.files
    // }

    async function handleSubmit(e){
        e.preventDefault()
        console.log('submitted', initialInput)
        const url = "https://flaskapi.ttguitarnoob.cloud/guitars"
        const options = {
            method: "POST",
            body: JSON.stringify(initialInput),
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        }
        console.log('submittadaada', fileList)

        handleUpload()

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