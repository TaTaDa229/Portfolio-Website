import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>SASS</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Javascript</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>ReactJS</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>NodeJS</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>ExpressJS</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>MongoDB</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACKEND */}
        <div className="experience__backend">
        <h3>Other Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Git, Postman</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Toeic 700+</h4>
                {/* <small className="text-light">intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Word, Excel, Powerpoint</h4>
                {/* <small className="text-light">intermediate</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience