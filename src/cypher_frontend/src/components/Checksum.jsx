import React, { useState } from "react";
import { cypher_backend } from 'declarations/cypher_backend';

function FileVerifier() {
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        desc: "",
    });
    const [verificationResult, setVerificationResult] = useState(null);

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

    const handleVerify = async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Generate SHA-256 hash for the uploaded file
        const hashFile = await generateFileSha256Hash(file);
        console.log("File:", file);
        console.log("SHA-256 Hash:", hashFile);

        // Call the verify function from cypher_backend
        cypher_backend.verify(hashFile).then((result) => {
            setVerificationResult(result ? "Original" : "Fake");
        });
    };

    return (
        <main style={{height : "100vh"}}>
            <p>Verify File Authenticity</p>
            <form onSubmit={handleVerify}>
                <div>
                    <p>Upload File:</p>
                    <input type="file" onChange={handleFileChange} />
                </div>
                <button type="submit">Verify</button>
            </form>
            {verificationResult && (
                <div>
                    <p>Verification Result: {verificationResult}</p>
                </div>
            )}
        </main>
    );
}

export default FileVerifier;
