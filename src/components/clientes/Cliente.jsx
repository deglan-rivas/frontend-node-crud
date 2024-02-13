import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';

function Cliente({ cliente, setCounter, counter }) {
  // const navigate = useNavigate()

	const { _id, nombre, apellido, empresa, email, telefono } = cliente;

	const eliminarCliente = async idCliente => {
		const result = await Swal.fire({
      title: '¿Estas seguro?',
      text: "Un cliente eliminado no se puede recuperar",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
    })

    if (result.value) {
      const res = await clienteAxios.delete(`/clientes/${idCliente}`)

      Swal.fire(  
        'Eliminado', 
        res.data.mensaje, 
        'success'
      );
    }

    setCounter(counter+1)
    // navigate('/clientes', {replace: true})
    // setState nomás y debería funcioanr solo 
	};

	return (
		<li className="cliente">
			<div className="info-cliente">
				<p className="nombre">
					{nombre} {apellido}
				</p>
				<p className="empresa">{empresa}</p>
				<p>{email}</p>
				<p>Tel: {telefono}</p>
			</div>
			<div className="acciones">
				<Link to={`/clientes/editar/${_id}`} className="btn btn-azul">
					<i className="fas fa-pen-alt" />
					Editar Cliente
				</Link>

				<Link to={`/pedidos/nuevo/${_id}`} className="btn btn-amarillo">
					<i className="fas fa-plus" />
					Nuevo Pedido
				</Link>

        <button 
            type="button" 
            className="btn btn-rojo btn-eliminar" 
            onClick={() => eliminarCliente(_id)}
        >
					<i className="fas fa-times" />
					Eliminar Cliente
				</button>
			</div>
		</li>
	);
}
export default Cliente;
