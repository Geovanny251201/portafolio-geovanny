import React from 'react'
import fotoPerfil from '../assets/img/foto2.png'
import Typewriter from 'typewriter-effect';
import {faBrain} from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const About = () => {
  return (
    <section className='about d-flex '  id="aboutMe" >
    <div className=" btn1">
    <div id="container-stars">
          <div id="stars"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      <div className=" row ">
    
        <div className="col-xl-4 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
          <div className="tarjetaFoto mt-2 mb-2 d-flex justify-content-center">
            <img className="foto" src={fotoPerfil} alt="" />
          </div>
        </div>
        <div className="col-xl-8 col-md-8 col-sm-6">
          <div className="row  ">
            <div className=" col-12 d-flex justify-content-center align-items-center mt-3 mb-1">
           
              <label className="tarjetaInput text-center ">
                 <Typewriter
                  options={{
                  strings: ['¿Who is Geovanny Araya?'],
                  autoStart: true,
                  loop: true,
                  }}
                 
                      />
                      
                      <FontAwesomeIcon icon={faSearch} />
                      
                      
              </label>
              
            </div>
          </div>
          <div className="row">
            <div className='col-1'>

            </div>
            <div className='col-10'>
            <div className="tarjetaInfo mt-5">
              <p>I am enthusiastic junior front-end web developer currently undergoing university education. My great motivation is to learn and continue growing in this digital world, offering my commitment and teamwork skills to achieve great projects and innovative solutions. I consider myself a creative and proactive person, always ready to face new challenges and acquire new skills to further improve in my career.</p>
            </div>
            </div>
            <div className='col-1'>

</div>
          
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-4 col-sm-12 d-flex justify-content-center mt-3 mb-3 ">
              <div className="tarjeta mt-3">
                <div className="row">
                  <div className="col-12">
                    <h4 className="text-center text-white mt-2">Languages</h4>
                  </div>
                </div>
                <div className='row d-flex justify-content-center'>
                <FontAwesomeIcon icon={faGlobeAmericas} />

                </div>
                <div className="row">
                  <div className="col-12 text-center mt-4">
                    <h6>English Level B1</h6>
                    <h6>Spanish Native</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-12 d-flex justify-content-center mt-3  mb-3">
              <div className="tarjeta mt-3">
                <div className="row">
                  <div className="col-12">
                    <h4 className="text-center text-white mt-2">Education</h4>
                  </div>
                </div>
                <div className='row d-flex justify-content-center'>
                <FontAwesomeIcon icon={faUserGraduate} />

                </div>
                <div className="row">
                  <div className="col-12 text-center mt-4">
                    <h6>2020-Current | Systems Engineer in<br />Universidad de Costa Rica</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-12 d-flex justify-content-center mt-3  mb-3">
              <div className="tarjeta mt-3">
                <div className="row">
                  <div className="col-12">
                    <h4 className="text-center text-white mt-2">Soft Skills</h4>
                  </div>
                </div>
                <div className='row d-flex justify-content-center'>
                <FontAwesomeIcon icon={faBrain} />

                </div>
                <div className="row">
                  <div className="col-12 text-center mt-4 ">
                    <div className="row">
                      <div className="col-6">
                        <h6>Creativity</h6>
                        <h6>Patience</h6>
                        <h6>Collaboration</h6>
                      </div>
                      <div className="col-6">
                        <h6>Team Work</h6>
                        <h6>Proactive</h6>
                        <h6>Flexibility</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1></h1>
        </div>
      </div>
    </div>
  </section>
  )
}
