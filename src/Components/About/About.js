import React from 'react'
import "../About/About.css"
import CV from "../../assets/Mohammed Manas CV.pdf"
import { motion } from 'framer-motion'
import profile from "../../assets/Profilepic.jpg"


const About = () => {
  return (
    <div className="about" id='about'>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {
            opacity: 0,
            x: -100
          },
          show: {
            opacity: 1,
            x: 0,
            transition: {
              duration: .5,
              delay: .5
            }
          }
        }}
        className="about-left">
        <img src={profile} alt="myImage" />
      </motion.div>

      <div className="about-right">
        <h1>About Me</h1>
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
                delay: .5
              }
            }
          }}
          className="aboutMe-content">
          <p>Experienced Front-end Developer with 3.5 years in React.js and a strong
            background in JavaScript, CSS, HTML, Redux, Context API, and React Native.
            Skilled in crafting dynamic, responsive web applications and enhancing site
            performance through regular maintenance and optimization.
            Proficient with Ant Design (Antd) and Bootstrap.
            Committed to staying current with emerging technologies and trends to drive
            innovation and create cutting-edge web solutions.</p>
          <div className="cv">
            <a href={CV} download>Check Resume</a>

            <div className="details-group">
              <div className="details">
                <h2>Completed Projects</h2>
                <p>3+</p>
              </div>

              <div className="details">
                <h2>Year Of Expericene</h2>
                <p>3.5</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About