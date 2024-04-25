import React, { useState } from "react";
import "../style/cypher.css";
import {cypher_backend} from 'declarations/cypher_backend';

const fileTypes = ["JPG", "PNG", "GIF"];

function Cypher() {
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        desc: "",
    });
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    async function generateFileSha256Hash(file) {
        const fileReader = new FileReader();
        const arrayBuffer = await new Promise((resolve, reject) => {
            fileReader.onload = event => resolve(event.target.result);
            fileReader.onerror = reject;
            fileReader.readAsArrayBuffer(file);
        });
        const buffer = new Uint8Array(arrayBuffer);
        const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

    const handleFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
    };

    const handleUpload = async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Generate SHA-256 hash for the uploaded file
        const hashFile = await generateFileSha256Hash(file);
        console.log("File:", file);
        console.log("Desc:", formData.desc);
        console.log("SHA-256 Hash:", hashFile);
        cypher_backend.storeEvidence(hashFile, formData.desc, file.name).then(()=>{
            alert("Submitted");
        })

        // Add uploaded file to the list
        setUploadedFiles((prevFiles) => [...prevFiles, file]);

        // Clear form data after upload (optional)
        setFile(null);
        setFormData({ name: "", desc: "" });
    };

    return (
        <main id="cypher">
            <p>Upload Digital Documents</p>
            <form className="file-area" onSubmit={handleUpload}>
                <div className="file-upload">
                    <p style={{ fontSize: "30px", color: "black", margin: "5px 0 20px 0" }}>
                        Upload
                    </p>
                    <input type="file" onChange={handleFileChange} name="file" id="file" multiple />
                </div>
                <div className="data">
                    <p style={{ fontSize: "10px", color: "black" }}>Case Details: </p>
                    <input
                        type="text"
                        name="name"
                        value={formData.name} // Bind value to state
                        onChange={handleChange}
                    />
                </div>
                <div className="data">
                    <p style={{ fontSize: "10px", color: "black" }}>Description: </p>
                    <textarea
                        type="text"
                        name="desc"
                        value={formData.desc} // Bind value to state
                        onChange={handleChange}
                    />
                </div>
                <div className="file">
                    <div className="list">
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", color : "black" }}>
                            {uploadedFiles.map((uploadedFile, index) => (
                                <li key={index}>{uploadedFile.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="button">
                        <button id="btn" type="submit">
                            Upload
                        </button>
                    </div>
                </div>
            </form>
        </main>
    );
}

export default Cypher;
