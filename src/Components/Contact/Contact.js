import React from 'react'
import "../Contact/Contact.css"
import { AiOutlineArrowRight } from "react-icons/ai"
import { useRef } from 'react';
import emailjs from "emailjs-com"
import { motion } from 'framer-motion';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_y4xilmf', 'template_wnrg0us', form.current, 'V33sqdT7KvD5nLbPu')
        e.target.reset()
      };

  return (
    <div className="contact" id='contact'>
        <h1>Contact With Me</h1>

            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{once:true}}
              variants={{
                hidden:{
                  opacity:0,
                  x:150
                },
                show:{
                  opacity:1,
                  x:0,
                  transition:{
                    delay:.5
                  }
                }
              }}
            className="contact-right">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="input-box">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder='Enter Your Name' required/>
                    </div>

                    <div className="input-box">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder='Enter Your Email' required/>
                    </div>

                    <div className="input-box">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" placeholder='Enter Your Message'>

                        </textarea>
                    </div>
                    <button type='submit'>SUBMIT<AiOutlineArrowRight /></button>
                </form>
            </motion.div>
        </div>
  )
}

export default Contact

