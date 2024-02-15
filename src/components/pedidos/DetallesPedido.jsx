import Swal from "sweetalert2";
import clienteAxios from "../../config/axios";

function DetallesPedido({pedido, counter, setCounter}) {

    const {cliente} = pedido;

    const eliminarPedido = async id => {
      const result = await Swal.fire({
          title: '¿Estás seguro?',
          text: "Un pedido eliminado no se puede recuperar",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Eliminar',
          cancelButtonText : 'No, Cancelar'
      })

      if (result.value) {
        const res = await clienteAxios.delete(`/pedidos/${id}`)
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

    return(
        <li className="pedido">
            <div className="info-pedido">
                <p className="id">ID: {cliente._id}</p>
                <p className="nombre">Cliente: {cliente.nombre} {cliente.apellido} </p>

                <div className="articulos-pedido">
                    <p className="productos">Artículos Pedidos: </p>
                    <ul>
                        {pedido.pedido.map(articulos => (
                            <li key={pedido._id+articulos.producto._id}>
                                <p>Artículo: {articulos.producto.nombre} </p>
                                <p>Precio: ${articulos.producto.precio} </p>
                                <p>Cantidad: {articulos.cantidad}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="total">Total: ${pedido.total} </p>

            </div>
            <div className="acciones">
                <button type="button" className="btn btn-rojo btn-eliminar" onClick={() => eliminarPedido(pedido._id) }>
                    <i className="fas fa-times"></i>
                    Eliminar Pedido
                </button>
            </div>
        </li>
    )
}

export default DetallesPedido;