import React from 'react'
import "../Skills/Skills.css"
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div className="skills" id='skills'>
      <h1>Skills</h1>
      <div className="skills-container">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {
              opacity: 0,
              x: 100
            },
            show: {
              opacity: 1,
              x: 0,
              transition: {

                type: "spring",
                stiffness: 100,
              }
            }
          }}
          className="skills-group">
          <p><span>Frontend </span>Technologies</p>
          <div className="skills-left">
            <div className="skills-list">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.svg" alt="html5" />
              <p>HTML</p>
            </div>

            <div className="skills-list">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.svg" alt="css3" />
              <p>CSS</p>
            </div>

            <div className="skills-list">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.svg" alt="bootstrap" />
              <p>Bootstrap</p>
            </div>

            <div className="skills-list">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.svg" alt="bootstrap" />
              <p>Tailwind CSS</p>
            </div>

            <div className="skills-list">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png" alt="javascript" />
              <p>Javascript</p>
            </div>

            <div className="skills-list">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.svg" alt="react js" />
              <p>React Js</p>
            </div>

{/* 
            <div className="skills-list">
              <img src="/path-to-your-logo-folder/ant-design.svg" alt="Ant Design Logo" />
              <p>Ant Design</p>
            </div> */}


            <div className="skills-list">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.svg" alt="redux" />
              <p>Redux</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {
              opacity: 0,
              x: 100
            },
            show: {
              opacity: 1,
              x: 0,
              transition: {
                duration: .5,
                delay: .5,
                type: "spring",
                stiffness: 100,
              }
            }
          }}
          className="skills-group">
          <p>Others</p>
          <div className="skills-right">
            <div className="skills-list">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/git-icon.svg" alt="git" />
              <p>Git</p>
            </div>

            <div className="skills-list">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png" alt="git" />
              <p>GitHub</p>
            </div>

            <div className="skills-list">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.svg" alt="git" />
              <p>VS Code</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

  )
}

export default Skills