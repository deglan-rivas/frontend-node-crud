import axios from 'axios';

// TODO temporarily i hardcode baseURL with the name i use in docker-compose.yaml, just to avoid passing environment var to nginx which should read html and is not able to import.meta.env from VITE
const clienteAxios = axios.create({
    baseURL : import.meta.env.VITE_BACKEND_URL ?? 'http://localhost:5000'
});

export default clienteAxios;