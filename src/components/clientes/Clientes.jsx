import { useEffect, useState, Fragment } from 'react';

import clienteAxios from '../../config/axios.js';
import Cliente from './Cliente';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

function Clientes(props) {
    const [ clientes, setClientes ] = useState([]);
    // const [ areClientsChanged, setAreClientsChanged] = useState(false)
    const [counter, setCounter] = useState(0)

    useEffect( () => {
      const consultarAPI = async () => {
          try {
            const clientesConsulta = await clienteAxios.get('/clientes');
              // const clientesConsulta = await fetch('http://127.0.0.1:5000/clientes');
              console.log(clientesConsulta)

              setClientes(clientesConsulta.data);

          } catch (error) {
            console.log(error)
          }
      }
      consultarAPI();
    }, [counter] );

    if(!clientes.length) return <Spinner /> 

    return (
        <Fragment>
        
            <h2>Clientes</h2>

            <Link to={"/clientes/nuevo"} className="btn btn-verde nvo-cliente"> 
                <i className="fas fa-plus-circle"></i>
                Nuevo Cliente
            </Link>

            <ul className="listado-clientes">
                {clientes.map(cliente => (
                    <Cliente 
                        key={cliente._id}
                        cliente={cliente}
                        setCounter={setCounter}
                        counter={counter}
                    />
                ))}
            </ul>

        </Fragment>
    )
}
export default Clientes;