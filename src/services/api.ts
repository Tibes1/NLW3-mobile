import axios from 'axios'

// if random problem check the IP 
const api = axios.create({
    baseURL: 'http://192.168.100.2:3333',
});

export default api