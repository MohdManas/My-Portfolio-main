import React from 'react'
import "../Qualification/Qualification.css"
import { motion } from 'framer-motion'

const Qualification = () => {
  return (
    <div className="qualification" id='qualification'>
        <h1>Qualification</h1>
        <p>Education</p>

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
              delay:.5,
              type:"spring",
              stiffness:100,
            }
          }
        }}
        className="outer">
            <div className="education-lists">
                    <h2>Mohamed Sathak College of Arts and Science, Chennai.</h2>
                    <p>BCA - Bachelor in Computer Application</p>
                    <small>2017 - 2020</small>
                    <p className='Elpara'>Grade: 7.02 CGPA</p>
            </div>

            <div className="education-lists">
                    <h2>Full Stack Web Developement</h2>
                    <p>Besant Technogies , Chennai</p>
                    <small>September 2021 - January 2022</small>
            </div>

          
        </motion.div>
    </div>
  )
}

export default Qualification