import React from 'react'
import "../Projects/Projects.css"
import { projects } from '../../Data/data'

import {FiExternalLink} from "react-icons/fi"

const Projects = () => {
  return (
    <div className="projects" id='projects'>
        <h1>Projects</h1>
        <p>Here are some of my projects.</p>

        <div className="projects-container">
          {projects.map((val)=>(
            <div key={val.title} className="projects-box">
                <img src={val.src} alt="projectImg" />
                    <div className="projects-content">
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                        <div className="demo-links">
                            <a href={val.href1} target='blank'>Github</a>
                            <a href={val.href2} target='blank'>Live Demo <FiExternalLink /></a>
                        </div>
                    </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Projects