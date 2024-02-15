import React, {useEffect, useState, Fragment} from 'react';
import clienteAxios from '../../config/axios';
import DetallesPedido from './DetallesPedido';

function Pedidos() {

    const [pedidos, setPedidos] = useState([]);
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const consultarAPI = async () => {
            // obtener los pedidos
            const resultado = await clienteAxios.get('/pedidos');
            console.log(resultado.data)
            setPedidos(resultado.data);
        }

        consultarAPI();
    }, [counter]);

    return (
        <Fragment>
            <h2>Pedidos</h2>

            <ul className="listado-pedidos">
                {pedidos.map(pedido => (
                    <DetallesPedido 
                        key={pedido._id}
                        pedido={pedido}
                        counter={counter}
                        setCounter={setCounter}
                    />
                ))}
            </ul>
        </Fragment>
    )
}
export default Pedidos;