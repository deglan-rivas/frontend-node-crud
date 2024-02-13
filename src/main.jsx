import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from './components/layout/Layout';
import ErrorPage from './components/layout/ErrorPage';

import Clientes from './components/clientes/Clientes';
import NuevoCliente from './components/clientes/nuevoCliente';
import EditarCliente from './components/clientes/editarCliente';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Clientes/>,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente/>,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clientes/editar/:id',
        element: <EditarCliente/>,
        errorElement: <ErrorPage />,
      },
      {
        path: '/productos',
        element: <p>Todos los Productos</p>,
        errorElement: <ErrorPage />,
      },
      {
        path: '/productos/nuevo',
        element: <p>Producto nuevo</p>,
        errorElement: <ErrorPage />,
      },
      {
        path: '/productos/editar/:id',
        element: <p>Producto editado</p>,
        errorElement: <ErrorPage />,
      },
      {
        path: '/pedidos',
        element: <p>Todos los Pedidos</p>,
        errorElement: <ErrorPage />,
      },
      {
        path: '/pedidos/nuevo/:id',
        element: <p>Pedido nuevo</p>,
        errorElement: <ErrorPage />,
      },
      {
        path: '/pedidos/editar/:id',
        element: <p>Pedido editado</p>,
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <Clientes />,
        errorElement: <ErrorPage />,
      }
    ],
  },
  {
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
