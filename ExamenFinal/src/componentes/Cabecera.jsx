import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import iconImg from '../imagenes/logo_mueble.jpg'


const Cabecera = () => {
  return (
    <>
      <div className="nav">
          <ul>
            <li>
              <a href="">
                  <img src={iconImg} alt="" className="iconImg"/>
              </a>
            </li>
          </ul>
          <ul>
              <li>
                <a href="" className="redes">
                    <FaFacebook />
                </a>
                <a href="" className="redes">
                    <FaInstagramSquare />
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