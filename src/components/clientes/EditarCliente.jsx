import { Fragment, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';

import clienteAxios from '../../config/axios';

function EditarCliente() {
    const navigate = useNavigate()
    const { id } = useParams()
    // console.log(params)

    const [cliente, setCliente] = useState({
        nombre: '',
        apellido: '',
        empresa: '',
        email: '',
        telefono: ''
    });

    const consultarAPI = async () => {
        const clienteConsulta = await clienteAxios.get(`/clientes/${id}`);

        setCliente(clienteConsulta.data);
    }

    useEffect(() => {
        consultarAPI();
    }, []);

    const actualizarState = e => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        })
    }

    const actualizarCliente = async e => {
        e.preventDefault();

        const res = await clienteAxios.put(`/clientes/${cliente._id}`, cliente)
        if (res.data.code === 11000) {
            Swal.fire({
                type: 'error',
                title: 'Hubo un error',
                text: 'Ese cliente ya esta registrado'
            })
        } else {
            Swal.fire(
                'Correcto',
                'Se actualizó Correctamente',
                'success'
            )
        }

        navigate('/')
    }

    const validarCliente = () => {
        const { nombre, apellido, email, empresa, telefono } = cliente;

        let valido = !nombre.length || !apellido.length || !email.length || !empresa.length || !telefono.length;

        return valido;
    }

    return (
        <Fragment>
            <h2>Editar Cliente</h2>

            <form
                onSubmit={actualizarCliente}
            >
                <legend>Llena todos los campos</legend>
                <div className="campo">
                    <label>Nombre:</label>
                    <input type="text"
                        placeholder="Nombre Cliente"
                        name="nombre"
                        onChange={actualizarState}
                        value={cliente.nombre}
                    />
                </div>

                <div className="campo">
                    <label>Apellido:</label>
                    <input type="text"
                        placeholder="Apellido Cliente"
                        name="apellido"
                        onChange={actualizarState}
                        value={cliente.apellido}
                    />
                </div>

                <div className="campo">
                    <label>Empresa:</label>
                    <input type="text"
                        placeholder="Empresa Cliente"
                        name="empresa"
                        onChange={actualizarState}
                        value={cliente.empresa}
                    />
                </div>

                <div className="campo">
                    <label>Email:</label>
                    <input type="email"
                        placeholder="Email Cliente"
                        name="email"
                        onChange={actualizarState}
                        value={cliente.email}
                    />
                </div>

                <div className="campo">
                    <label>Teléfono:</label>
                    <input type="tel"
                        placeholder="Teléfono Cliente"
                        name="telefono"
                        onChange={actualizarState}
                        value={cliente.telefono}
                    />
                </div>

                <div className="enviar">
                    <input
                        type="submit"
                        className="btn btn-azul"
                        value="Guardar Cambios"
                        disabled={validarCliente()}
                    />
                </div>
            </form>
        </Fragment>
    )
}

export default EditarCliente;