import React from "react";
import coverImage from "../../assets/images/self-img.jpeg"

function About() {
    return (
        <section>
            <h1 id="about">About Me</h1>
            <img src={coverImage} className="my-2" style={{ width: "30vh" }} alt="cover" />
            <div>
                <p>I am a dedicated and persevering problem solver. With every new opportunity I look forward to learning new skills to use in current and future projects.</p>
            </div>
        </section>
    );
}

export default About;