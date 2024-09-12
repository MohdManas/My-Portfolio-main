import React from 'react'
import "../About/About.css"
import CV from "../../assets/Manas CV (1)-1-2.pdf"
import { motion } from 'framer-motion'
import profile from "../../assets/WhatsApp Image 2024-08-16 at 10.10.30 AM.jpeg"


const About = () => {
  return (
    <div className="about" id='about'>
        <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
        variants={{
          hidden:{
            opacity:0,
            x:-100
          },
          show:{
            opacity:1,
            x:0,
            transition:{
              duration:.5,
              delay:.5
            }
          }
        }}
        className="about-left">
              <img src={profile} alt="myImage"/>
        </motion.div>

        <div className="about-right">
            <h1>About Me</h1>
          <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{once:true}}
          variants={{
            hidden:{
              opacity:0,
              x:100
            },
            show:{
              opacity:1,
              x:0,
              transition:{
                duration:.5,
                delay:.5
              }
            }
          }}
          className="aboutMe-content">
            <p>Highly skilled and motivated Front-end Developer with 1.10 year of hands-on experience in creating dynamic and responsive web applications using React.js. Eager to contribute my expertise and creativity to drive innovation in web development projects. My Key Skills are: ReactJS, JavaScript, CSS, HTML, Redux, Context API,ReactJS Library,React Native, Antd,Bootstarp,Front end Development, Hooks, Redux Library, ReactJS.</p>
            <div className="cv">
              <a href={CV} download>Check Resume</a>

              <div className="details-group">
                <div className="details">
                  <h2>Completed Projects</h2>
                  <p>3+</p>
                </div>

                <div className="details">
                  <h2>Year Of Expericene</h2>
                  <p>1.10</p>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
    </div>
  )
}

export default About