import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';

function Producto({producto, counter, setCounter}) {

    const eliminarProducto = async id => {
      const result = await Swal.fire({
          title: '¿Estás seguro?',
          text: "Un producto eliminado no se puede recuperar",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Eliminar',
          cancelButtonText : 'No, Cancelar'
      })

      if (result.value) {
        const res = await clienteAxios.delete(`/productos/${id}`)
        if(res.status === 200) {
          Swal.fire(
            'Eliminado',
            res.data.mensaje,
            'success'
          )
        }
      }

      setCounter(counter+1)
    }

    const {_id, nombre, precio, imagen } = producto;

    return (
      <li className="producto">
        <div className="info-producto">
            <p className="nombre">{nombre}</p>
            <p className="precio">$ {precio}</p>
            { imagen ? (
                <img src={`${import.meta.env.VITE_BACKEND_URL}/${imagen}`} alt={`imagen ${nombre}`} />
            ) : null  }
        </div>
        <div className="acciones">
            <Link to={`/productos/editar/${_id}`} className="btn btn-azul">
                <i className="fas fa-pen-alt"></i>
                Editar Producto
            </Link>

            <button 
                type="button" 
                className="btn btn-rojo btn-eliminar"
                onClick={() => eliminarProducto(_id) }
            >
                <i className="fas fa-times"></i>
                Eliminar Producto
            </button>
        </div>
      </li>
    )
}
export default Producto;