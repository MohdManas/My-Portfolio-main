import "../Header/Header.css"
import { motion } from 'framer-motion'

const Header = () => {

  return (
    <div className="header" id='header'>
      <div className="hero-section">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {
              opacity: 0,
              y: 60,
              transition: {
                type: "spring",
                stiffness: 300
              }
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                delay: 1
              }
            }
          }}
          viewport={{ once: true }}


          className="hero-left">
          <h1>Hi, I am</h1>
          <h2>
            <span >Mohammed</span>
            Manas
          </h2>
          <p>FRONTEND WEB & APP DEVELOPER</p>


          <div className="social-links-groups">
            <span>FIND WITH ME</span>
            <div className="social-links">
              <div className="my-social">
                <a href="https://www.linkedin.com/in/mohammed-manas-5692061ba/">
                  <img src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg" alt="linkedin" />
                </a>
              </div>

              <div className="my-social">
                <a href="https://github.com/MohdManas">
                  <img src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" alt="github" />
                </a>
              </div>

              {/* <div className="my-social">
                <a href="https://codepen.io/Vijay-the-dev">
                  <img src="https://www.svgrepo.com/show/349323/codepen.svg" alt="codepen" />
                </a>
              </div> */}

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Header