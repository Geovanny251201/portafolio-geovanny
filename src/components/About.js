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
          <div className="tarjetaFoto mt-2 mb-2 d-flex justify-content-center align-items-center">
            <img className="foto" src={fotoPerfil} alt="" />
          </div>
        </div>
        <div className="col-xl-8 col-md-8 col-sm-6">
          <div className="row  ">
            <div className=" col-12 d-flex justify-content-center align-items-center mt-3 mb-1">
           
              <label className="tarjetaInput text-center ">
                 <Typewriter
                  options={{
                  strings: ['¿Quién es Geovanny Araya?'],
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
              <p>Soy un entusiasta desarrollador web front-end júnior que actualmente está cursando estudios universitarios. Mi gran motivación es aprender y seguir creciendo en este mundo digital, ofreciendo mi compromiso y capacidad de trabajo en equipo para lograr grandes proyectos y soluciones innovadoras. Me considero una persona creativa y proactiva, siempre lista para enfrentar nuevos desafíos y adquirir nuevas habilidades para seguir mejorando en mi carrera.</p>
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
                    <h4 className="text-center text-white mt-2">Idiomas</h4>
                  </div>
                </div>
                <div className='row d-flex justify-content-center'>
                <FontAwesomeIcon icon={faGlobeAmericas} />

                </div>
                <div className="row">
                  <div className="col-12 text-center mt-4">
                    <h6>Inglés Nivel B1</h6>
                    <h6>Español Nativo</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-12 d-flex justify-content-center mt-3  mb-3">
              <div className="tarjeta mt-3">
                <div className="row">
                  <div className="col-12">
                    <h4 className="text-center text-white mt-2">Educación</h4>
                  </div>
                </div>
                <div className='row d-flex justify-content-center'>
                <FontAwesomeIcon icon={faUserGraduate} />

                </div>
                <div className="row">
                  <div className="col-12 text-center mt-4">
                    <h6>2020-Actualidad |Informática Empresarial en <br />Universidad de Costa Rica</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-12 d-flex justify-content-center mt-3  mb-3">
              <div className="tarjeta mt-3">
                <div className="row">
                  <div className="col-12">
                    <h4 className="text-center text-white mt-2">Habilidades Blandas</h4>
                  </div>
                </div>
                <div className='row d-flex justify-content-center'>
                <FontAwesomeIcon icon={faBrain} />

                </div>
                <div className="row">
                  <div className="col-12 text-center mt-4 ">
                    <div className="row">
                      <div className="col-6">
                        <h6>Creatividad</h6>
                        <h6>Paciencia</h6>
                        <h6>Colaboración</h6>
                      </div>
                      <div className="col-6">
                        <h6>Trabajo en equipo</h6>
                        <h6>Proactivo</h6>
                        <h6>Flexibilidad</h6>
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
