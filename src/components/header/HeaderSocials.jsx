import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/t%E1%BA%A1-th%C3%A0nh-%C4%91%E1%BA%A1t-841233102/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/TaTaDa229" target="_blank"><FaGithub/></a>
        <a href="https://www.topcv.vn/p/ta-thanh-dat" target="_blank"><CgProfile/></a>
    </div>
  )
}

export default HeaderSocials