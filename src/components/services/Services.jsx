import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id="services">
      <h5>My Journey</h5>
      <h2>Education & Work Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Education</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>MindX Technology School - Web Fullstack</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Banking Academy - Finance & Banking</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Activities</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Microsoft Office Specialist Team of Banking Academy</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>SvnhForum - The official Forum of Banking Academy</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Work Experience</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Asia Commercial Bank</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services