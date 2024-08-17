import { Fragment } from "react";
import Menu from "./componentes/Menu";
import Banner from "./componentes/Banner";
import costaverde from "./imagenes/COSTAVERDE.jpg"
function App (){

  return (
    <>
    <Menu/>
    <Banner
      imagen = 'COSTA VERDE.jpg'
    />
    </>    
  )
}

export default App;