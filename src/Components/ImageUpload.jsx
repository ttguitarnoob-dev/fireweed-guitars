import axios from "axios";
import { useState } from "react";

export default function ImageUpload() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files);
        console.log("we settni state", event.target.files)
    };

    const handleUpload = async () => {
        for (let i = 0; i < file.length; i++) {
            try {
                const formData = new FormData();
                formData.append('file', file[i]);
                console.log('appended', file[i])
    
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

    return (
        <div>
            <input multiple type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}