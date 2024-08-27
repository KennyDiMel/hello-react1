import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import iconImg from '../imagenes/logomueble.jpg'


const Cabecera = () => {
  return (
    <>
      <div className="nav">
          <ul>
            <li>
              <a href="">
                  <img src={iconImg} alt="" className="iconImg"/>
                  <p className="titulo">MueblesFAST</p>
              </a>
            </li>
          </ul>
          <ul>
              <li>
                <a href="" className="redes">
                    <FaFacebook />
                </a>
                <a href="" className="redes">
                    <FaInstagram />
                </a>
                <a href="" className="redes">
                    <FaYoutube />
                </a>
              </li>
            </ul>
      </div>
    </>
  )
}

export default Cabecera;