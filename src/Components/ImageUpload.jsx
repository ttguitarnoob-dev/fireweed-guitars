import axios from "axios";
import { useState } from "react";

export default function ImageUpload() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', file);

            await axios.post('http://127.0.0.1:3005/photos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file:', error.message);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}