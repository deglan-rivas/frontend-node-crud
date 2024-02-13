import {useEffect, useState,  Fragment} from 'react';
import { Link } from 'react-router-dom';

import clienteAxios from '../../config/axios';
import Producto from './Producto';
import Spinner from '../layout/Spinner';

function Productos(props) {
    const [productos, setProductos] = useState([]);
    const [counter, setCounter] = useState(0)

    useEffect( () => {

      const consultarAPI = async () => {
          try {
              const productosConsulta = await clienteAxios.get('/productos');
              console.log(productosConsulta)
              setProductos(productosConsulta.data);
          } catch (error) {
              if(error.response.status = 500) {
                console.log(error)
              }
          }
      }
      consultarAPI();

    }, [counter]);

    if(!productos.length) return <Spinner /> 


    return (
        <Fragment>
            <h2>Productos</h2>

            <Link to={'/productos/nuevo'} className="btn btn-verde nvo-cliente"> 
                <i className="fas fa-plus-circle"></i>
                Nuevo Producto
            </Link>

            <ul className="listado-productos">
                {productos.map(producto => (
                    <Producto 
                        key={producto._id}
                        producto={producto}
                        counter={counter}
                        setCounter={setCounter}
                    />
                ))}
            </ul>
        </Fragment>
    )
}
export default Productos;