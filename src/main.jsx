import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from './components/layout/Layout';
import ErrorPage from './components/layout/ErrorPage';

import Clientes from './components/clientes/Clientes';
import NuevoCliente from './components/clientes/NuevoCliente';
import EditarCliente from './components/clientes/EditarCliente';

import Productos from './components/productos/Productos';
import NuevoProducto from './components/productos/NuevoProducto';
import EditarProducto from './components/productos/EditarProducto';

import Pedidos from './components/pedidos/Pedidos';
import NuevoPedido from './components/pedidos/NuevoPedido';

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
        element: <Productos/>,
        errorElement: <ErrorPage />,
      },
      {
        path: '/productos/nuevo',
        element: <NuevoProducto/>,
        errorElement: <ErrorPage />,
      },
      {
        path: '/productos/editar/:id',
        element: <EditarProducto/>,
        errorElement: <ErrorPage />,
      },
      {
        path: '/pedidos',
        element: <Pedidos/>,
        errorElement: <ErrorPage />,
      },
      {
        path: '/pedidos/nuevo/:id',
        element: <NuevoPedido/>,
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
