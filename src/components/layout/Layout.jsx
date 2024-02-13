import {Fragment} from "react";
import { Outlet } from 'react-router-dom'

import Header from "./Header"; 
import Navegacion from "./Navegacion";

const Layout = () => (
  <Fragment>
    <Header/>
    <div className="grid contenedor contenido-principal">
      <Navegacion/>

      <main className="caja-contenido col-9">
        <Outlet/>
      </main>
    </div>
  </Fragment>
)

export default Layout