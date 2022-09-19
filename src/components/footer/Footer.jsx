import React from 'react'
import './footer.css'
import {FaFacebookF, FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import { BsLinkedin } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">Dat Ta</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">My Journey</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      {/* <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Testimonials/>
      <Portfolio/>
      <Contact/>
      <Footer/> */}

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/t%E1%BA%A1-th%C3%A0nh-%C4%91%E1%BA%A1t-841233102/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/TaTaDa229" target="_blank"><FaGithub/></a>
        <a href="https://www.topcv.vn/p/ta-thanh-dat" target="_blank"><CgProfile/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DatTa. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer