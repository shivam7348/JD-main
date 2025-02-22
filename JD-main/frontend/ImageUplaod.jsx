import React, { useState } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import app from './src/firebase';

function ImageUpload() {
    const [uploading, setUploading] = useState(false);
    const [imageURL, setImageURL] = useState("");

    async function handleImageChange(e) { // Added 'e' parameter and made the function async
        const image = e.target.files[0];
        if (image) {
            try {
                setUploading(true);
                const storage = getStorage(app);
                const storageRef = ref(storage, "images/" + image.name);
                await uploadBytes(storageRef, image); // Await the upload
                const downloadURL = await getDownloadURL(storageRef); // Await the URL fetch
                setImageURL(downloadURL);
            } catch (error) {
                console.log(error);
            } finally {
                setUploading(false);
            }
        }
    }

    return (
        <div>
            <input type="file" onChange={handleImageChange} />
            <button disabled={uploading}>
                {uploading ? "Uploading..." : "Upload Image"}
            </button>

            {imageURL && (
                <img src={imageURL} style={{ maxWidth: 150 }} alt="Uploaded" />
            )}
        </div>
    );
}

export default ImageUpload;