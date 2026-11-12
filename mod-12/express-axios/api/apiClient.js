import axios from 'axios';

// create our own custom axios instance
export const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

// interceptors allow us to run code before the request is sent or the response is received (kinda like middleware)
apiClient.interceptors.request.use((req) => {
    console.log(`Requesting: ${req.method} ${req.url}`);
    // we need to return the config/request object
    return req;
})

apiClient.interceptors.response.use((res) => {
    console.log('Intercepting Response.')
    // make sure to return the response object
    return res;
})

