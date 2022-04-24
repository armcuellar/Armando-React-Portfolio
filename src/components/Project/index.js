import React, { useState } from "react";

function Project() {
    // image
    // title
    // link to deployment
    // link to repo
    const [projects] = useState([
        {
            image: 'OgreQuest.PNG',
            title: 'OgreQuest',
            repoLink: 'https://github.com/8bitgaming/OgreQuest',
            deploymentLink: 'https://ogrequest.herokuapp.com/'
        },
        {
            image: 'novel_experience_img.png',
            title: 'Novel Experience',
            repoLink: 'https://github.com/Jbiske/Novel_Experiences',
            deploymentLink: 'https://jbiske.github.io/Novel_Experiences/'
        },
        {
            image: 'weather.png',
            title: 'Weather Dashboard',
            repoLink: 'https://github.com/armcuellar/weather-dashboard',
            deploymentLink: 'https://armcuellar.github.io/weather-dashboard/'
        },
        {
            image: 'tech_blog.png',
            title: 'Tech Blog',
            repoLink: 'https://github.com/armcuellar/tech-blog',
            deploymentLink: 'https://ancient-bastion-37816.herokuapp.com/'
        },
        {
            image: 'horiseonImg.png',
            title: 'Horiseon',
            repoLink: 'https://github.com/armcuellar/horiseon-refactoring',
            deploymentLink: 'https://armcuellar.github.io/horiseon-refactoring/'
        }
    ])

    return (
        <section>
            <div className="row">
                {projects.map((project) => (
                    <section className="col-12 col-sm-6">

                        <div className="projectDiv d-flex align-items-center justify-content-center">
                            <div className="position-absolute">
                                <h2 className="d-flex align-items-center text-uppercase">{project.title}</h2>
                                <div className="w-100">
                                    <a href={project.repoLink} target="_blank" rel="noreferrer">
                                        Project's repo
                                    </a>
                                </div>
                                <a href={project.deploymentLink} target="_blank" rel="noreferrer">
                                    Project's Deployment
                                </a>
                            </div>
                            <img src={require(`../../assets/portImages/${project.image}`)}
                                alt={project.title}
                                className="w-100 h-100I"
                                key={project.image} />


                        </div>

                    </section>
                ))}
            </div>
        </section>
    );
}

export default Project;