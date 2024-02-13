import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError()
    return(
        <div className=''>
            <h1 className=''>CRM - Clientes</h1>
            <p className=''>Hubo un error</p>
            <p className=''>{error.statusText || error.message}</p>
        </div>
    )
}