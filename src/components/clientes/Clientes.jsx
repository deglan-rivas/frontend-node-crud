import { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import clienteAxios from '../../config/axios.js';
import Cliente from './Cliente';
import Spinner from '../layout/Spinner';

function Clientes(props) {
    const [ clientes, setClientes ] = useState([]);
    // const [ areClientsChanged, setAreClientsChanged] = useState(false)
    const [counter, setCounter] = useState(0)
    const [isDone, setIsDone] = useState(true)

    useEffect( () => {
      const consultarAPI = async () => {
          try {
            setIsDone(false)
            const clientesConsulta = await clienteAxios.get('/clientes');
            // const clientesConsulta = await fetch('http://127.0.0.1:5000/clientes');
            console.log(clientesConsulta)
            // console.log(import.meta.env.VITE_BACKEND_URL)

            setClientes(clientesConsulta.data)
            setIsDone(true)

          } catch (error) {
            console.log(error)
          }
      }
      consultarAPI();
    }, [counter] );

    if(!isDone) return <Spinner /> 

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