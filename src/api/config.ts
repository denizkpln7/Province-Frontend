import axios from "axios";

const baseURL = 'http://localhost:8889/'
//const proxy = { host: 'localhost', port: 3000, protocol: 'http' }
const timeout = 15000
export const config = axios.create({
    baseURL: baseURL,
    timeout: timeout,
})
