import { Fragment } from "react";
import Menu from "./componentes/Menu";
import Banner from "./componentes/Banner";
import CityImages from "./componentes/CityImages";
import Testimonios from "./componentes/Testimonios";
import Footer from "./componentes/Footer";

function App (){

  return (
    <>
    <Menu/>
    <Banner/>
    <CityImages/>
    <Testimonios/>
    <Footer/>
    </>    
  )
}

export default App;