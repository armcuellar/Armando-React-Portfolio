import React from "react";

function Resume() {
    return (
        <section className="mx-3
        ">
            <a
                href="https://drive.google.com/uc?id=1hdNavHnJBFflszckJRjocuchkGgHiZVh&export=download"
                download
            >
                Click to download Resume
            </a>
            <div>
                <h2>Education</h2>
                <div className="mx-3 px-3">
                    <h4>College Of Southern Maryland</h4>
                    <h5>La Plata, MD 20646</h5>
                    <p>A.A in Information Services Technology</p>
                </div>
                <h2>Skills</h2>
                <ul className="mx-3
                ">
                    <li>Bilingual (English/ Spanish)</li>
                    <li>Customer Service</li>
                    <li>HTML / CSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Team building</li>
                    <li>JavaScript API</li>
                    <li>JavaScript Framework</li>
                    <li>Adaptability</li>
                </ul>

            </div>

        </section>
    );
}

export default Resume;