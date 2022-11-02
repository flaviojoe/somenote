import axios from "axios";

export const ApiService = axios.create(
    {
        baseURL: 'http://127.0.0.1:8000/',
        // baseURL: 'https://teacher-aula.herokuapp.com/',
        headers: {
            'Content-Type': 'application/json'
        }
    }
)