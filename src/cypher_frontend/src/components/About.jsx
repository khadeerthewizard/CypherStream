import React from 'react';
import "../style/about.css";

function About() {
    return (
        <div className="about-container"> {/* Add a container class for styling */}
            <h1>Digital Evidence System on ICP Blockchain</h1>
            <hr></hr>

            <section>
                <h2>Project Overview</h2>

                <p>
                    This project aims to develop a digital evidence system built on the ICP blockchain.
                    The system leverages the unique properties of blockchain technology to improve
                    the security, transparency, and efficiency of digital evidence management.
                </p>
            </section>

            <section>
                <h2>Pros</h2>

                <ul>
                    <li>
                        <strong>Enhanced Security:</strong> ICP blockchain offers immutability, meaning data
                        cannot be altered once recorded. This ensures the authenticity and integrity of
                        digital evidence.
                    </li>
                    <li>
                        <strong>Improved Chain of Custody:</strong> Blockchain provides a transparent record
                        of all actions taken on the evidence, creating a clear chain of custody.
                    </li>
                    <li>
                        <strong>Increased Tamper Evident:</strong> Modifications to the evidence will be
                        reflected in the blockchain, making tampering easily detectable.
                    </li>
                    <li>
                        <strong>Decentralized Storage:</strong> Distributing evidence across the blockchain
                        network eliminates reliance on a single point of failure and reduces the risk of
                        data loss.
                    </li>
                    <li>
                        <strong>Potential for Collaboration:</strong> Authorized parties can access and share
                        evidence securely on the blockchain, streamlining collaboration.
                    </li>
                </ul>

            </section>
            <section>
                <h2>Cons</h2>

                <ul>
                    <li>
                        <strong>Scalability Concerns:</strong> Storing large amounts of evidence directly on
                        the blockchain can be expensive and impact scalability.
                    </li>
                    <li>
                        <strong>Technical Complexity:</strong> Developing and maintaining a blockchain-based
                        system requires expertise in blockchain technology.
                    </li>
                    <li>
                        <strong>Regulatory Uncertainty:</strong> The legal implications of using blockchain for
                        digital evidence are still evolving.
                    </li>
                    <li>
                        <strong>Limited Adoption:</strong> Widespread adoption of ICP blockchain for digital
                        evidence management may take time.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Conclusion</h2>

                <p>
                    Building a digital evidence system on ICP blockchain offers significant advantages
                    for data security, chain of custody, and tamper-proofing. However, scalability,
                    technical complexity, regulatory considerations, and limited adoption need to be
                    addressed. Carefully weighing the pros and cons will help determine if this approach
                    aligns with your project goals.
                </p>
            </section>
        </div>
    );
}

export default About;
